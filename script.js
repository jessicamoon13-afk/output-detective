const questionBank = [
  {
    mode: "key-values",
    category: "Regression Output",
    difficulty: "Core Evidence",
    title: "Case 1: The Variance Clue",
    prompt: "Which value tells you the proportion of variance in the outcome explained by the regression model?",
    output: `<h3>Model Summary</h3><table><tr><th>R</th><th>R Square</th><th>Adjusted R Square</th><th>Std. Error</th></tr><tr><td>.62</td><td>.38</td><td>.36</td><td>4.81</td></tr></table>`,
    answers: ["R", "R Square", "Std. Error of the Estimate", "Adjusted alpha"],
    correct: 1,
    feedback: "R Square tells us the proportion of variance explained by the model. Here, R² = .38, so the model explains about 38% of the variance in the outcome."
  },
  {
    mode: "interpret",
    category: "Correlation",
    difficulty: "Interpretation",
    title: "Case 2: The Negative Association",
    prompt: "Choose the best interpretation of the output.",
    output: `<h3>Correlation Output</h3><p><strong>Sleep quality and fatigue:</strong> r = -.58, p = .003</p>`,
    answers: [
      "There was a statistically significant negative relationship between sleep quality and fatigue.",
      "Sleep quality caused fatigue to decrease.",
      "There was no relationship because the r value is negative.",
      "Fatigue explained 58% of the variance in sleep quality."
    ],
    correct: 0,
    feedback: "The p-value is below .05, so the correlation is statistically significant. The negative r indicates that higher sleep quality is associated with lower fatigue. This does not prove causation."
  },
  {
    mode: "spot-problem",
    category: "Causation Language",
    difficulty: "Common Trap",
    title: "Case 3: The Overclaim",
    prompt: "What is the main problem with this interpretation?",
    output: `<h3>Student Statement</h3><p>“The correlation was significant, so hydration caused faster 5K times.”</p>`,
    answers: [
      "It reports too many statistical values.",
      "It overstates causation from a correlational result.",
      "It should never mention the research question.",
      "It interprets the mean before the p-value."
    ],
    correct: 1,
    feedback: "A significant correlation can show an association, but it does not prove that one variable caused the other. Use language like 'was associated with' unless the design supports causation."
  },
  {
    mode: "interpret",
    category: "Independent t-test",
    difficulty: "Direction + Significance",
    title: "Case 4: The Group Difference",
    prompt: "Choose the most appropriate interpretation.",
    output: `<h3>Independent Samples t-test</h3><table><tr><th>Group</th><th>Mean</th><th>SD</th></tr><tr><td>Resistance Training</td><td>42.3</td><td>6.1</td></tr><tr><td>Control</td><td>37.8</td><td>5.7</td></tr></table><p><em>t</em>(38) = 2.41, p = .021</p>`,
    answers: [
      "The groups did not differ significantly.",
      "The resistance training group had a significantly higher mean than the control group.",
      "Resistance training caused the control group to decline.",
      "The control group had more variability, so it performed better."
    ],
    correct: 1,
    feedback: "p = .021 is below .05, so the difference is statistically significant. The resistance training group has the higher mean, so the direction favors that group."
  },
  {
    mode: "key-values",
    category: "Descriptives",
    difficulty: "Core Evidence",
    title: "Case 5: The Variability Clue",
    prompt: "Which group shows greater variability?",
    output: `<h3>Descriptive Statistics</h3><table><tr><th>Group</th><th>Mean</th><th>SD</th></tr><tr><td>Novice</td><td>18.2</td><td>3.1</td></tr><tr><td>Trained</td><td>24.7</td><td>7.8</td></tr></table>`,
    answers: ["Novice group", "Trained group", "Both groups have identical variability", "Cannot determine because the p-value is missing"],
    correct: 1,
    feedback: "The standard deviation describes variability. The trained group has the larger SD, so it shows greater variability around its mean."
  },
  {
    mode: "interpret",
    category: "One-way ANOVA",
    difficulty: "Significance",
    title: "Case 6: The F Statistic",
    prompt: "What does this ANOVA result tell us?",
    output: `<h3>One-Way ANOVA</h3><p><em>F</em>(2, 57) = 6.82, p = .002</p><p>Groups: Endurance, Team Sport, Recreational</p>`,
    answers: [
      "At least one group mean differs significantly from another group mean.",
      "Every group differs significantly from every other group.",
      "The data are invalid because F values cannot be greater than 1.",
      "The ANOVA identifies exactly which groups differ."
    ],
    correct: 0,
    feedback: "A significant ANOVA tells us that at least one group differs somewhere in the model. Post-hoc tests are needed to determine which specific groups differ."
  },
  {
    mode: "key-values",
    category: "Confidence Intervals",
    difficulty: "Interpretation",
    title: "Case 7: The Interval Evidence",
    prompt: "What is the best interpretation of this confidence interval?",
    output: `<h3>Mean Difference</h3><p>Mean difference = 4.2</p><p>95% CI [1.1, 7.3]</p>`,
    answers: [
      "The plausible values for the mean difference are positive and do not include zero.",
      "The mean difference is definitely exactly 4.2 in the population.",
      "The result is non-significant because the interval is wide.",
      "The confidence interval proves practical importance."
    ],
    correct: 0,
    feedback: "The interval provides a range of plausible values for the estimate. Because the interval is entirely positive and does not include zero, it supports a positive difference."
  },
  {
    mode: "interpret",
    category: "Regression Coefficients",
    difficulty: "Plain Language",
    title: "Case 8: The Slope Clue",
    prompt: "Choose the best interpretation of the coefficient.",
    output: `<h3>Regression Coefficients</h3><table><tr><th>Predictor</th><th>B</th><th>p</th></tr><tr><td>Sleep Duration</td><td>2.15</td><td>.018</td></tr></table><p>Outcome: Recovery score</p>`,
    answers: [
      "For each 1-unit increase in sleep duration, predicted recovery score increases by 2.15 units.",
      "Sleep duration explains exactly 2.15% of recovery score.",
      "Sleep duration is unrelated to recovery because B is positive.",
      "The p-value tells us the mean sleep duration."
    ],
    correct: 0,
    feedback: "The unstandardized coefficient B tells us the predicted change in the outcome for a one-unit increase in the predictor. Here, the direction is positive and p < .05."
  },
  {
    mode: "spot-problem",
    category: "ANOVA Interpretation",
    difficulty: "Common Trap",
    title: "Case 9: Missing Follow-Up Evidence",
    prompt: "What is missing from this interpretation?",
    output: `<h3>Student Statement</h3><p>“The ANOVA was significant, so all groups were different.”</p>`,
    answers: [
      "A significant ANOVA does not automatically show that all groups differ; post-hoc evidence is needed.",
      "The student should not mention significance at all.",
      "The student should report only standard deviations.",
      "The statement is already complete."
    ],
    correct: 0,
    feedback: "A significant ANOVA means at least one group differs somewhere. It does not prove that every pair of groups is significantly different."
  },
  {
    mode: "interpret",
    category: "Reliability",
    difficulty: "Applied Meaning",
    title: "Case 10: The MDC Threshold",
    prompt: "Choose the best interpretation of the individual change.",
    output: `<h3>Reliability Output</h3><p>ICC = .92</p><p>SEM = 1.4 kg</p><p>MDC95 = 3.9 kg</p><p>Observed change = 5.2 kg</p>`,
    answers: [
      "The observed change exceeds MDC95 and likely exceeds expected measurement error.",
      "The observed change is smaller than MDC95 and should be treated as noise.",
      "The ICC proves the test is valid.",
      "SEM means the average group score increased by 1.4 kg."
    ],
    correct: 0,
    feedback: "The observed change of 5.2 kg is larger than the MDC95 of 3.9 kg, so it likely exceeds expected measurement error. Reliability does not automatically prove validity."
  },
  {
    mode: "key-values",
    category: "Reliability",
    difficulty: "Core Evidence",
    title: "Case 11: Which Statistic Answers the Question?",
    prompt: "Which statistic tells us the typical amount of measurement error in the original units of the outcome?",
    output: `<h3>Reliability Report</h3><p>ICC = .88</p><p>SEM = 2.3 cm</p><p>MDC95 = 6.4 cm</p>`,
    answers: ["ICC", "SEM", "MDC95", "p-value"],
    correct: 1,
    feedback: "SEM describes typical measurement error in the original units of the outcome. Here, the typical error is about 2.3 cm."
  },
  {
    mode: "interpret",
    category: "Paired t-test",
    difficulty: "Direction + Significance",
    title: "Case 12: The Pre-Post Clue",
    prompt: "Choose the best interpretation.",
    output: `<h3>Paired Samples t-test</h3><table><tr><th>Time</th><th>Mean</th><th>SD</th></tr><tr><td>Pre</td><td>31.4</td><td>5.2</td></tr><tr><td>Post</td><td>35.8</td><td>5.6</td></tr></table><p><em>t</em>(29) = -4.12, p < .001</p>`,
    answers: [
      "Scores were significantly higher at post-test than pre-test.",
      "Scores did not change because the t value is negative.",
      "The post-test caused the pre-test to decrease.",
      "A paired t-test cannot compare two related measurements."
    ],
    correct: 0,
    feedback: "The p-value indicates a significant pre-post difference. The means show that post-test scores were higher than pre-test scores."
  },
  {
    mode: "spot-problem",
    category: "Regression Writing",
    difficulty: "Professional Language",
    title: "Case 13: The R² Mistake",
    prompt: "What is wrong with this sentence?",
    output: `<h3>Student Statement</h3><p>“R² = .41, so the predictor was significant.”</p>`,
    answers: [
      "R² describes variance explained; predictor significance comes from the coefficient p-value.",
      "R² can only be used with paired samples t-tests.",
      "R² is the same thing as the mean.",
      "Nothing is wrong with the statement."
    ],
    correct: 0,
    feedback: "R² tells us how much variance the model explains. To determine whether a specific predictor is statistically significant, check the coefficient table and its p-value."
  },
  {
    mode: "interpret",
    category: "Multiple Regression",
    difficulty: "Model Summary",
    title: "Case 14: The Prediction Model",
    prompt: "Choose the best interpretation of R².",
    output: `<h3>Multiple Regression</h3><p>Outcome: 5K time</p><p>Predictors: weekly mileage, age, and sleep quality</p><p>Model R² = .52, p < .001</p>`,
    answers: [
      "The model explained 52% of the variance in 5K time and was statistically significant.",
      "Each predictor caused 52% of the outcome.",
      "The model was not significant because R² is less than 1.0.",
      "R² tells us which predictor had the strongest coefficient."
    ],
    correct: 0,
    feedback: "R² = .52 means the model explains 52% of the variance in the outcome. The model p-value indicates the overall model was statistically significant."
  },
  {
    mode: "key-values",
    category: "p-values",
    difficulty: "Significance",
    title: "Case 15: Alpha at the Scene",
    prompt: "Using alpha = .05, which result is statistically significant?",
    output: `<h3>Evidence List</h3><p>A: p = .087</p><p>B: p = .049</p><p>C: p = .210</p><p>D: p = .512</p>`,
    answers: ["A only", "B only", "C and D", "All results are significant"],
    correct: 1,
    feedback: "With alpha = .05, p-values below .05 are statistically significant. Only p = .049 meets that criterion."
  },
  {
    mode: "spot-problem",
    category: "Confidence Intervals",
    difficulty: "Common Trap",
    title: "Case 16: The Zero Problem",
    prompt: "Why should this result be interpreted cautiously?",
    output: `<h3>Regression Coefficient</h3><p>B = 1.8</p><p>95% CI [-0.4, 4.1]</p><p>p = .108</p>`,
    answers: [
      "The confidence interval includes zero and the p-value is above .05.",
      "The B value is positive, so it must be significant.",
      "Confidence intervals are not used in regression.",
      "The result proves a strong effect."
    ],
    correct: 0,
    feedback: "Because the confidence interval includes zero and p = .108, this coefficient is not statistically significant at alpha = .05."
  }
];

