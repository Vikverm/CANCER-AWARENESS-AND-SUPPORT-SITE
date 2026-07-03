/*=====================================================
        CancerCare+ AI Symptom Checker
                Part 4C-1A
======================================================*/

// =====================================
// DOM Elements
// =====================================

const questions = document.querySelectorAll(".question");
const answerButtons = document.querySelectorAll(".answer-btn");

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const restartBtn = document.getElementById("restartBtn");

const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");

const resultBox = document.getElementById("resultBox");

const riskLevel = document.getElementById("riskLevel");
const riskScore = document.getElementById("riskScore");
const recommendation = document.getElementById("recommendation");
const riskFill = document.getElementById("riskFill");

// =====================================
// Variables
// =====================================

let currentQuestion = 0;

// Stores score of each question
let answers = new Array(questions.length).fill(null);

// Total score
let totalScore = 0;

// =====================================
// Initial Screen
// =====================================

function initializeChecker() {

    questions.forEach((question, index) => {

        question.classList.remove("active");

        if (index === 0) {
            question.classList.add("active");
        }

    });

    resultBox.classList.remove("show");

    updateProgress();

    updateButtons();

}

initializeChecker();

// =====================================
// Update Progress Bar
// =====================================

function updateProgress() {

    const percentage =
        ((currentQuestion + 1) / questions.length) * 100;

    progressFill.style.width = percentage + "%";

    progressText.innerText =
        `Question ${currentQuestion + 1} of ${questions.length}`;

}

// =====================================
// Update Previous / Next Buttons
// =====================================

function updateButtons() {

    prevBtn.disabled = currentQuestion === 0;

    if (currentQuestion === questions.length - 1) {

        nextBtn.innerHTML =
            'Analyze Risk <i class="fa-solid fa-chart-line"></i>';

    } else {

        nextBtn.innerHTML =
            'Next <i class="fa-solid fa-arrow-right"></i>';

    }

}

// =====================================
// Show Current Question
// =====================================

function showQuestion(index) {

    questions.forEach(question => {

        question.classList.remove("active");

    });

    questions[index].classList.add("active");

    updateProgress();

    updateButtons();

}

// =====================================
// Answer Selection
// =====================================

answerButtons.forEach(button => {

    button.addEventListener("click", function () {

        const parent =
            this.closest(".question");

        // Remove previous selection

        parent.querySelectorAll(".answer-btn")
            .forEach(btn => {

                btn.classList.remove("selected");

            });

        // Highlight current answer

        this.classList.add("selected");

        // Save score

        answers[currentQuestion] =
            Number(this.dataset.score);

    });

});

// =====================================
// Previous Button
// =====================================

prevBtn.addEventListener("click", () => {

    if (currentQuestion > 0) {

        currentQuestion--;

        showQuestion(currentQuestion);

    }

});

// =====================================
// Helper Function
// =====================================

function allQuestionsAnswered() {

    return answers.every(answer => answer !== null);

}

// =====================================
// Debug
// =====================================

console.log("AI Symptom Checker Initialized");

/*=====================================================
        CancerCare+ AI Symptom Checker
                Part 4C-1B
======================================================*/

// =====================================
// Next Button
// =====================================

nextBtn.addEventListener("click", () => {

    // Check if current question has been answered

    if (answers[currentQuestion] === null) {

        alert("Please select an answer before continuing.");

        return;

    }

    // Last question?

    if (currentQuestion === questions.length - 1) {

        calculateScore();

        return;

    }

    // Move to next question

    currentQuestion++;

    showQuestion(currentQuestion);

});

// =====================================
// Calculate Total Score
// =====================================

function calculateScore() {

    totalScore = answers.reduce((sum, score) => {

        return sum + score;

    }, 0);

    showResult();

}

// =====================================
// Show Result Screen
// =====================================

function showResult() {

    // Hide every question

    questions.forEach(question => {

        question.style.display = "none";

    });

    // Hide navigation

    document.querySelector(".checker-buttons")
        .style.display = "none";

    // Hide progress

    document.querySelector(".progress-container")
        .style.display = "none";

    // Display result

    resultBox.classList.add("show");

    resultBox.style.display = "block";

    displayRiskLevel();

}

// =====================================
// Restore Question Screen
// =====================================

function showQuizAgain() {

    questions.forEach(question => {

        question.style.display = "";

    });

    document.querySelector(".checker-buttons")
        .style.display = "flex";

    document.querySelector(".progress-container")
        .style.display = "block";

    resultBox.classList.remove("show");

    resultBox.style.display = "none";

}

// =====================================
// Simple Fade Effect
// =====================================

function fadeQuestion() {

    const activeQuestion = questions[currentQuestion];

    activeQuestion.style.opacity = "0";

    setTimeout(() => {

        activeQuestion.style.opacity = "1";

    }, 200);

}

// =====================================
// Enhance Navigation
// =====================================

function showQuestion(index) {

    questions.forEach(question => {

        question.classList.remove("active");

    });

    questions[index].classList.add("active");

    fadeQuestion();

    updateProgress();

    updateButtons();

}

// =====================================
// Keyboard Navigation
// =====================================

