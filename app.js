const STORAGE_KEY = "the_vault_progress";

const state = {
    currentDoor: null,
    currentChallenge: "A",
    questionIndex: 0,
    foundDigits: [],
    progress: loadProgress()
};
const AudioManager = {
  enabled: true,

  background: new Audio("audio/backrooms.mp3"),
  correct: new Audio("audio/correct.mp3"),
  incorrect: new Audio("audio/incorrect.mp3"),
  complete: new Audio("audio/level-complete.mp3"),

 init() {
  this.background.loop = true;

  this.background.volume = 0.25;

  this.correct.volume = 0.8;
  this.incorrect.volume = 0.8;
  this.complete.volume = 0.8;

  this.background.load();
  this.correct.load();
  this.incorrect.load();
  this.complete.load();
},

  playBackground() {
    if (!this.enabled) return;
    this.background.play();
  },

  playCorrect() {
    if (!this.enabled) return;

    this.correct.currentTime = 0;
    this.correct.play();
  },

  playIncorrect() {
    if (!this.enabled) return;

    this.incorrect.currentTime = 0;
    this.incorrect.play();
  },

  playComplete() {
    if (!this.enabled) return;

    this.complete.currentTime = 0;
    this.complete.play();
  }
};

/* =========================
   INIT
========================= */

document.addEventListener("DOMContentLoaded", () => {

    AudioManager.init();

    bindEvents();

    showScreen("home-screen");

    renderVaultGrid();

});

function bindEvents() {
document
    .getElementById("enter-vault-btn")
    .addEventListener("click", () => {

        AudioManager.playBackground();

        renderVaultGrid();

        showScreen("vault-screen");

    });

    document
        .getElementById("return-vault-btn")
        .addEventListener("click", () => {
            renderVaultGrid();
            showScreen("vault-screen");
        });
		document
    .getElementById("audio-toggle")
    .addEventListener(
        "click",
        toggleAudio
    );
	document
    .getElementById("play-again-btn")
    .addEventListener(
        "click",
        () => {
            renderVaultGrid();
            showScreen("vault-screen");
        }
    );
}

/* =========================
   STORAGE
========================= */

function loadProgress() {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved) {
        try {
            return JSON.parse(saved);
        } catch {
            return { completedDoors: [] };
        }
    }

    return { completedDoors: [] };
}

function saveProgress() {
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(state.progress)
    );
}

/* =========================
   SCREEN MANAGEMENT
========================= */

function showScreen(id) {
    document
        .querySelectorAll(".screen")
        .forEach(screen =>
            screen.classList.remove("active")
        );

    document
        .getElementById(id)
        .classList.add("active");
}

/* =========================
   VAULT GRID
========================= */

function renderVaultGrid() {
    const grid =
        document.getElementById("vault-grid");

    const totalDoors =
        Object.keys(doors).length;

    const completed =
        state.progress.completedDoors.length;
		
		const remaining =
    totalDoors - completed;

document.getElementById(
    "exit-progress"
).textContent =
    `${completed} / ${totalDoors} LEVELS CLEARED`;

if (remaining === 0) {

    document.getElementById(
        "exit-distance"
    ).textContent =
        "EXIT GATE REACHED";

} else {

    document.getElementById(
        "exit-distance"
    ).textContent =
        `EXIT GATE: ${remaining} LEVELS AWAY`;
}

    document.getElementById(
        "vault-progress-fill"
    ).style.width =
        `${(completed / totalDoors) * 100}%`;
		document.getElementById(
    "vault-progress-text"
).textContent =
    `${completed} / ${totalDoors} Doors`;

    grid.innerHTML = "";

    Object.values(doors).forEach(door => {

        const status =
            getDoorStatus(door.number);

        const button =
            document.createElement("button");

        button.className =
            `answer-btn vault-door ${status}`;

        if (status === "completed") {

button.innerHTML =
    `✅ LEVEL ${String(door.number).padStart(2,"0")}`;

        } else if (
            status === "available"
        ) {

button.innerHTML =
    `🚪 LEVEL ${String(door.number).padStart(2,"0")}`;

        } else {

button.innerHTML =
    `🔒 LEVEL ${String(door.number).padStart(2,"0")}`;
        }

        button.disabled =
            status === "locked";

        button.addEventListener(
            "click",
            () => startDoor(door.number)
        );

        grid.appendChild(button);
		if (door.number < totalDoors) {

    const line =
        document.createElement("div");

    line.className = "route-line";

    grid.appendChild(line);
}
    });
const exitGate =
    document.createElement("button");

exitGate.className =
    "answer-btn exit-gate";

exitGate.innerHTML =
`
🚨 EXIT GATE
<br>
FINAL EXIT
`;

if (completed === totalDoors) {

    exitGate.addEventListener(
        "click",
        showEndingScreen
    );

} else {

    exitGate.disabled = true;
}

grid.appendChild(exitGate);
}

