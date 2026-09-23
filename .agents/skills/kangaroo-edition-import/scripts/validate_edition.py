#!/usr/bin/env python3
"""Read-only structural validator for a grade-aware Kangaroo edition file."""

from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path


STRING_RE = re.compile(r'''"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`''')
ASSET_RE = re.compile(r'''["'](/assets/[^"']+)["']''')


def locate_app_root(start: Path) -> Path:
    for candidate in (start, *start.parents):
        if (candidate / "app" / "data" / "kangaroo").is_dir():
            return candidate
    raise SystemExit(f"Could not find app/data/kangaroo at or above {start}")


def find_matching(text: str, opening: int, left: str, right: str) -> int:
    depth = 0
    quote = ""
    escaped = False
    for index in range(opening, len(text)):
        char = text[index]
        if quote:
            if escaped:
                escaped = False
            elif char == "\\":
                escaped = True
            elif char == quote:
                quote = ""
            continue
        if char in "\"'`":
            quote = char
        elif char == left:
            depth += 1
        elif char == right:
            depth -= 1
            if depth == 0:
                return index
    return -1


def top_level_items(body: str, left: str = "{") -> list[str]:
    right = {"{": "}", "[": "]", "(": ")"}[left]
    items: list[str] = []
    start: int | None = None
    stack: list[str] = []
    quote = ""
    escaped = False
    for index, char in enumerate(body):
        if quote:
            if escaped:
                escaped = False
            elif char == "\\":
                escaped = True
            elif char == quote:
                quote = ""
            continue
        if char in "\"'`":
            quote = char
            continue
        if char in "{[(":
            if not stack and char == left:
                start = index
            stack.append(char)
            continue
        if char in "}])":
            if stack:
                stack.pop()
            if not stack and start is not None and char == right:
                items.append(body[start : index + 1])
                start = None
    return items


def question_blocks(source: str) -> list[str]:
    match = re.search(r"const\s+questions\w*\s*:\s*Question\[\]\s*=\s*\[", source)
    if not match:
        return []
    opening = match.end() - 1
    closing = find_matching(source, opening, "[", "]")
    if closing < 0:
        return []
    return top_level_items(source[opening + 1 : closing])


def field_number(block: str, field: str) -> int | None:
    match = re.search(rf"\b{re.escape(field)}\s*:\s*(-?\d+)", block)
    return int(match.group(1)) if match else None


def field_array(block: str, field: str) -> str | None:
    match = re.search(rf"\b{re.escape(field)}\s*:\s*\[", block)
    if not match:
        return None
    opening = block.find("[", match.start())
    closing = find_matching(block, opening, "[", "]")
    return block[opening + 1 : closing] if closing >= 0 else None


def field_string(block: str, field: str) -> str | None:
    match = re.search(rf"\b{re.escape(field)}\s*:\s*", block)
    if not match:
        return None
    value = block[match.end() :]
    string = STRING_RE.match(value.lstrip())
    if not string:
        return None
    return string.group(0)[1:-1].strip()


def array_items(array_body: str) -> list[str]:
    items: list[str] = []
    start = 0
    stack: list[str] = []
    quote = ""
    escaped = False
    for index, char in enumerate(array_body):
        if quote:
            if escaped:
                escaped = False
            elif char == "\\":
                escaped = True
            elif char == quote:
                quote = ""
            continue
        if char in "\"'`":
            quote = char
        elif char in "{[()":
            stack.append(char)
        elif char in "}])":
            if stack:
                stack.pop()
        elif char == "," and not stack:
            if array_body[start:index].strip():
                items.append(array_body[start:index].strip())
            start = index + 1
    if array_body[start:].strip():
        items.append(array_body[start:].strip())
    return items


def valid_asset(path: Path) -> bool:
    if not path.is_file() or path.stat().st_size == 0:
        return False
    header = path.read_bytes()[:16]
    suffix = path.suffix.lower()
    if suffix == ".png":
        return header.startswith(b"\x89PNG\r\n\x1a\n")
    if suffix in {".jpg", ".jpeg"}:
        return header.startswith(b"\xff\xd8")
    if suffix == ".gif":
        return header.startswith((b"GIF87a", b"GIF89a"))
    if suffix == ".svg":
        try:
            return b"<svg" in path.read_bytes()[:2048].lower()
        except OSError:
            return False
    return True


