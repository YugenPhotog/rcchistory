(() => {
  "use strict";

  const state = {
    bank: null,
    chapter: null,
    scaffold: "early",
    session: [],
    index: 0,
    answered: false,
    storageAvailable: true
  };

  const el = {};
  const categories = ["explain", "use", "connect"];
  const categoryLabels = { explain: "Explain", use: "Use", connect: "Connect" };
  const moveLabels = { cause: "Cause", comparison: "Comparison", context: "Context", consequence: "Consequence", evidence: "Evidence" };

  document.addEventListener("DOMContentLoaded", init);

  function cacheElements() {
    [
      "page-title", "chapter-label", "status-card", "loading-status", "retry-load", "practice-card",
      "question-position", "thinking-move", "question-heading", "question-stem", "hint-toggle", "hint-region",
      "question-form", "answer-fieldset", "choices", "selection-error", "check-answer", "try-again",
      "continue-button", "feedback-region", "feedback-heading", "feedback-summary", "choice-feedback",
      "walkthrough-toggle", "walkthrough-region", "walkthrough-steps", "transfer-strategy", "complete-card",
      "complete-heading", "practice-more", "review-moves", "moves-panel", "return-link", "reset-practice"
    ].forEach(id => { el[id] = document.getElementById(id); });
  }

  async function init() {
    cacheElements();
    bindEvents();
    const params = new URLSearchParams(window.location.search);
    const chapterParam = params.get("chapter") || "2";
    if (!/^\d{1,2}$/.test(chapterParam)) {
      showLoadError("The chapter number is not valid. Use a link such as ?chapter=2.");
      return;
    }
    state.chapter = Number(chapterParam);
    state.scaffold = ["early", "mid", "late"].includes(params.get("scaffold")) ? params.get("scaffold") : "early";
    await loadBank();
  }

  function bindEvents() {
    el["question-form"].addEventListener("submit", checkReasoning);
    el["try-again"].addEventListener("click", tryAgain);
    el["continue-button"].addEventListener("click", continuePractice);
    el["hint-toggle"].addEventListener("click", toggleHint);
    el["walkthrough-toggle"].addEventListener("click", toggleWalkthrough);
    el["practice-more"].addEventListener("click", startSession);
    el["review-moves"].addEventListener("click", reviewMoves);
    el["retry-load"].addEventListener("click", loadBank);
    el["reset-practice"].addEventListener("click", resetPractice);
  }

  async function loadBank() {
    showLoading("Loading the Chapter " + state.chapter + " practice bank...");
    const file = "banks/chapter-" + String(state.chapter).padStart(2, "0") + ".json";
    try {
      const response = await fetch(file, { cache: "no-store" });
      if (!response.ok) throw new Error("Bank not found");
      const bank = await response.json();
      const validation = validateBank(bank);
      if (!validation.valid) throw new Error(validation.message);
      state.bank = bank;
      document.title = bank.studentTitle;
      el["page-title"].textContent = "Think Like a Historian";
      el["chapter-label"].textContent = "Chapter " + bank.chapter + ": " + bank.chapterTitle;
      configureReturnLink(bank);
      el["status-card"].hidden = true;
      startSession();
    } catch (error) {
      console.warn("Practice bank load failed:", error);
      showLoadError("The practice questions could not be loaded. Check the chapter link, then try again.");
    }
  }

  function validateBank(bank) {
    if (!bank || !Array.isArray(bank.questions)) return { valid: false, message: "Missing question list" };
    const ids = new Set();
    const counts = { explain: 0, use: 0, connect: 0 };
    const validQuestions = [];
    for (const q of bank.questions) {
      const valid = q && typeof q.id === "string" && !ids.has(q.id) && categories.includes(q.category) &&
        q.practiceOnly === true && typeof q.stem === "string" && Array.isArray(q.choices) && q.choices.length === 4 &&
        q.choices.every(c => c && typeof c.id === "string" && typeof c.text === "string" && typeof c.feedback === "string") &&
        q.choices.some(c => c.id === q.correctChoiceId) && Array.isArray(q.walkthrough) && q.walkthrough.length >= 3;
      if (valid) {
        ids.add(q.id);
        counts[q.category] += 1;
        validQuestions.push(q);
      } else {
        console.warn("Skipping malformed practice item:", q && q.id ? q.id : "unknown item");
      }
    }
    if (categories.some(cat => counts[cat] < 1)) return { valid: false, message: "Each category needs at least one valid question" };
    bank.questions = validQuestions;
    return { valid: true };
  }

  function startSession() {
    state.session = categories.map(category => chooseQuestion(category));
    state.index = 0;
    el["complete-card"].hidden = true;
    el["practice-card"].hidden = false;
    renderQuestion();
  }

  function chooseQuestion(category) {
    const pool = state.bank.questions.filter(q => q.category === category);
    const recent = getRecent(category);
    let available = pool.filter(q => !recent.includes(q.id));
    if (!available.length) available = pool.slice();
    const choice = available[randomIndex(available.length)];
    rememberRecent(category, choice.id, pool.length);
    return choice;
  }

  function randomIndex(max) {
    if (max <= 1) return 0;
    if (window.crypto && window.crypto.getRandomValues) {
      const array = new Uint32Array(1);
      window.crypto.getRandomValues(array);
      return array[0] % max;
    }
    return Math.floor(Math.random() * max);
  }

  function getStorageKey(category) { return "hist101-ch" + state.chapter + "-recent-" + category; }
  function getRecent(category) {
    if (!state.storageAvailable) return [];
    try {
      const raw = localStorage.getItem(getStorageKey(category));
      return raw ? JSON.parse(raw) : [];
    } catch (error) {
      state.storageAvailable = false;
      return [];
    }
  }
  function rememberRecent(category, id, poolSize) {
    if (!state.storageAvailable) return;
    try {
      const keep = Math.max(1, Math.min(poolSize - 1, 4));
      const recent = getRecent(category).filter(item => item !== id);
      recent.unshift(id);
      localStorage.setItem(getStorageKey(category), JSON.stringify(recent.slice(0, keep)));
    } catch (error) {
      state.storageAvailable = false;
    }
  }

  function renderQuestion() {
    const q = state.session[state.index];
    state.answered = false;
    el["question-position"].textContent = "Question " + (state.index + 1) + " of 3 | " + categoryLabels[q.category];
    el["question-heading"].textContent = categoryLabels[q.category] + ": Think through the evidence";
    el["question-stem"].textContent = q.stem;
    el["thinking-move"].textContent = state.scaffold === "late" ? "Thinking move revealed after you answer" : "Thinking move: " + (moveLabels[q.thinkingMove] || q.thinkingMove);
    renderChoices(q);
    resetFeedback();
    configureHint(q);
    el["check-answer"].hidden = false;
    el["try-again"].hidden = true;
    el["continue-button"].hidden = true;
    el["continue-button"].textContent = state.index === 2 ? "Finish This Set" : "Continue";
    el["question-heading"].focus({ preventScroll: false });
  }

  function renderChoices(q) {
    el["choices"].replaceChildren();
    q.choices.forEach((choice, index) => {
      const label = document.createElement("label");
      label.className = "choice-label";
      const input = document.createElement("input");
      input.type = "radio";
      input.name = "answer";
      input.value = choice.id;
      input.id = q.id + "-" + choice.id;
      const text = document.createElement("span");
      const letter = document.createElement("span");
      letter.className = "choice-letter";
      letter.setAttribute("aria-hidden", "true");
      letter.textContent = String.fromCharCode(65 + index) + ".";
      text.append(letter, document.createTextNode(" " + choice.text));
      label.append(input, text);
      el["choices"].append(label);
    });
  }

  function configureHint(q) {
    const showHintControl = state.scaffold === "early" && q.hint;
    el["hint-toggle"].hidden = !showHintControl;
    el["hint-toggle"].setAttribute("aria-expanded", "false");
    el["hint-toggle"].textContent = "Show a hint";
    el["hint-region"].hidden = true;
    el["hint-region"].textContent = q.hint || "";
  }

  function checkReasoning(event) {
    event.preventDefault();
    if (state.answered) return;
    const selected = el["question-form"].querySelector('input[name="answer"]:checked');
    if (!selected) {
      el["selection-error"].hidden = false;
      const first = el["question-form"].querySelector('input[name="answer"]');
      if (first) first.focus();
      return;
    }
    el["selection-error"].hidden = true;
    const q = state.session[state.index];
    const choice = q.choices.find(c => c.id === selected.value);
    const correct = selected.value === q.correctChoiceId;
    state.answered = true;
    lockChoices(q, selected.value);
    el["feedback-region"].hidden = false;
    el["feedback-region"].classList.toggle("correct", correct);
    el["feedback-region"].classList.toggle("incorrect", !correct);
    el["feedback-summary"].textContent = correct ? q.conciseCorrectFeedback : q.conciseIncorrectFeedback;
    el["choice-feedback"].textContent = choice.feedback;
    el["walkthrough-steps"].replaceChildren(...q.walkthrough.map(step => {
      const li = document.createElement("li"); li.textContent = step; return li;
    }));
    el["transfer-strategy"].textContent = q.transferStrategy;
    el["walkthrough-region"].hidden = true;
    el["walkthrough-toggle"].setAttribute("aria-expanded", "false");
    el["walkthrough-toggle"].textContent = "Walk Me Through It";
    if (state.scaffold === "late") el["thinking-move"].textContent = "Thinking move: " + (moveLabels[q.thinkingMove] || q.thinkingMove);
    el["check-answer"].hidden = true;
    el["try-again"].hidden = false;
    el["continue-button"].hidden = false;
    el["feedback-heading"].focus({ preventScroll: false });
  }

  function lockChoices(q, selectedId) {
    el["choices"].querySelectorAll("input").forEach(input => { input.disabled = true; });
    el["choices"].querySelectorAll(".choice-label").forEach(label => label.classList.add("locked"));
    const correctInput = el["choices"].querySelector('input[value="' + cssEscape(q.correctChoiceId) + '"]');
    const selectedInput = el["choices"].querySelector('input[value="' + cssEscape(selectedId) + '"]');
    if (correctInput) correctInput.closest("label").classList.add("correct-choice");
    if (selectedInput && selectedId !== q.correctChoiceId) selectedInput.closest("label").classList.add("selected-incorrect");
  }

  function tryAgain() {
    const q = state.session[state.index];
    state.answered = false;
    renderChoices(q);
    resetFeedback();
    el["check-answer"].hidden = false;
    el["try-again"].hidden = true;
    el["continue-button"].hidden = true;
    const first = el["choices"].querySelector("input");
    if (first) first.focus();
  }

  function continuePractice() {
    if (state.index < 2) {
      state.index += 1;
      renderQuestion();
      return;
    }
    el["practice-card"].hidden = true;
    el["complete-card"].hidden = false;
    el["complete-heading"].focus({ preventScroll: false });
  }

  function resetFeedback() {
    el["selection-error"].hidden = true;
    el["feedback-region"].hidden = true;
    el["feedback-region"].classList.remove("correct", "incorrect");
    el["feedback-summary"].textContent = "";
    el["choice-feedback"].textContent = "";
    el["walkthrough-region"].hidden = true;
    el["walkthrough-toggle"].setAttribute("aria-expanded", "false");
  }

  function toggleHint() {
    const open = el["hint-region"].hidden;
    el["hint-region"].hidden = !open;
    el["hint-toggle"].setAttribute("aria-expanded", String(open));
    el["hint-toggle"].textContent = open ? "Hide the hint" : "Show a hint";
  }

  function toggleWalkthrough() {
    const open = el["walkthrough-region"].hidden;
    el["walkthrough-region"].hidden = !open;
    el["walkthrough-toggle"].setAttribute("aria-expanded", String(open));
    el["walkthrough-toggle"].textContent = open ? "Hide the Walkthrough" : "Walk Me Through It";
  }

  function reviewMoves() {
    el["moves-panel"].open = true;
    el["moves-panel"].scrollIntoView({ block: "start" });
    el["moves-panel"].querySelector("summary").focus();
  }

  function resetPractice() {
    if (state.storageAvailable) {
      categories.forEach(category => {
        try { localStorage.removeItem(getStorageKey(category)); } catch (error) { state.storageAvailable = false; }
      });
    }
    if (state.bank) startSession();
    announceStatus("Practice reset. A new set is ready.");
  }

  function configureReturnLink(bank) {
    const params = new URLSearchParams(window.location.search);
    const candidate = params.get("return") || bank.moduleReturnUrl;
    const safe = safeReturnUrl(candidate);
    if (safe) {
      el["return-link"].href = safe;
      el["return-link"].hidden = false;
    } else {
      el["return-link"].hidden = true;
    }
  }

  function safeReturnUrl(value) {
    if (!value) return "";
    try {
      const url = new URL(value, window.location.href);
      if (["http:", "https:"].includes(url.protocol)) return url.href;
    } catch (error) { return ""; }
    return "";
  }

  function showLoading(message) {
    el["status-card"].hidden = false;
    el["loading-status"].textContent = message;
    el["retry-load"].hidden = true;
    el["practice-card"].hidden = true;
    el["complete-card"].hidden = true;
  }

  function showLoadError(message) {
    el["status-card"].hidden = false;
    el["loading-status"].textContent = message;
    el["retry-load"].hidden = false;
    el["practice-card"].hidden = true;
    el["complete-card"].hidden = true;
  }

  function announceStatus(message) {
    el["status-card"].hidden = false;
    el["loading-status"].textContent = message;
    el["retry-load"].hidden = true;
    window.setTimeout(() => { if (state.bank) el["status-card"].hidden = true; }, 1800);
  }

  function cssEscape(value) {
    if (window.CSS && typeof window.CSS.escape === "function") return window.CSS.escape(value);
    return String(value).replace(/[^a-zA-Z0-9_-]/g, "\\$&");
  }
})();