function getDoorStatus(doorNumber) {

    if (
        state.progress.completedDoors.includes(
            doorNumber
        )
    ) {
        return "completed";
    }

    if (doorNumber === 1) {
        return "available";
    }

    if (
        state.progress.completedDoors.includes(
            doorNumber - 1
        )
    ) {
        return "available";
    }

    return "locked";
}

/* =========================
   DOOR START
========================= */

function startDoor(doorNumber) {

    state.currentDoor =
        doors[doorNumber];

    state.currentChallenge = "A";
    state.questionIndex = 0;
    state.foundDigits = [];

    document.getElementById(
        "door-number"
    ).textContent =
        `DOOR ${state.currentDoor.number}`;

    document.getElementById(
        "door-name"
    ).textContent =
        state.currentDoor.name;

    document.getElementById(
        "door-briefing"
    ).textContent =
        state.currentDoor.briefing;

    showScreen("door-screen");

    renderChallengeA();
}

/* =========================
   CHALLENGE RESTART
========================= */

function restartCurrentChallenge() {

    state.questionIndex = 0;

    if (
        state.currentChallenge === "A"
    ) {
        renderChallengeA();
    }

    if (
        state.currentChallenge === "B"
    ) {
        renderChallengeB();
    }

    if (
        state.currentChallenge === "C"
    ) {
        renderChallengeC();
    }
}

/* =========================
   PROGRESS BAR
========================= */

function renderChallengeProgress(
    current,
    total
) {

 const percent =
    Math.min(
        100,
        Math.round(
            (current / total) * 100
        )
    );

    return `
        <div class="progress-card">

            <div class="progress-header">
                <span>Progress</span>
                <span>${current} / ${total}</span>
            </div>

            <div class="progress-bar">
                <div
                    class="progress-fill"
                    style="width:${percent}%"
                ></div>
            </div>

        </div>
    `;
}

/* =========================
   DIGIT FOUND
========================= */

function renderDigitFound(
    digit,
    nextCallback
) {

    const container =
        document.getElementById(
            "challenge-container"
        );

    container.innerHTML = `
        <h2>MODULE REPAIRED</h2>

        <p>DIGIT FOUND</p>

        <div class="success-code">
            ${digit}
        </div>

        <button
            id="continue-btn"
            class="primary-btn"
        >
            CONTINUE
        </button>
    `;

    document
        .getElementById(
            "continue-btn"
        )
        .addEventListener(
            "click",
            nextCallback
        );
}
/* =========================
   CHALLENGE A
========================= */

function renderChallengeA() {

    const challenge =
        state.currentDoor.challengeA;

    const question =
        challenge.questions[
            state.questionIndex
        ];

    const container =
        document.getElementById(
            "challenge-container"
        );

    container.innerHTML = `
        <h2>${challenge.name}</h2>

        ${renderChallengeProgress(
            state.questionIndex + 1,
            challenge.questions.length
        )}

        <p>${question.q}</p>

        <div id="answers"></div>
    `;

    const answersDiv =
        document.getElementById(
            "answers"
        );

    question.answers.forEach(
        (answer, index) => {

            const btn =
                document.createElement(
                    "button"
                );

            btn.className =
                "answer-btn";

            btn.textContent =
                answer;

            btn.addEventListener(
                "click",
                () => {

 if (
    index !==
    question.correct
) {

    AudioManager.playIncorrect();

    alert(
        "ACCESS ERROR. Challenge restarted."
    );

    restartCurrentChallenge();

    return;
}

				AudioManager.playCorrect();  
                  state.questionIndex++;

                    if (
                        state.questionIndex >=
                        challenge.questions.length
                    ) {

                        const digit =
                            state.currentDoor
                                .digits[0];

                        state.foundDigits.push(
                            digit
                        );

                        renderDigitFound(
                            digit,
                            () => {

                                state.currentChallenge =
                                    "B";

                                state.questionIndex =
                                    0;

                                renderChallengeB();
                            }
                        );

                        return;
                    }

                    renderChallengeA();
                }
            );

            answersDiv.appendChild(
                btn
            );
        }
    );
}

/* =========================
   CHALLENGE B
========================= */

function renderChallengeB() {

    const challenge =
        state.currentDoor.challengeB;

    const question =
        challenge.questions[
            state.questionIndex
        ];

    const container =
        document.getElementById(
            "challenge-container"
        );

    const options =
        buildVocabularyOptions(
            challenge.questions,
            question.english
        );

    container.innerHTML = `
        <h2>${challenge.name}</h2>

        ${renderChallengeProgress(
            state.questionIndex + 1,
            challenge.questions.length
        )}

        <p>
            <strong>
                ${question.spanish}
            </strong>
        </p>

        <div id="answers"></div>
    `;

    const answersDiv =
        document.getElementById(
            "answers"
        );

    options.forEach(option => {

        const btn =
            document.createElement(
                "button"
            );

        btn.className =
            "answer-btn";

        btn.textContent =
            option;

        btn.addEventListener(
            "click",
            () => {

 if (
    option !==
    question.english
) {

    AudioManager.playIncorrect();

    alert(
        "ACCESS ERROR. Challenge restarted."
    );

    restartCurrentChallenge();

    return;
}

                AudioManager.playCorrect();  
				state.questionIndex++;

                if (
                    state.questionIndex >=
                    challenge.questions.length
                ) {

                    const digit =
                        state.currentDoor
                            .digits[1];

                    state.foundDigits.push(
                        digit
                    );

                    renderDigitFound(
                        digit,
                        () => {

                            state.currentChallenge =
                                "C";

                            state.questionIndex =
                                0;

                            renderChallengeC();
                        }
                    );

                    return;
                }

                renderChallengeB();
            }
        );

        answersDiv.appendChild(
            btn
        );
    });
}