let selectedMode = "mixed";
let roundQuestions = [];
let currentIndex = 0;
let score = 0;
let streak = 0;
let answered = false;
let review = [];

const els = {
  startGameBtn: document.getElementById("startGameBtn"),
  howToBtn: document.getElementById("howToBtn"),
  closeHowToBtn: document.getElementById("closeHowToBtn"),
  howToModal: document.getElementById("howToModal"),
  setupPanel: document.getElementById("setupPanel"),
  gameArea: document.getElementById("gameArea"),
  resultsPanel: document.getElementById("resultsPanel"),
  guidePanel: document.getElementById("guidePanel"),
  modeGrid: document.getElementById("modeGrid"),
  roundLength: document.getElementById("roundLength"),
  scoreText: document.getElementById("scoreText"),
  streakText: document.getElementById("streakText"),
  accuracyText: document.getElementById("accuracyText"),
  progressFill: document.getElementById("progressFill"),
  progressText: document.getElementById("progressText"),
  categoryTag: document.getElementById("categoryTag"),
  difficultyTag: document.getElementById("difficultyTag"),
  questionTitle: document.getElementById("questionTitle"),
  questionPrompt: document.getElementById("questionPrompt"),
  outputCard: document.getElementById("outputCard"),
  answerGrid: document.getElementById("answerGrid"),
  feedbackBox: document.getElementById("feedbackBox"),
  feedbackTitle: document.getElementById("feedbackTitle"),
  feedbackText: document.getElementById("feedbackText"),
  nextBtn: document.getElementById("nextBtn"),
  restartBtn: document.getElementById("restartBtn"),
  playAgainBtn: document.getElementById("playAgainBtn"),
  reviewGuideBtn: document.getElementById("reviewGuideBtn"),
  closeGuideBtn: document.getElementById("closeGuideBtn"),
  reviewList: document.getElementById("reviewList"),
  finalScoreTitle: document.getElementById("finalScoreTitle"),
  finalScoreText: document.getElementById("finalScoreText")
};

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function getQuestionsForMode(mode, count) {
  const pool = mode === "mixed" ? questionBank : questionBank.filter(q => q.mode === mode);
  const shuffled = shuffle(pool);
  if (shuffled.length >= count) return shuffled.slice(0, count);
  const repeated = [];
  while (repeated.length < count) repeated.push(...shuffle(pool));
  return repeated.slice(0, count);
}

