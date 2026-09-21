"use client";

import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import { questionSets } from "../data/kangaroo";
import {
  toEditableQuestions,
  type EditableQuestion,
} from "../data/kangaroo/editor";
import type { QuestionOption } from "../data/kangaroo/types";

type ImageTarget =
  | { kind: "question" }
  | { kind: "extra" }
  | { kind: "option"; optionIndex: number };

const optionLetters = ["A", "B", "C", "D", "E", "F"];

function formatGrade(value: string) {
  return value.replace(/^Grades\b/, "Grade");
}

function fileToDataUrl(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(new Error("Unable to read image"));
    reader.readAsDataURL(file);
  });
}

function optionType(text = "", image?: string): QuestionOption["type"] {
  if (text && image) return "mixed";
  if (image) return "image";
  return "text";
}

export default function EditPage() {
  const setEntries = useMemo(() => Object.values(questionSets).sort((a, b) => a.year - b.year), []);
  const gradeOptions = useMemo(() => Array.from(new Set(setEntries.map((entry) => entry.grades))).sort((a, b) => a.localeCompare(b, undefined, { numeric: true })), [setEntries]);
  const [setId, setSetId] = useState("2015");
  const [questions, setQuestions] = useState<EditableQuestion[]>(() => toEditableQuestions(questionSets["2015"].questions));
  const [selectedNumber, setSelectedNumber] = useState(1);
  const [saveState, setSaveState] = useState<"loading" | "dirty" | "saving" | "saved" | "error">("saved");
  const [savedFile, setSavedFile] = useState("");
  const [preview, setPreview] = useState(false);
  const [imageTarget, setImageTarget] = useState<ImageTarget | null>(null);
  const [pendingImageRemovals, setPendingImageRemovals] = useState<string[]>([]);
  const imageInputRef = useRef<HTMLInputElement>(null);

  const quiz = questionSets[setId];
  const yearEntries = useMemo(() => setEntries.filter((entry) => entry.grades === quiz.grades), [quiz.grades, setEntries]);
  const selectedQuestion = questions.find((question) => question.number === selectedNumber) ?? questions[0];
  const selectedIndex = selectedQuestion ? questions.findIndex((question) => question.number === selectedQuestion.number) : 0;

  function changeSet(nextSetId: string) {
    if (nextSetId === setId) return;
    setSetId(nextSetId);
    setQuestions(toEditableQuestions(questionSets[nextSetId].questions));
    setSelectedNumber(questionSets[nextSetId].questions[0]?.number ?? 1);
    setPreview(false);
    setSaveState("saved");
    setSavedFile("");
    setPendingImageRemovals([]);
  }

  function changeGrade(nextGrade: string) {
    const firstSet = setEntries.find((entry) => entry.grades === nextGrade);
    if (firstSet) changeSet(firstSet.id);
  }

  function changeYear(nextYear: string) {
    const nextSet = yearEntries.find((entry) => String(entry.year) === nextYear);
    if (nextSet) changeSet(nextSet.id);
  }

  function markImageForRemoval(image?: string) {
    if (!image || image.startsWith("data:")) return;
    setPendingImageRemovals((current) => current.includes(image) ? current : [...current, image]);
  }

  function updateQuestion(patch: Partial<EditableQuestion>) {
    if (!selectedQuestion) return;
    setSaveState("dirty");
    setQuestions((current) => current.map((question) => (
      question.number === selectedQuestion.number ? { ...question, ...patch } : question
    )));
  }

  function updateOption(optionIndex: number, patch: Partial<QuestionOption>) {
    if (!selectedQuestion) return;
    updateQuestion({
      options: selectedQuestion.options.map((option, index) => (
        index === optionIndex ? { ...option, ...patch } : option
      )),
    });
  }

  function setCorrectAnswer(optionIndex: number) {
    if (!selectedQuestion || optionIndex < 0 || optionIndex >= selectedQuestion.options.length) return;
    updateQuestion({ answer: optionIndex });
  }

  function changeOptionType(optionIndex: number, type: QuestionOption["type"]) {
    const option = selectedQuestion?.options[optionIndex];
    if (!option) return;
    if (type === "text") markImageForRemoval(option.image);
    updateOption(optionIndex, {
      type,
      text: type === "image" ? "" : option.text,
      image: type === "text" ? undefined : option.image,
    });
  }

  function addOption() {
    if (!selectedQuestion) return;
    const nextIndex = selectedQuestion.options.length;
    updateQuestion({
      options: [
        ...selectedQuestion.options,
        { id: `${selectedQuestion.number}-${Date.now()}`, type: "text", text: "" },
      ],
    });
    setTimeout(() => document.getElementById(`option-${selectedQuestion.number}-${nextIndex}`)?.focus(), 0);
  }

  function removeOption(optionIndex: number) {
    if (!selectedQuestion || selectedQuestion.options.length <= 2) return;
    markImageForRemoval(selectedQuestion.options[optionIndex]?.image);
    const options = selectedQuestion.options.filter((_, index) => index !== optionIndex);
    const answer = selectedQuestion.answer === optionIndex
      ? 0
      : selectedQuestion.answer > optionIndex ? selectedQuestion.answer - 1 : selectedQuestion.answer;
    updateQuestion({ options, answer: Math.min(answer, options.length - 1) });
  }

  function moveOption(optionIndex: number, direction: -1 | 1) {
    if (!selectedQuestion) return;
    const nextIndex = optionIndex + direction;
    if (nextIndex < 0 || nextIndex >= selectedQuestion.options.length) return;
    const options = [...selectedQuestion.options];
    [options[optionIndex], options[nextIndex]] = [options[nextIndex], options[optionIndex]];
    const answer = selectedQuestion.answer === optionIndex
      ? nextIndex
      : selectedQuestion.answer === nextIndex ? optionIndex : selectedQuestion.answer;
    updateQuestion({ options, answer });
  }

  function openImagePicker(target: ImageTarget) {
    setImageTarget(target);
    imageInputRef.current?.click();
  }

  function selectPasteTarget(target: ImageTarget) {
    setImageTarget(target);
  }

  async function applyImageFile(file: File, target: ImageTarget) {
    if (!file.type.startsWith("image/")) {
      window.alert("Please choose an image file.");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      window.alert("Images must be 5MB or smaller.");
      return;
    }

    try {
      const image = await fileToDataUrl(file);
      if (target.kind === "question") {
        markImageForRemoval(selectedQuestion?.image);
        updateQuestion({ image });
      } else if (target.kind === "extra") {
        markImageForRemoval(selectedQuestion?.imageExtra);
        updateQuestion({ imageExtra: image });
      } else {
        const option = selectedQuestion?.options[target.optionIndex];
        markImageForRemoval(option?.image);
        updateOption(target.optionIndex, {
          image,
          type: optionType(option?.text, image),
        });
      }
    } catch {
      window.alert("Could not read the image. Please try again.");
    } finally {
      setImageTarget(null);
    }
  }

  function handlePaste(event: React.ClipboardEvent<HTMLElement>, targetOverride?: ImageTarget) {
    event.stopPropagation();
    const file = Array.from(event.clipboardData.files).find((item) => item.type.startsWith("image/"));
    const target = targetOverride ?? imageTarget;
    if (!file || !target) return;
    event.preventDefault();
    void applyImageFile(file, target);
  }

  async function handleImagePicked(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    const target = imageTarget;
    event.target.value = "";
    if (!file || !target) return;
    await applyImageFile(file, target);
  }

  function removeQuestionImage() {
    markImageForRemoval(selectedQuestion?.image);
    updateQuestion({ image: undefined, imageAlt: undefined });
  }

  function removeQuestionExtra() {
    markImageForRemoval(selectedQuestion?.imageExtra);
    updateQuestion({ imageExtra: undefined });
  }

  function removeOptionImage(optionIndex: number) {
    const option = selectedQuestion?.options[optionIndex];
    markImageForRemoval(option?.image);
    updateOption(optionIndex, { image: undefined, type: optionType(option?.text) });
  }

  function resetToSource() {
    if (!window.confirm("Discard unsaved changes and restore the currently loaded question bank content?")) return;
    setQuestions(toEditableQuestions(quiz.questions));
    setSaveState("saved");
    setSavedFile("");
    setPendingImageRemovals([]);
  }

  async function saveToSource() {
    if (questions.length === 0) return;
    setSaveState("saving");
    try {
      const response = await fetch("/api/editor/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ setId, questions, removedImages: pendingImageRemovals }),
      });
      const data = await response.json() as { error?: string; file?: string; questions?: Parameters<typeof toEditableQuestions>[0] };
      if (!response.ok) throw new Error(data.error || "Could not write the question bank file.");
      if (data.questions) setQuestions(toEditableQuestions(data.questions));
      setSavedFile(data.file || "");
      setPendingImageRemovals([]);
      setSaveState("saved");
    } catch (error) {
      setSaveState("error");
      window.alert(error instanceof Error ? error.message : "Could not write the question bank file.");
    }
  }

  function goToQuestion(index: number) {
    const question = questions[Math.max(0, Math.min(questions.length - 1, index))];
    if (question) {
      setSelectedNumber(question.number);
      setPreview(false);
    }
  }

  const statusText = saveState === "loading" ? "Loading" : saveState === "saving" ? "Writing file..." : saveState === "dirty" ? "Unsaved changes" : saveState === "error" ? "Write failed" : savedFile ? "Saved to source file" : "No changes";

  if (!selectedQuestion) return null;

  return (
    <main className="editor-shell" onPaste={handlePaste}>
      <header className="editor-topbar">
        <div className="editor-brand-block">
          <Link className="editor-back" href="/">← Back to question bank</Link>
          <div className="editor-brand">QUESTION EDITOR <span>Local source editor</span></div>
        </div>
        <div className="editor-top-actions">
          <div className="editor-set-filters" aria-label="Choose a grade and year">
            <label className="editor-set-picker">
              <span>Grade</span>
              <select value={quiz.grades} onChange={(event) => changeGrade(event.target.value)}>
                {gradeOptions.map((grade) => <option key={grade} value={grade}>{formatGrade(grade)}</option>)}
              </select>
            </label>
            <label className="editor-set-picker">
              <span>Year</span>
              <select value={String(quiz.year)} onChange={(event) => changeYear(event.target.value)}>
                {yearEntries.map((entry) => <option key={entry.id} value={entry.year}>{entry.year} &middot; {entry.group}</option>)}
              </select>
            </label>
          </div>
          <span className={`editor-save-state ${saveState}`} title={savedFile}>{statusText}</span>
          <button className="editor-secondary-button" type="button" onClick={resetToSource}>Restore source content</button>
          <button className="editor-primary-button" type="button" onClick={saveToSource} disabled={saveState === "saving"}>{saveState === "saving" ? "Writing..." : "Save to question bank file"}</button>
          <Link className="editor-preview-link" href={`/?set=${setId}`}>Answer page ↗</Link>
        </div>
      </header>

      <input ref={imageInputRef} className="editor-hidden-input" type="file" accept="image/*" onChange={handleImagePicked} />

      <div className="editor-workspace">
        <aside className="editor-question-list">
          <div className="editor-list-heading"><div><span className="editor-eyebrow">QUESTION SET</span><h1>{quiz.year} {quiz.group}</h1></div><b>{questions.length}<small>questions</small></b></div>
          <div className="editor-list-items">
            {questions.map((question, index) => (
              <button className={`editor-question-item ${question.number === selectedQuestion.number ? "active" : ""}`} key={question.number} type="button" onClick={() => goToQuestion(index)}>
                <span className="editor-question-number">{String(question.number).padStart(2, "0")}</span>
                <span className="editor-question-summary"><strong>{`Question ${String(question.number).padStart(2, "0")}`}</strong><small>{question.options.length} options · {question.points} points</small></span>
                <span className="editor-question-mark">{question.image || question.options.some((option) => option.image) ? "●" : ""}</span>
              </button>
            ))}
          </div>
        </aside>

        <section className="editor-content">
          <div className="editor-content-heading">
            <div><span className="editor-eyebrow">EDITING QUESTION {String(selectedQuestion.number).padStart(2, "0")}</span><h2>{`Question ${String(selectedQuestion.number).padStart(2, "0")}`}</h2></div>
            <div className="editor-view-toggle"><button className={!preview ? "active" : ""} type="button" onClick={() => setPreview(false)}>Edit</button><button className={preview ? "active" : ""} type="button" onClick={() => setPreview(true)}>Preview</button></div>
          </div>

          {preview ? (
            <div className="editor-preview-card">
              <div className="editor-preview-meta"><span>{selectedQuestion.points} POINTS</span><b>QUESTION {String(selectedQuestion.number).padStart(2, "0")}</b></div>
              <p>{selectedQuestion.prompt}</p>
              {selectedQuestion.image && <img className="editor-preview-image" src={selectedQuestion.image} alt={selectedQuestion.imageAlt || "Question image"} />}
              <div className="editor-preview-options">
                {selectedQuestion.options.map((option, index) => <div className={`editor-preview-option ${selectedQuestion.answer === index ? "correct" : ""}`} key={option.id}><span>{optionLetters[index] ?? String(index + 1)}</span>{option.image && <img src={option.image} alt={option.imageAlt || `${optionLetters[index]} option`} />}{option.text && <strong>{option.text}</strong>}</div>)}
              </div>
              <p className="editor-preview-answer">Correct answer: {optionLetters[selectedQuestion.answer] ?? String(selectedQuestion.answer + 1)}</p>
            </div>
          ) : (
            <div className="editor-form">
              <section className="editor-form-section">
                <div className="editor-section-heading"><div><span className="editor-eyebrow">01 · BASIC INFO</span><h3>Question content</h3></div><span className="editor-section-note">Changes are saved when you click Save</span></div>
                <div className="editor-field-grid">
                  <label className="editor-field"><span>Points</span><select value={selectedQuestion.points} onChange={(event) => updateQuestion({ points: Number(event.target.value) as EditableQuestion["points"] })}><option value={3}>3 points</option><option value={4}>4 points</option><option value={5}>5 points</option></select></label>
                </div>
                <label className="editor-field"><span>Prompt</span><textarea className="editor-prompt-input" value={selectedQuestion.prompt} onChange={(event) => updateQuestion({ prompt: event.target.value })} placeholder="Enter the question prompt..." /></label>
              </section>

              <section className="editor-form-section">
                <div className="editor-section-heading"><div><span className="editor-eyebrow">02 · QUESTION IMAGE</span><h3>Question image</h3></div><span className="editor-section-note">Optional · PNG/JPG/GIF, max 5MB</span></div>
                {selectedQuestion.image ? <div className="editor-image-card" onPaste={(event) => handlePaste(event, { kind: "question" })}><img src={selectedQuestion.image} alt={selectedQuestion.imageAlt || "Question image"} /><div className="editor-image-actions"><label className="editor-field"><span>Image alt text</span><input value={selectedQuestion.imageAlt || ""} onChange={(event) => updateQuestion({ imageAlt: event.target.value })} placeholder="Describe the image" /></label><div><button className="editor-secondary-button" type="button" onClick={() => openImagePicker({ kind: "question" })}>Replace image</button><button className="editor-secondary-button" type="button" onClick={() => selectPasteTarget({ kind: "question" })}>Paste image</button><button className="editor-danger-button" type="button" onClick={removeQuestionImage}>Remove image</button></div></div></div> : <button className="editor-upload-zone" type="button" onClick={() => openImagePicker({ kind: "question" })} onPaste={(event) => handlePaste(event, { kind: "question" })}><span>＋</span><strong>Upload question image</strong><small>Choose a file or paste a screenshot here</small></button>}
              </section>

              <section className="editor-form-section">
              <section className="editor-form-section">
                <div className="editor-section-heading"><div><span className="editor-eyebrow">COMBINED ANSWER IMAGE</span><h3>Answer choices image</h3></div><span className="editor-section-note">Use one image when relative sizes matter</span></div>
                {selectedQuestion.imageExtra ? <div className="editor-image-card editor-extra-image-card" onPaste={(event) => handlePaste(event, { kind: "extra" })}><img src={selectedQuestion.imageExtra} alt="Answer choices" /><div className="editor-image-actions"><p className="editor-image-help">Keep all visual answer choices in one image to preserve their original scale.</p><div><button className="editor-secondary-button" type="button" onClick={() => openImagePicker({ kind: "extra" })}>Replace image</button><button className="editor-secondary-button" type="button" onClick={() => selectPasteTarget({ kind: "extra" })}>Paste image</button><button className="editor-danger-button" type="button" onClick={removeQuestionExtra}>Remove image</button></div></div></div> : <button className="editor-upload-zone" type="button" onClick={() => openImagePicker({ kind: "extra" })} onPaste={(event) => handlePaste(event, { kind: "extra" })}><span>＋</span><strong>Upload answer choices image</strong><small>Best for choices with different visual sizes</small></button>}
              </section>

                <div className="editor-section-heading"><div><span className="editor-eyebrow">03 · ANSWER OPTIONS</span><h3>Answer options</h3></div><div className="editor-section-actions"><label className="editor-answer-picker"><span>Correct answer</span><select aria-label="Correct answer" value={selectedQuestion.answer} onChange={(event) => setCorrectAnswer(Number(event.target.value))}>{selectedQuestion.options.map((_, index) => <option key={index} value={index}>{optionLetters[index] ?? `Option ${index + 1}`}</option>)}</select></label><button className="editor-add-button" type="button" onClick={addOption}>＋ Add option</button></div></div>
                <div className="editor-options-list">
                  {selectedQuestion.options.map((option, index) => (
                    <div className={`editor-option-card ${selectedQuestion.answer === index ? "is-answer" : ""}`} key={option.id}>
                      <div className="editor-option-top"><span className="editor-option-letter">{optionLetters[index] ?? String(index + 1)}</span><select value={option.type} onChange={(event) => changeOptionType(index, event.target.value as QuestionOption["type"])}><option value="text">Text option</option><option value="image">Image option</option></select><div className="editor-option-tools"><button type="button" title="Move up" onClick={() => moveOption(index, -1)} disabled={index === 0}>↑</button><button type="button" title="Move down" onClick={() => moveOption(index, 1)} disabled={index === selectedQuestion.options.length - 1}>↓</button><button className="danger-text" type="button" title="Delete" onClick={() => removeOption(index)} disabled={selectedQuestion.options.length <= 2}>×</button></div></div>
                      {(option.type === "text" || option.type === "mixed") && <input id={`option-${selectedQuestion.number}-${index}`} className="editor-option-text" value={option.text || ""} onChange={(event) => updateOption(index, { text: event.target.value, type: optionType(event.target.value, option.image) })} placeholder={`Enter text for option ${optionLetters[index] ?? index + 1}`} />}
                      {option.image ? <div className="editor-option-image" onPaste={(event) => handlePaste(event, { kind: "option", optionIndex: index })}><img src={option.image} alt={option.imageAlt || `${optionLetters[index]} option`} /><div><button className="editor-secondary-button" type="button" onClick={() => openImagePicker({ kind: "option", optionIndex: index })}>Replace</button><button className="editor-secondary-button" type="button" onClick={() => selectPasteTarget({ kind: "option", optionIndex: index })}>Paste</button><button className="editor-danger-button" type="button" onClick={() => removeOptionImage(index)}>Remove image</button></div></div> : (option.type === "image" || option.type === "mixed") && <button className="editor-option-upload" type="button" onClick={() => openImagePicker({ kind: "option", optionIndex: index })} onPaste={(event) => handlePaste(event, { kind: "option", optionIndex: index })}>＋ Upload option image or paste</button>}
                      <button className={`editor-answer-button ${selectedQuestion.answer === index ? "selected" : ""}`} type="button" onClick={() => setCorrectAnswer(index)}>{selectedQuestion.answer === index ? "✓ Correct answer" : "Set as correct answer"}</button>
                    </div>
                  ))}
                </div>
              </section>

              <section className="editor-form-section">
                <div className="editor-section-heading"><div><span className="editor-eyebrow">04 · EXPLANATION</span><h3>Hint and explanation</h3></div></div>
                <div className="editor-field-grid editor-field-grid-wide"><label className="editor-field"><span>Hint</span><textarea value={selectedQuestion.hint} onChange={(event) => updateQuestion({ hint: event.target.value })} placeholder="Give students a hint..." /></label><label className="editor-field"><span>Explanation</span><textarea value={selectedQuestion.explanation} onChange={(event) => updateQuestion({ explanation: event.target.value })} placeholder="Explain the reasoning behind the correct answer..." /></label></div>
              </section>
            </div>
          )}

          <footer className="editor-bottom-nav"><button className="editor-secondary-button" type="button" onClick={() => goToQuestion(selectedIndex - 1)} disabled={selectedIndex === 0}>← Previous</button><span>Question {selectedIndex + 1} of {questions.length} questions</span><button className="editor-primary-button" type="button" onClick={() => goToQuestion(selectedIndex + 1)} disabled={selectedIndex === questions.length - 1}>Next →</button></footer>
        </section>
      </div>
    </main>
  );
}