document.addEventListener("keydown", (event) => {

    if (event.key === "ArrowRight") {

        nextBtn.click();

    }

    if (event.key === "ArrowLeft") {

        if (!prevBtn.disabled) {

            prevBtn.click();

        }

    }

});

// =====================================
// Auto Scroll
// =====================================

function scrollCheckerTop() {

    document.querySelector(".checker-box")
        .scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

}

// Scroll when changing question

const oldShowQuestion = showQuestion;

showQuestion = function(index){

    oldShowQuestion(index);

    scrollCheckerTop();

};

// =====================================
// Progress Console
// =====================================

console.log("Question Navigation Loaded");

/*=====================================================
        CancerCare+ AI Symptom Checker
                Part 4C-2
======================================================*/

// =====================================
// Display Risk Result
// =====================================

function displayRiskLevel() {

    resultBox.classList.remove(
        "low-risk",
        "medium-risk",
        "high-risk"
    );

    let level = "";
    let recommendationText = "";
    let color = "";
    let meterWidth = 0;

    /*
        Maximum Possible Score = 30

        0-8   = Low
        9-18  = Medium
        19-30 = High
    */

    if (totalScore <= 8) {

        level = "🟢 LOW RISK";

        recommendationText = `
            Excellent!

            Based on your answers, your current risk appears to be low.

            ✔ Maintain a healthy lifestyle.

            ✔ Eat nutritious food.

            ✔ Exercise regularly.

            ✔ Avoid tobacco and alcohol.

            ✔ Continue routine medical checkups.

            This assessment is educational only and is not a diagnosis.
        `;

        color = "#2ecc71";

        meterWidth = 30;

        resultBox.classList.add("low-risk");

    }

    else if (totalScore <= 18) {

        level = "🟡 MODERATE RISK";

        recommendationText = `
            Some of your responses suggest possible risk factors.

            ✔ Schedule a medical checkup.

            ✔ Reduce smoking or alcohol consumption.

            ✔ Improve diet and physical activity.

            ✔ Discuss any persistent symptoms with your doctor.

            This tool cannot diagnose cancer.
        `;

        color = "#f39c12";

        meterWidth = 65;

        resultBox.classList.add("medium-risk");

    }

    else {

        level = "🔴 HIGH RISK";

        recommendationText = `
            Several responses indicate that professional medical advice is recommended.

            ✔ Consult a qualified healthcare provider promptly.

            ✔ Do not ignore persistent symptoms.

            ✔ Follow your doctor's recommendations regarding evaluation and screening.

            This educational tool is not a medical diagnosis.
        `;

        color = "#e74c3c";

        meterWidth = 100;

        resultBox.classList.add("high-risk");

    }

    // Update UI

    riskLevel.innerHTML = level;

    riskScore.innerHTML =
        "Total Score : " + totalScore + " / 30";

    recommendation.innerHTML =
        recommendationText.replace(/\n/g, "<br>");

    riskFill.style.width =
        meterWidth + "%";

    riskFill.style.background = color;

    animateRiskMeter();

}

// =====================================
// Risk Meter Animation
// =====================================

function animateRiskMeter(){

    riskFill.animate(

        [

            {

                transform:"scaleX(.2)"

            },

            {

                transform:"scaleX(1)"

            }

        ],

        {

            duration:700,

            easing:"ease"

        }

    );

}

// =====================================
// Restart Quiz
// =====================================

restartBtn.addEventListener("click", restartQuiz);

function restartQuiz(){

    // Reset Variables

    currentQuestion = 0;

    totalScore = 0;

    answers = new Array(
        questions.length
    ).fill(null);

    // Remove Selected Answers

    answerButtons.forEach(button=>{

        button.classList.remove("selected");

    });

    // Hide Result

    resultBox.className = "result-box";

    resultBox.style.display = "none";

    // Show Quiz Again

    showQuizAgain();

    // Reset Question

    showQuestion(currentQuestion);

    // Reset Meter

    riskFill.style.width = "0%";

    riskScore.innerHTML = "";

    recommendation.innerHTML = "";

}

// =====================================
// Progress Animation
// =====================================

function animateProgress(){

    progressFill.animate(

        [

            {

                opacity:.4

            },

            {

                opacity:1

            }

        ],

        {

            duration:350

        }

    );

}

const oldProgress = updateProgress;

updateProgress = function(){

    oldProgress();

    animateProgress();

};

// =====================================
// Hover Effect
// =====================================

answerButtons.forEach(button=>{

    button.addEventListener("mouseenter",()=>{

        button.style.transform="translateY(-5px)";

    });

    button.addEventListener("mouseleave",()=>{

        button.style.transform="";

    });

});

// =====================================
// Keyboard Shortcuts
// =====================================

document.addEventListener("keydown",(e)=>{

    if(resultBox.classList.contains("show")){

        if(e.key==="r" || e.key==="R"){

            restartQuiz();

        }

    }

});

// =====================================
// Completion Message
// =====================================

console.log(
    "%c✔ AI Symptom Checker Ready",
    "color:#2ecc71;font-size:18px;font-weight:bold;"
);

console.log(
    "CancerCare+ Loaded Successfully"
);