function startGame() {
  const count = Number(els.roundLength.value);
  roundQuestions = getQuestionsForMode(selectedMode, count);
  currentIndex = 0;
  score = 0;
  streak = 0;
  review = [];
  els.setupPanel.hidden = true;
  els.resultsPanel.hidden = true;
  els.guidePanel.hidden = true;
  els.gameArea.hidden = false;
  renderQuestion();
}

function renderQuestion() {
  answered = false;
  const q = roundQuestions[currentIndex];
  els.categoryTag.textContent = q.category;
  els.difficultyTag.textContent = q.difficulty;
  els.questionTitle.textContent = q.title;
  els.questionPrompt.textContent = q.prompt;
  els.outputCard.innerHTML = q.output;
  els.answerGrid.innerHTML = "";
  els.feedbackBox.hidden = true;
  els.nextBtn.disabled = true;
  q.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.textContent = answer;
    btn.addEventListener("click", () => chooseAnswer(index));
    els.answerGrid.appendChild(btn);
  });
  updateStats();
}

function chooseAnswer(index) {
  if (answered) return;
  answered = true;
  const q = roundQuestions[currentIndex];
  const buttons = [...els.answerGrid.querySelectorAll("button")];
  const isCorrect = index === q.correct;

  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.correct) btn.classList.add("correct");
    if (i === index && !isCorrect) btn.classList.add("incorrect");
  });

  if (isCorrect) {
    score += 1;
    streak += 1;
    els.feedbackTitle.textContent = "Evidence Confirmed";
  } else {
    streak = 0;
    els.feedbackTitle.textContent = "Evidence Rechecked";
  }

  review.push({
    title: q.title,
    correct: isCorrect,
    chosen: q.answers[index],
    correctAnswer: q.answers[q.correct],
    feedback: q.feedback
  });

  els.feedbackText.textContent = q.feedback;
  els.feedbackBox.hidden = false;
  els.nextBtn.disabled = false;
  updateStats();
}