function buildVocabularyOptions(
    questions,
    correctAnswer
) {

    const pool = questions
        .map(
            q => q.english
        )
        .filter(
            answer =>
                answer !==
                correctAnswer
        );

    shuffle(pool);

    return shuffle([
        correctAnswer,
        pool[0],
        pool[1],
        pool[2]
    ]);
}

/* =========================
   CHALLENGE C
========================= */

function renderChallengeC() {

    const challenge =
        state.currentDoor.challengeC;

    const question =
        challenge.questions[
            state.questionIndex
        ];

    const container =
        document.getElementById(
            "challenge-container"
        );

    container.innerHTML = `
        <h2>${challenge.name}</h2>

        ${renderChallengeProgress(
            state.questionIndex + 1,
            challenge.questions.length
        )}

        <div class="reading-box">
            ${challenge.readingText}
        </div>

        <p>${question.q}</p>

        <div id="answers"></div>
    `;

    const answersDiv =
        document.getElementById(
            "answers"
        );

    question.answers.forEach(
        (answer, index) => {

            const btn =
                document.createElement(
                    "button"
                );

            btn.className =
                "answer-btn";

            btn.textContent =
                answer;

            btn.addEventListener(
                "click",
                () => {

   if (
    index !==
    question.correct
) {

    AudioManager.playIncorrect();

    alert(
        "ACCESS ERROR. Challenge restarted."
    );

    restartCurrentChallenge();

    return;
}
				AudioManager.playCorrect();  
                    state.questionIndex++;

                    if (
                        state.questionIndex >=
                        challenge.questions.length
                    ) {

                        const digit =
                            state.currentDoor
                                .digits[2];

                        state.foundDigits.push(
                            digit
                        );

                        renderDigitFound(
                            digit,
                            () => {
                                renderFinalLock();
                            }
                        );

                        return;
                    }

                    renderChallengeC();
                }
            );

            answersDiv.appendChild(
                btn
            );
        }
    );
}
/* =========================
   FINAL LOCK
========================= */

function renderFinalLock() {

    const container =
        document.getElementById(
            "challenge-container"
        );

    container.innerHTML = `
        <h2>FINAL LOCK</h2>

        <p>
            Enter the recovered code.
        </p>

        <div class="file-box">
            Digits Found:
            <strong>
                ${state.foundDigits.join(" - ")}
            </strong>
        </div>

        <div id="lock-message"></div>

        <input
            id="code-input"
            maxlength="10"
            autocomplete="off"
        >

        <button
            id="unlock-btn"
            class="primary-btn"
        >
            UNLOCK
        </button>
    `;

    document
        .getElementById("unlock-btn")
        .addEventListener(
            "click",
            () => {

                const entered =
                    document
                        .getElementById(
                            "code-input"
                        )
                        .value
                        .trim();

 if (
    entered !==
    state.currentDoor.code
) {

    AudioManager.playIncorrect();

    document.getElementById(
        "lock-message"
    ).innerHTML = `
        <p class="access-denied">
            ACCESS DENIED
        </p>
    `;

    return;
}

                completeDoor();
            }
        );
}

/* =========================
   COMPLETE DOOR
========================= */

function completeDoor() {

    AudioManager.playComplete();

    const doorNumber =
        state.currentDoor.number;

    if (
        !state.progress.completedDoors.includes(
            doorNumber
        )
    ) {

        state.progress.completedDoors.push(
            doorNumber
        );

        saveProgress();
    }

    document.getElementById(
        "victory-code"
    ).textContent =
        state.currentDoor.code;

    document.getElementById(
        "victory-text"
    ).textContent =
        `Door ${doorNumber} Cleared`;

    showScreen(
        "victory-screen"
    );
}
function toggleAudio() {

    AudioManager.enabled =
        !AudioManager.enabled;

    const button =
        document.getElementById(
            "audio-toggle"
        );

    if (AudioManager.enabled) {

        button.textContent = "🔊";

        AudioManager.background.play();

    } else {

        button.textContent = "🔇";

        AudioManager.background.pause();

    }
}
function showEndingScreen() {

    showScreen(
        "ending-screen"
    );
}
/* =========================
   HELPERS
========================= */

function shuffle(array) {

    const copy = [...array];

    for (
        let i = copy.length - 1;
        i > 0;
        i--
    ) {

        const j = Math.floor(
            Math.random() *
            (i + 1)
        );

        [
            copy[i],
            copy[j]
        ] = [
            copy[j],
            copy[i]
        ];
    }

    return copy;
}
