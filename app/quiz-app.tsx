"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { questionSets } from "./data/kangaroo";

function AppIcon({ children }: { children: React.ReactNode }) { return <span className="icon" aria-hidden="true">{children}</span>; }
function ShapeIcon({ shape }: { shape: string }) { return <span className={`shape-icon ${shape}`} aria-hidden="true" />; }
function formatGrade(value: string) { return value.replace(/^Grades\b/, "Grade"); }
function formatTime(totalSeconds: number) { const safe = Math.max(0, totalSeconds); const minutes = Math.floor(safe / 60); const seconds = safe % 60; return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`; }
type AppRoute =
  | { type: "home" }
  | { type: "question"; setId: string; questionNumber: number }
  | { type: "results"; setId: string }
  | { type: "invalid" };
type SavedProgress = {
  answers: Record<number, number>;
  checked: Record<number, boolean>;
  current: number;
  started: boolean;
  finished: boolean;
  deadline: number | null;
  startedAt: number | null;
  timedOut: boolean;
};
function parseAppRoute(pathname: string): AppRoute {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) return { type: "home" };
  if (segments[0] !== "quiz") return { type: "invalid" };
  if (segments.length === 3 && segments[2] === "results") return { type: "results", setId: segments[1] };
  if (segments.length === 4 && segments[2] === "question") {
    const questionNumber = Number(segments[3]);
    return Number.isInteger(questionNumber) ? { type: "question", setId: segments[1], questionNumber } : { type: "invalid" };
  }
  return { type: "invalid" };
}
function questionPath(setId: string, questionNumber: number) { return `/quiz/${encodeURIComponent(setId)}/question/${questionNumber}`; }
function resultsPath(setId: string) { return `/quiz/${encodeURIComponent(setId)}/results`; }
function saveProgress(setId: string, progress: SavedProgress) {
  try { window.localStorage.setItem(`kangaroo-progress-${setId}`, JSON.stringify(progress)); } catch { /* local progress is optional */ }
}
function LandingPicker({ selectedId, selectedGrade, onSelect }: { selectedId: string; selectedGrade: string; onSelect: (id: string) => void }) {
  const allSets = Object.values(questionSets);
  const grades = Array.from(new Set(allSets.map((item) => item.grades))).sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  const gradeSets = allSets.filter((item) => item.grades === selectedGrade).sort((a, b) => a.year - b.year);
  return <div className="catalog-picker" aria-label="Choose a grade and year"><label className="catalog-filter"><span>Grade</span><select value={selectedGrade} onChange={(event) => { const firstSet = allSets.filter((item) => item.grades === event.target.value).sort((a, b) => a.year - b.year)[0]; if (firstSet) onSelect(firstSet.id); }}>{grades.map((grade) => <option key={grade} value={grade}>{formatGrade(grade)}</option>)}</select></label><label className="catalog-filter"><span>Year</span><select value={selectedId} onChange={(event) => onSelect(event.target.value)}>{gradeSets.map((item) => <option key={item.id} value={item.id}>{item.year} · {item.group}</option>)}</select></label></div>;
}

export default function Home() {
  const pathname = usePathname();
  const router = useRouter();
  const route = parseAppRoute(pathname);
  const routeType = route.type;
  const routeSetId = route.type === "question" || route.type === "results" ? route.setId : null;
  const routeQuestionNumber = route.type === "question" ? route.questionNumber : null;
  const [selectedSetId, setSelectedSetId] = useState(routeSetId && questionSets[routeSetId] ? routeSetId : "2015");
  const setId = routeSetId && questionSets[routeSetId] ? routeSetId : selectedSetId;
  const [current, setCurrent] = useState(routeQuestionNumber ? routeQuestionNumber - 1 : 0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [checked, setChecked] = useState<Record<number, boolean>>({});
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [showScratch, setShowScratch] = useState(false);
  const [scratch, setScratch] = useState("");
  const [filter, setFilter] = useState<"all" | "wrong">("all");
  const [deadline, setDeadline] = useState<number | null>(null);
  const [startedAt, setStartedAt] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(0);
  const [timedOut, setTimedOut] = useState(false);
  const [loadedSetId, setLoadedSetId] = useState<string | null>(null);
  const quiz = questionSets[setId] ?? questionSets["2015"];
  const questions = quiz.questions;
  const sections = quiz.sections;
  const totalSeconds = quiz.timeLimitMinutes * 60;
  const routeSet = routeSetId ? questionSets[routeSetId] : undefined;
  const routeInvalid = route.type === "invalid"
    || Boolean(routeSetId && !routeSet)
    || Boolean(route.type === "question" && (!routeSet || route.questionNumber < 1 || route.questionNumber > routeSet.questions.length));
  const started = routeType === "question" || routeType === "results";
  const finished = routeType === "results";
  const activeCurrent = routeQuestionNumber !== null && routeSetId === setId ? routeQuestionNumber - 1 : current;

  useEffect(() => {
    if (routeInvalid) router.replace("/");
  }, [routeInvalid, router]);

  useEffect(() => {
    if (routeInvalid || (routeSetId && routeSetId !== setId)) return;
    let value: Partial<SavedProgress> | null = null;
    try {
      const saved = window.localStorage.getItem(`kangaroo-progress-${setId}`);
      if (saved) value = JSON.parse(saved) as Partial<SavedProgress>;
    } catch { /* local progress is optional */ }
    queueMicrotask(() => {
      const progress = value;
      if (progress) {
        const savedDeadline = typeof progress.deadline === "number" ? progress.deadline : null;
        const expired = Boolean(progress.started && (progress.timedOut || (savedDeadline && savedDeadline <= Date.now())));
        setAnswers(progress.answers ?? {});
        setChecked(progress.checked ?? {});
        setCurrent(routeQuestionNumber !== null ? routeQuestionNumber - 1 : (typeof progress.current === "number" ? progress.current : 0));
        setDeadline(savedDeadline);
        setStartedAt(typeof progress.startedAt === "number" ? progress.startedAt : savedDeadline ? savedDeadline - totalSeconds * 1000 : null);
        setTimeLeft(savedDeadline ? Math.max(0, Math.ceil((savedDeadline - Date.now()) / 1000)) : 0);
        setTimedOut(expired || Boolean(progress.timedOut));
        if (routeType === "question" && expired) router.replace(resultsPath(setId));
      } else {
        setCurrent(routeQuestionNumber !== null ? routeQuestionNumber - 1 : 0);
        setDeadline(null);
        setStartedAt(null);
        setTimeLeft(0);
        setTimedOut(false);
      }
      setLoadedSetId(setId);
    });
  }, [pathname, routeInvalid, routeQuestionNumber, routeSetId, routeType, router, setId, totalSeconds]);

  useEffect(() => {
    if (loadedSetId !== setId || routeType === "home") return;
    saveProgress(setId, { answers, checked, current: activeCurrent, started, finished, deadline, startedAt, timedOut });
  }, [answers, checked, activeCurrent, started, finished, deadline, startedAt, timedOut, setId, loadedSetId, routeType]);

  useEffect(() => {
    if (!deadline || !started || finished || timedOut) return;
    const tick = () => {
      const remaining = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
      setTimeLeft(remaining);
      if (remaining <= 0 && !timedOut) {
        setTimedOut(true);
        saveProgress(setId, { answers, checked, current: activeCurrent, started: true, finished: true, deadline, startedAt, timedOut: true });
        if (routeType !== "results") router.push(resultsPath(setId), { scroll: false });
      }
    };
    tick();
    const interval = window.setInterval(tick, 1000);
    return () => window.clearInterval(interval);
  }, [answers, checked, activeCurrent, deadline, finished, routeType, router, setId, started, startedAt, timedOut]);

  const question = questions[Math.min(Math.max(activeCurrent, 0), questions.length - 1)];
  const score = useMemo(() => questions.reduce((sum, item) => sum + (checked[item.number] && answers[item.number] === item.answer ? item.points : 0), 0), [answers, checked, questions]);
  const answeredCount = Object.keys(answers).length;
  const section = sections.find((item) => item.points === question?.points) ?? sections[0];
  const visibleReview = filter === "wrong" ? questions.filter((item) => checked[item.number] && answers[item.number] !== item.answer) : questions;

  function selectAnswer(index: number) { if (!checked[question.number]) setAnswers((value) => ({ ...value, [question.number]: index })); }
  function checkAnswer() { if (answers[question.number] === undefined) return; setChecked((value) => ({ ...value, [question.number]: true })); setShowSolution(false); }
  function goTo(index: number, revealSolution = false) {
    const next = Math.max(0, Math.min(questions.length - 1, index));
    setCurrent(next);
    setShowHint(false);
    setShowSolution(revealSolution);
    setShowScratch(false);
    saveProgress(setId, { answers, checked, current: next, started: true, finished: false, deadline, startedAt, timedOut });
    if (route.type !== "question" || route.setId !== setId || route.questionNumber !== next + 1) {
      router.push(questionPath(setId, next + 1), { scroll: false });
    }
  }
  function begin() {
    const now = Date.now();
    const next = Math.max(0, Math.min(questions.length - 1, current));
    const nextDeadline = now + totalSeconds * 1000;
    setTimedOut(false);
    setCurrent(next);
    setStartedAt(now);
    setDeadline(nextDeadline);
    setTimeLeft(totalSeconds);
    saveProgress(setId, { answers, checked, current: next, started: true, finished: false, deadline: nextDeadline, startedAt: now, timedOut: false });
    router.push(questionPath(setId, next + 1), { scroll: false });
  }
  function browseQuestions() {
    setCurrent(0);
    setShowHint(false);
    setShowSolution(false);
    setShowScratch(false);
    saveProgress(setId, { answers, checked, current: 0, started: true, finished: false, deadline, startedAt, timedOut });
    router.push(questionPath(setId, 1), { scroll: false });
  }
  function finishChallenge(wasTimedOut = false) {
    setTimedOut(wasTimedOut);
    saveProgress(setId, { answers, checked, current: activeCurrent, started: true, finished: true, deadline, startedAt, timedOut: wasTimedOut });
    if (route.type !== "results") router.push(resultsPath(setId), { scroll: false });
  }
  function goHome() {
    saveProgress(setId, { answers, checked, current: activeCurrent, started: false, finished: false, deadline, startedAt, timedOut });
    router.push("/", { scroll: false });
  }
  function reset() { try { window.localStorage.removeItem(`kangaroo-progress-${setId}`); } catch { /* local progress is optional */ } setAnswers({}); setChecked({}); setCurrent(0); setTimedOut(false); setDeadline(null); setStartedAt(null); setTimeLeft(0); setShowHint(false); setShowSolution(false); setShowScratch(false); setScratch(""); setFilter("all"); }
  function startOver() {
    reset();
    saveProgress(setId, { answers: {}, checked: {}, current: 0, started: true, finished: false, deadline: null, startedAt: null, timedOut: false });
    router.push(questionPath(setId, 1), { scroll: false });
  }
  function switchSet(nextSetId: string) { if (nextSetId === setId) return; setSelectedSetId(nextSetId); reset(); }
  const timerSeconds = deadline ? timeLeft : totalSeconds;
  const timerTone = timedOut ? "expired" : timerSeconds <= 120 ? "critical" : timerSeconds <= 600 ? "warning" : "";
  const timeUsedSeconds = timedOut ? totalSeconds : startedAt ? Math.max(0, totalSeconds - timeLeft) : 0;

  if (routeInvalid) return null;

  if (!started) return <main className="landing"><div className="landing-grid" /><header className="topbar landing-top"><div className="brand"><Image className="brand-logo" src="/logo.png" alt="Kangaroo Mathematics" width={38} height={38} priority /><span>DEEPBRAIN<br /><b>ACADEMY</b></span></div></header><section className="hero"><div className="hero-copy"><h1>Think like a<br /><em>mathematician.</em></h1><div className="hero-picker"><LandingPicker selectedId={setId} selectedGrade={quiz.grades} onSelect={switchSet} /></div><p className="hero-intro">{questions.length} playful problems that turn curiosity into clear mathematical thinking.</p><div className="hero-actions"><button className="primary-button" onClick={begin}>Start the challenge <span>↗</span></button><button className="text-button" onClick={browseQuestions}>Browse questions <span>→</span></button></div><div className="hero-meta"><span><b>{questions.length}</b> questions</span><span className="meta-separator" /><span><b>{sections.length}</b> difficulty levels</span><span className="meta-separator" /><span><b>{quiz.timeLimitMinutes} min</b> time limit</span><span className="meta-separator" /><span><b>{quiz.location}</b> · {quiz.date}</span></div></div><div className="hero-art"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="kangaroo-figure">K</div><div className="floating-shape shape-one">△</div><div className="floating-shape shape-two">×</div><div className="floating-shape shape-three">÷</div><div className="art-caption">Make a guess.<br /><b>Find the pattern.</b></div></div></section><section className="section-cards">{sections.map((item) => <div className={`section-card ${item.accent}`} key={item.points}><div className="section-card-top"><span className="points-badge">{item.points} pts</span><span className="section-arrow">↗</span></div><h2>{item.label}</h2><p>{item.range}</p><div className="mini-line"><span style={{ width: `${item.points === 3 ? 32 : item.points === 4 ? 58 : 86}%` }} /></div></div>)}</section><footer className="landing-footer"><span>Based on Mathematical Kangaroo {quiz.year} · {quiz.group}</span><span>All questions are in English</span></footer></main>;

  if (finished) { const maxScore = questions.reduce((sum, item) => sum + item.points, 0); const percentage = Math.round((score / maxScore) * 100); return <main className="app-shell"><header className="topbar app-top"><button className="brand brand-button" onClick={goHome}><Image className="brand-logo" src="/logo.png" alt="Kangaroo Mathematics" width={38} height={38} priority /><span>DEEPBRAIN<br /><b>ACADEMY</b></span></button><div className="top-actions"><span className="save-state"><span className="save-dot" /> Progress saved</span><button className="outline-button" onClick={startOver}>Start over</button></div></header><div className="results-wrap"><div className="results-heading"><div><p className="eyebrow">CHALLENGE COMPLETE</p><h1>score</h1><p>{timedOut ? "The time limit was reached. Review your choices and keep exploring." : "Every problem is a step forward. Review your choices and keep exploring."}</p></div><div className="score-ring"><strong>{score}</strong><span>/ {maxScore} pts</span></div></div><div className="result-stats"><div><span>Accuracy</span><b>{percentage}%</b></div><div><span>Answered</span><b>{answeredCount} of {questions.length}</b></div><div><span>Questions to revisit</span><b>{questions.filter((q) => checked[q.number] && answers[q.number] !== q.answer).length}</b></div><div><span>Time used</span><b>{formatTime(timeUsedSeconds)}</b></div></div><div className="review-header"><div><h2>Question review</h2><p>See your answer and the reasoning behind each solution.</p></div><div className="filter-buttons"><button className={filter === "all" ? "active" : ""} onClick={() => setFilter("all")}>All questions</button><button className={filter === "wrong" ? "active" : ""} onClick={() => setFilter("wrong")}>Needs another look</button></div></div><div className="review-list">{visibleReview.map((item) => { const correct = answers[item.number] === item.answer; return <button className={`review-row ${correct ? "correct" : "wrong"}`} key={item.number} onClick={() => goTo(item.number - 1, true)}><span className="review-num">{String(item.number).padStart(2, "0")}</span><span className="review-title"><b>Question {item.number}</b><small>{item.points} points</small></span><span className="review-answer">{answers[item.number] !== undefined ? `Your answer: ${item.options[answers[item.number]]}` : "Not answered"}</span><span className="review-status">{correct ? "✓ Correct" : "× Review"}</span><span>→</span></button>; })}</div><button className="source-note" onClick={() => window.open(quiz.sourceUrl ?? "https://www.mathkangaroo.org", "_blank")}>Source deck: Mathematical Kangaroo {quiz.year} · {quiz.group} ↗</button></div></main>; }

  const isChecked = checked[question.number]; const isCorrect = answers[question.number] === question.answer;
  return <main className="app-shell"><header className="topbar app-top"><button className="brand brand-button" onClick={goHome}><Image className="brand-logo" src="/logo.png" alt="Kangaroo Mathematics" width={38} height={38} priority /><span>DEEPBRAIN<br /><b>ACADEMY</b></span></button><div className="challenge-label"><span className={`section-dot ${section.accent}`} /> {quiz.group} <span className="slash">/</span> {section.label} <span className="slash">/</span> {section.range}</div><div className="top-actions"><span className={`timer ${timerTone}`} aria-live="polite">{deadline ? "Time" : "Preview"}: {formatTime(timerSeconds)}</span><span className="save-state"><span className="save-dot" /> Progress saved</span><button className="finish-button" onClick={() => finishChallenge()}>Finish & review</button></div></header><div className="progress-track"><span style={{ width: `${((activeCurrent + 1) / questions.length) * 100}%` }} /></div><div className="workspace"><aside className="question-nav"><div className="nav-heading"><span>QUESTIONS</span><b>{answeredCount}<small>/{questions.length}</small></b></div>{sections.map((item) => <div className="nav-group" key={item.points}><div className="nav-group-label"><span className={`section-dot ${item.accent}`} />{item.points} points<span>{item.range}</span></div><div className="nav-numbers">{questions.filter((q) => q.points === item.points).map((q) => <button className={`${q.number === question.number ? "current" : ""} ${checked[q.number] ? (answers[q.number] === q.answer ? "answered-correct" : "answered-wrong") : ""}`} key={q.number} onClick={() => goTo(q.number - 1)}>{q.number}</button>)}</div></div>)}<div className="nav-footer"><span className="nav-lock">◌</span><p><b>Take your time.</b><br />You can return to any question before finishing.</p></div></aside><section className="question-area"><div className="question-topline"><span className={`points-pill ${section.accent}`}>{question.points} POINTS</span><span>QUESTION {String(question.number).padStart(2, "0")} <i>of</i> {questions.length}</span></div><div className="question-layout"><div className="question-copy"><h1>{`Question ${String(question.number).padStart(2, "0")}`}</h1><p className="prompt">{question.prompt}</p>{(question.image || question.imageExtra) && <div className={`diagram-frame ${question.imageClass ?? ""}`}>{question.image && <img src={question.image} alt={question.imageAlt ?? "Question illustration"} />}{question.imageExtra && <div className="visual-choice"><img className="diagram-extra" src={question.imageExtra} alt="Answer choices" /><div className="visual-choice-buttons">{question.options.map((option, index) => <button key={index} className={`${answers[question.number] === index ? "selected" : ""} ${isChecked && isCorrect && index === question.answer ? "correct" : ""} ${isChecked && answers[question.number] === index && index !== question.answer ? "wrong" : ""}`} style={{ left: `${index * 20}%` }} aria-label={`Answer ${option}`} onClick={() => selectAnswer(index)}><span className="sr-only">{option}</span></button>)}</div></div>}</div>}{question.optionImages && !question.imageExtra && !question.optionContent?.length && <div className="image-options" role="radiogroup" aria-label="Picture answer choices">{question.optionImages.map((src, index) => <button key={src} className={"image-option " + (answers[question.number] === index ? "selected " : "") + (isChecked && isCorrect && index === question.answer ? "correct " : "") + (isChecked && answers[question.number] === index && index !== question.answer ? "wrong" : "")} onClick={() => selectAnswer(index)}><span className="image-option-letter">{String.fromCharCode(65 + index)}</span><img src={src} alt={question.options[index] + " answer illustration"} /><span className="sr-only">{question.options[index]}</span></button>)}</div>}{question.optionSymbols && <div className="symbol-options" role="radiogroup" aria-label="Shape sequence answer choices">{question.optionSymbols.map((symbols, index) => <button key={symbols.join("-")} className={"symbol-option " + (answers[question.number] === index ? "selected " : "") + (isChecked && isCorrect && index === question.answer ? "correct " : "") + (isChecked && answers[question.number] === index && index !== question.answer ? "wrong" : "")} onClick={() => selectAnswer(index)}><span className="image-option-letter">{String.fromCharCode(65 + index)}</span><span className="symbol-sequence">{symbols.map((shape, shapeIndex) => <span className="symbol-sequence-item" key={shape + shapeIndex}><ShapeIcon shape={shape} />{shapeIndex < symbols.length - 1 && <span className="sequence-comma">,</span>}</span>)}</span></button>)}</div>}<div className={`options ${question.imageExtra || question.optionSymbols || (question.optionImages && !question.optionContent?.length) ? "image-options-hidden" : ""}`} role="radiogroup" aria-label="Answer choices">
  {question.options.map((option, index) => {
    const content = question.optionContent?.[index];
    const image = content?.image ?? question.optionImages?.[index];
    const showImage = Boolean(image) && (!content || content.type !== "text");
    const showText = !content || content.type !== "image";
    return <button key={index} className={`option ${answers[question.number] === index ? "selected" : ""} ${isChecked && isCorrect && index === question.answer ? "correct-option" : ""} ${isChecked && answers[question.number] === index && index !== question.answer ? "wrong-option" : ""}`} onClick={() => selectAnswer(index)}>
      <span className="option-letter">{String.fromCharCode(65 + index)}</span>
      <span className="option-content">
        {showImage && <img className="option-image" src={image ?? ""} alt={content?.imageAlt ?? `${option} answer illustration`} />}
        {showText && <span>{content?.text?.trim() || option}</span>}
      </span>
      {isChecked && isCorrect && index === question.answer && <span className="option-check">✓</span>}
    </button>;
  })}
</div><div className="question-tools"><button className={showHint ? "tool active" : "tool"} onClick={() => setShowHint(!showHint)}><AppIcon>✦</AppIcon> {showHint ? "Hide hint" : "Show a hint"}</button><button className={showScratch ? "tool active" : "tool"} onClick={() => setShowScratch(!showScratch)}><AppIcon>✎</AppIcon> Scratchpad</button></div>{showHint && <div className="hint-box"><span>✦</span><p><b>Try this.</b> {question.hint}</p></div>}{showScratch && <div className="scratch-box"><div><b>Your scratchpad</b><span>Private to this browser</span></div><textarea value={scratch} onChange={(event) => setScratch(event.target.value)} placeholder="Write an idea, draw a number line, or test a pattern…" /></div>}{isChecked && <div className={`feedback-box ${isCorrect ? "success" : "error"}`}><span className="feedback-icon">{isCorrect ? "✓" : "!"}</span><div><b>{isCorrect ? "Nice work!" : "Keep exploring."}</b><p>{isCorrect ? (showSolution ? `Your answer is correct. ${question.explanation}` : "Your answer is correct.") : (showSolution ? `The correct answer is ${question.options[question.answer]}. ${question.explanation}` : "That choice is not quite right. Try again, or open the solution to see the reasoning.")}</p></div>{!isCorrect && <button className="retry-button" onClick={() => { setAnswers((value) => { const next = { ...value }; delete next[question.number]; return next; }); setChecked((value) => ({ ...value, [question.number]: false })); setShowSolution(false); }}>Retry</button>}<button onClick={() => setShowSolution(!showSolution)}>{showSolution ? "Hide solution" : "Show solution"} ↗</button></div>}</div><div className="question-side"><div className="side-card"><div className="side-card-label">YOUR PROGRESS</div><div className="side-progress"><div className="progress-circle"><span>{Math.round((answeredCount / questions.length) * 100)}%</span></div><div><b>{answeredCount} of {questions.length}</b><span>questions answered</span></div></div><div className="side-score"><span>Current score</span><b>{score} <small>pts</small></b></div><button className="outline-button progress-reset" onClick={startOver}>Reset</button></div><div className="side-tip"><span>🐾</span><div><b>Kangaroo tip</b><p>Good mathematicians test an idea, notice what changes, and try again.</p></div></div></div></div><div className="question-footer"><button className="previous-button" onClick={() => goTo(activeCurrent - 1)} disabled={activeCurrent === 0}>← <span>Previous</span></button><div className="footer-center">{isChecked ? <span className={isCorrect ? "correct-text" : "wrong-text"}>{isCorrect ? "Answer checked" : "Answer checked · keep going"}</span> : <span>Select an answer to continue</span>}</div>{!isChecked ? <button className="check-button" onClick={checkAnswer} disabled={answers[question.number] === undefined}>Check answer <span>↗</span></button> : <button className="check-button" onClick={() => activeCurrent === questions.length - 1 ? finishChallenge() : goTo(current + 1)}>{activeCurrent === questions.length - 1 ? "See results" : "Next question"} <span>→</span></button>}</div></section></div></main>;
}