function nextQuestion() {
  if (currentIndex < roundQuestions.length - 1) {
    currentIndex += 1;
    renderQuestion();
  } else {
    showResults();
  }
}

function updateStats() {
  const answeredCount = review.length;
  els.scoreText.textContent = `${score} / ${answeredCount}`;
  els.streakText.textContent = streak;
  const accuracy = answeredCount ? Math.round((score / answeredCount) * 100) : 0;
  els.accuracyText.textContent = `${accuracy}%`;
  els.progressText.textContent = `Question ${currentIndex + 1} of ${roundQuestions.length}`;
  els.progressFill.style.width = `${((currentIndex) / roundQuestions.length) * 100}%`;
  if (answered) els.progressFill.style.width = `${((currentIndex + 1) / roundQuestions.length) * 100}%`;
}

function showResults() {
  els.gameArea.hidden = true;
  els.resultsPanel.hidden = false;
  els.setupPanel.hidden = true;
  const pct = Math.round((score / roundQuestions.length) * 100);
  let message = "Good practice round. Review the feedback below and try another mode.";
  if (pct >= 90) message = "Excellent detective work. Your statistical evidence trail is very strong.";
  else if (pct >= 75) message = "Strong work. A few clues are worth reviewing before the final exam.";
  else if (pct >= 60) message = "Developing well. Use the review below to tighten your interpretation skills.";
  els.finalScoreTitle.textContent = `Final Score: ${score} / ${roundQuestions.length} (${pct}%)`;
  els.finalScoreText.textContent = message;
  els.reviewList.innerHTML = "";
  review.forEach(item => {
    const div = document.createElement("div");
    div.className = "review-item";
    div.innerHTML = `<strong>${item.correct ? "✓" : "✕"} ${item.title}</strong><p><strong>Your answer:</strong> ${item.chosen}</p>${item.correct ? "" : `<p><strong>Correct answer:</strong> ${item.correctAnswer}</p>`}<p>${item.feedback}</p>`;
    els.reviewList.appendChild(div);
  });
}