def main() -> int:
    grade_groups = {
        "Grades 1-2": "Felix",
        "Grades 3-4": "Ecolier",
        "Grades 5-6": "Benjamin",
        "Grades 7-8": "Kadett",
        "Grades 9-10": "Junior",
        "Grades 11-12": "Student",
    }
    parser = argparse.ArgumentParser(
        description="Check a Kangaroo edition's structure, registry, and referenced assets."
    )
    parser.add_argument("--year", type=int, required=True)
    parser.add_argument("--grade-band", choices=tuple(grade_groups), required=True)
    parser.add_argument("--group", choices=tuple(grade_groups.values()), required=True)
    parser.add_argument("--repo-root", type=Path, default=Path("."))
    parser.add_argument("--expected-questions", type=int)
    parser.add_argument("--expected-choices", type=int)
    parser.add_argument("--expected-time-limit", type=int)
    parser.add_argument("--require-source-url", action="store_true")
    args = parser.parse_args()

    if grade_groups[args.grade_band] != args.group:
        parser.error(f"{args.grade_band} maps to {grade_groups[args.grade_band]}, not {args.group}")

    app_root = locate_app_root(args.repo_root.resolve())
    grade_slug = "grades-" + args.grade_band.removeprefix("Grades ").lower()
    group_slug = args.group.lower()
    edition = (
        app_root / "app" / "data" / "kangaroo" / "editions"
        / grade_slug / group_slug / f"{args.year}.ts"
    )
    index = app_root / "app" / "data" / "kangaroo" / "index.ts"
    failures: list[str] = []

    if not edition.is_file():
        print(f"FAIL: missing edition file: {edition}")
        return 1

    source = edition.read_text(encoding="utf-8")
    blocks = question_blocks(source)
    if not blocks:
        failures.append("could not find a Question[] array")
    if args.expected_questions is not None and len(blocks) != args.expected_questions:
        failures.append(
            f"paper has {args.expected_questions} questions, edition has {len(blocks)}"
        )

    def top_level_value(block: str, field: str) -> str | None:
        pattern = re.compile(rf"^[ \t]{{4}}{re.escape(field)}\s*:\s*(.*)$", re.MULTILINE)
        for line in block.splitlines():
            match = pattern.match(line)
            if match:
                value = STRING_RE.match(match.group(1).lstrip())
                return value.group(0)[1:-1].strip() if value else None
        return None

    def top_level_has_field(block: str, field: str) -> bool:
        return re.search(
            rf"^[ \t]{{4}}{re.escape(field)}\s*:",
            block,
            re.MULTILINE,
        ) is not None

    numbers: list[int] = []
    for position, block in enumerate(blocks, start=1):
        number = field_number(block, "number")
        points = field_number(block, "points")
        answer = field_number(block, "answer")
        numbers.append(number if number is not None else -1)
        if number != position:
            failures.append(f"question position {position} has number {number}")
        if points not in {3, 4, 5}:
            failures.append(f"question {position}: points must fit Difficulty (3, 4, or 5), found {points}")

        prompt = field_string(block, "prompt")
        if prompt is None or not prompt.strip():
            has_question_visual = bool(top_level_value(block, "image"))
            has_visual_alt = bool(top_level_value(block, "imageAlt"))
            if not (has_question_visual and has_visual_alt):
                failures.append(
                    f"question {position}: prompt is empty without a question-level image and imageAlt"
                )

        for field in ("hint", "explanation"):
            value = field_string(block, field)
            if value is None or not value.strip():
                failures.append(f"question {position}: missing or empty {field}")

        options = field_array(block, "options")
        option_count = len(array_items(options)) if options is not None else 0
        if option_count == 0:
            failures.append(f"question {position}: missing or empty options array")
        elif args.expected_choices is not None and option_count != args.expected_choices:
            failures.append(
                f"question {position}: paper has {args.expected_choices} choices, found {option_count}"
            )
        if answer is None or answer < 0 or answer >= option_count:
            failures.append(
                f"question {position}: answer must index one of {option_count} choices, found {answer}"
            )

        option_images = field_array(block, "optionImages")
        if option_images is not None and len(array_items(option_images)) != option_count:
            failures.append(
                f"question {position}: optionImages count must match options count ({option_count})"
            )

        has_visual_field = any(
            top_level_has_field(block, field)
            for field in ("image", "imageExtra", "optionImages")
        )
        if has_visual_field and not top_level_value(block, "imageAlt"):
            failures.append(f"question {position}: question-level visual has no imageAlt")

        for asset in ASSET_RE.findall(block):
            asset_file = app_root / "public" / asset.lstrip("/")
            if not valid_asset(asset_file):
                failures.append(f"question {position}: missing, empty, or invalid asset {asset}")

    if len(set(numbers)) != len(numbers):
        failures.append("question numbers are not unique")
    if numbers and numbers != list(range(1, len(numbers) + 1)):
        failures.append(f"question numbers must run from 1 to {len(numbers)}, found {numbers}")

    metadata = {
        "year": field_number(source, "year"),
        "group": field_string(source, "group"),
        "grades": field_string(source, "grades"),
        "location": field_string(source, "location"),
        "date": field_string(source, "date"),
        "time limit": field_number(source, "timeLimitMinutes"),
    }
    expected_metadata = {
        "year": args.year,
        "group": args.group,
        "grades": args.grade_band,
    }
    for label, expected in expected_metadata.items():
        if metadata[label] != expected:
            failures.append(f"metadata {label}: expected {expected!r}, found {metadata[label]!r}")
    for label in ("location", "date"):
        if metadata[label] is None or not metadata[label].strip():
            failures.append(f"metadata {label} is missing or empty")
    time_limit = metadata["time limit"]
    if time_limit is None or time_limit <= 0:
        failures.append(f"timeLimitMinutes must be a positive integer, found {time_limit}")
    elif args.expected_time_limit is not None and time_limit != args.expected_time_limit:
        failures.append(
            f"paper time limit is {args.expected_time_limit} minutes, edition has {time_limit}"
        )
    if args.require_source_url and not re.search(
        r"\bsourceUrl\s*:\s*[\"']https?://",
        source,
    ):
        failures.append("sourceUrl is required for a newly imported edition")

    export_match = re.search(
        r"export\s+const\s+([A-Za-z_$][\w$]*)\s*:\s*QuestionSet\b",
        source,
    )
    if not export_match:
        failures.append("could not find an exported QuestionSet")
    if not index.is_file():
        failures.append("missing app/data/kangaroo/index.ts")
    elif export_match:
        index_source = index.read_text(encoding="utf-8")
        export_name = export_match.group(1)
        module_path = f"./editions/{grade_slug}/{group_slug}/{args.year}"
        import_pattern = (
            rf'import\s*\{{\s*{re.escape(export_name)}\s*\}}\s*from\s*'
            rf"[\"']{re.escape(module_path)}[\"']"
        )
        if not re.search(import_pattern, index_source):
            failures.append(f"{export_name} is not imported from {module_path}")

        registry_match = re.search(
            r"const\s+rawQuestionSets\b[\s\S]*?=\s*\{([\s\S]*?)\n\};",
            index_source,
        )
        registry_body = registry_match.group(1) if registry_match else ""
        registry_pattern = (
            rf"[\"'][^\"']+[\"']\s*:\s*{re.escape(export_name)}\b"
        )
        if not re.search(registry_pattern, registry_body):
            failures.append(f"{export_name} is not registered in rawQuestionSets")

    print(f"Edition: {args.group} | {args.grade_band} | {args.year}")
    print(f"File: {edition}")
    print(f"Questions: {len(blocks)}")
    if failures:
        for failure in failures:
            print(f"FAIL: {failure}")
        return 1
    print("PASS: structural, metadata, registry, and asset-path checks")
    print("MANUAL: compare every question and visual with the selected paper and answer key")
    return 0

if __name__ == "__main__":
    sys.exit(main())