function showSetup() {
  els.setupPanel.hidden = false;
  els.gameArea.hidden = true;
  els.resultsPanel.hidden = true;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

els.modeGrid.addEventListener("click", (event) => {
  const card = event.target.closest(".mode-card");
  if (!card) return;
  selectedMode = card.dataset.mode;
  document.querySelectorAll(".mode-card").forEach(c => c.classList.remove("is-selected"));
  card.classList.add("is-selected");
});

els.startGameBtn.addEventListener("click", startGame);
els.nextBtn.addEventListener("click", nextQuestion);
els.restartBtn.addEventListener("click", showSetup);
els.playAgainBtn.addEventListener("click", showSetup);
els.reviewGuideBtn.addEventListener("click", () => {
  els.guidePanel.hidden = false;
  els.guidePanel.scrollIntoView({ behavior: "smooth" });
});
els.closeGuideBtn.addEventListener("click", () => { els.guidePanel.hidden = true; });
els.howToBtn.addEventListener("click", () => { els.howToModal.hidden = false; });
els.closeHowToBtn.addEventListener("click", () => { els.howToModal.hidden = true; });
els.howToModal.addEventListener("click", (event) => {
  if (event.target === els.howToModal) els.howToModal.hidden = true;
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") els.howToModal.hidden = true;
  if (!els.gameArea.hidden && !answered) {
    const num = Number(event.key);
    if (num >= 1 && num <= 4) chooseAnswer(num - 1);
  } else if (!els.gameArea.hidden && answered && event.key === "Enter") {
    nextQuestion();
  }
});
