/*=====================================================
        CancerCare+
        BMI Calculator
        Part 5C-1
======================================================*/

// ============================
// DOM Elements
// ============================

const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const ageInput = document.getElementById("age");
const genderInput = document.getElementById("gender");
const activityInput = document.getElementById("activity");

const calculateBtn = document.getElementById("calculateBMI");
const resetBtn = document.getElementById("resetBMI");

const bmiResult = document.getElementById("bmiResult");

const bmiValue = document.getElementById("bmiValue");
const bmiCategory = document.getElementById("bmiCategory");
const healthMessage = document.getElementById("healthMessage");

const idealWeight = document.getElementById("idealWeight");
const dailyCalories = document.getElementById("dailyCalories");
const healthScore = document.getElementById("healthScore");

const bmiProgressFill = document.getElementById("bmiProgressFill");
const circleProgress = document.getElementById("circleProgress");

const tipsList = document.getElementById("tipsList");

// ============================
// Circle Settings
// ============================

const radius = 90;
const circumference = 2 * Math.PI * radius;

circleProgress.style.strokeDasharray = circumference;
circleProgress.style.strokeDashoffset = circumference;

// ============================
// Calculate Button
// ============================

calculateBtn.addEventListener("click", calculateBMI);

// ============================
// BMI Calculation
// ============================

function calculateBMI() {

    const height = Number(heightInput.value);
    const weight = Number(weightInput.value);
    const age = Number(ageInput.value);
    const gender = genderInput.value;
    const activity = Number(activityInput.value);

    // Validation

    if (
        !height ||
        !weight ||
        !age ||
        gender === ""
    ) {

        alert("Please fill all fields.");

        return;

    }

    // Convert cm to meter

    const heightMeter = height / 100;

    // BMI

    const bmi = weight / (heightMeter * heightMeter);

    bmiValue.innerHTML = bmi.toFixed(1);

    // Show Result

    bmiResult.classList.add("show");

    // Determine Category

    updateCategory(bmi);

    // Ideal Weight

    calculateIdealWeight(heightMeter);

    // Calories

    calculateCalories(
        gender,
        weight,
        height,
        age,
        activity
    );

    // Health Score

    calculateHealthScore(bmi);

    // Progress

    animateProgress(bmi);

}

// ============================
// BMI Category
// ============================

function updateCategory(bmi){

    let category = "";
    let message = "";
    let color = "";
    let progress = 0;

    tipsList.innerHTML = "";

    if(bmi < 18.5){

        category = "Underweight";

        color = "#3498db";

        progress = 30;

        message =
        "Your BMI is below the recommended healthy range.";

        addTip("Increase healthy calorie intake.");
        addTip("Eat protein-rich foods.");
        addTip("Consult a nutritionist if needed.");

    }

    else if(bmi < 25){

        category = "Healthy Weight";

        color = "#2ecc71";

        progress = 100;

        message =
        "Excellent! Your BMI is within the healthy range.";

        addTip("Maintain your current lifestyle.");
        addTip("Exercise regularly.");
        addTip("Continue eating balanced meals.");

    }

    else if(bmi < 30){

        category = "Overweight";

        color = "#f39c12";

        progress = 70;

        message =
        "Your BMI is above the healthy range.";

        addTip("Increase physical activity.");
        addTip("Reduce sugary drinks.");
        addTip("Eat more vegetables.");

    }

    else{

        category = "Obesity";

        color = "#e74c3c";

        progress = 45;

        message =
        "Medical consultation is recommended.";

        addTip("Consult your doctor.");
        addTip("Create a weight-loss plan.");
        addTip("Exercise consistently.");

    }

    bmiCategory.innerHTML = category;

    healthMessage.innerHTML = message;

    bmiCategory.style.background = color;

    bmiCategory.style.color = "#fff";

    bmiProgressFill.style.width = progress + "%";

    bmiProgressFill.style.background = color;

    updateCircle(progress,color);

}

// ============================
// BMI Category
// ============================

function updateCategory(bmi){

    let category = "";
    let message = "";
    let color = "";
    let progress = 0;

    tipsList.innerHTML = "";

    if(bmi < 18.5){

        category = "Underweight";

        color = "#3498db";

        progress = 30;

        message =
        "Your BMI is below the recommended healthy range.";

        addTip("Increase healthy calorie intake.");
        addTip("Eat protein-rich foods.");
        addTip("Consult a nutritionist if needed.");

    }

    else if(bmi < 25){

        category = "Healthy Weight";

        color = "#2ecc71";

        progress = 100;

        message =
        "Excellent! Your BMI is within the healthy range.";

        addTip("Maintain your current lifestyle.");
        addTip("Exercise regularly.");
        addTip("Continue eating balanced meals.");

    }

    else if(bmi < 30){

        category = "Overweight";

        color = "#f39c12";

        progress = 70;

        message =
        "Your BMI is above the healthy range.";

        addTip("Increase physical activity.");
        addTip("Reduce sugary drinks.");
        addTip("Eat more vegetables.");

    }

    else{

        category = "Obesity";

        color = "#e74c3c";

        progress = 45;

        message =
        "Medical consultation is recommended.";

        addTip("Consult your doctor.");
        addTip("Create a weight-loss plan.");
        addTip("Exercise consistently.");

    }

    bmiCategory.innerHTML = category;

    healthMessage.innerHTML = message;

    bmiCategory.style.background = color;

    bmiCategory.style.color = "#fff";

    bmiProgressFill.style.width = progress + "%";

    bmiProgressFill.style.background = color;

    updateCircle(progress,color);

}

/*=====================================================
        BMI Calculator
            Part 5C-2
======================================================*/

// ============================
// Ideal Weight
// ============================

function calculateIdealWeight(heightMeter){

    const min = 18.5 * heightMeter * heightMeter;
    const max = 24.9 * heightMeter * heightMeter;

    idealWeight.innerHTML =
        `${min.toFixed(1)} - ${max.toFixed(1)} kg`;

}

// ============================
// Calories
// ============================

function calculateCalories(
    gender,
    weight,
    height,
    age,
    activity
){

    let bmr;

    if(gender === "Male"){

        bmr =
            (10 * weight) +
            (6.25 * height) -
            (5 * age) +
            5;

    }
    else{

        bmr =
            (10 * weight) +
            (6.25 * height) -
            (5 * age) -
            161;

    }

    const calories = Math.round(bmr * activity);

    dailyCalories.innerHTML =
        calories + " kcal";

}

// ============================
// Health Score
// ============================

function calculateHealthScore(bmi){

    let score;

    if(bmi < 18.5){

        score = 70;

    }
    else if(bmi < 25){

        score = 100;

    }
    else if(bmi < 30){

        score = 80;

    }
    else{

        score = 55;

    }

    healthScore.innerHTML =
        score + "%";

}

// ============================
// Circle Progress
// ============================

function updateCircle(progress,color){

    const offset =
        circumference -
        (progress / 100) * circumference;

    circleProgress.style.strokeDashoffset =
        offset;

    circleProgress.style.stroke =
        color;

}

// ============================
// Tips
// ============================

function addTip(text){

    const li =
        document.createElement("li");

    li.innerHTML = text;

    tipsList.appendChild(li);

}

// ============================
// Reset
// ============================

resetBtn.addEventListener("click",resetBMI);

function resetBMI(){

    heightInput.value="";
    weightInput.value="";
    ageInput.value="";

    genderInput.selectedIndex=0;
    activityInput.selectedIndex=0;

    bmiResult.classList.remove("show");

    bmiValue.innerHTML="0.0";

    bmiCategory.innerHTML="Healthy";

    healthMessage.innerHTML=
        "Your health information will appear here.";

    idealWeight.innerHTML="--";

    dailyCalories.innerHTML="--";

    healthScore.innerHTML="--";

    bmiProgressFill.style.width="0%";

    circleProgress.style.strokeDashoffset=
        circumference;

    tipsList.innerHTML=
        "<li>Calculate your BMI to receive personalized recommendations.</li>";

}

// ============================
// Print
// ============================

const printBtn =
document.getElementById("printReport");

printBtn.addEventListener("click",()=>{

    window.print();

});

// ============================
// Download Report
// ============================

const downloadBtn =
document.getElementById("downloadReport");

downloadBtn.addEventListener("click",downloadReport);

function downloadReport(){

    const report = `

=====================================

CancerCare+ BMI Report

=====================================

Height : ${heightInput.value} cm

Weight : ${weightInput.value} kg

Age : ${ageInput.value}

Gender : ${genderInput.value}

BMI : ${bmiValue.innerHTML}

Category : ${bmiCategory.innerHTML}

Ideal Weight :

${idealWeight.innerHTML}

Daily Calories :

${dailyCalories.innerHTML}

Health Score :

${healthScore.innerHTML}

Generated by

CancerCare+

Educational Purposes Only

`;

    const blob =
        new Blob([report],{
            type:"text/plain"
        });

    const link =
        document.createElement("a");

    link.href =
        URL.createObjectURL(blob);

    link.download =
        "BMI_Report.txt";

    link.click();

}

// ============================
// Enter Key
// ============================

document.addEventListener("keydown",(e)=>{

    if(e.key==="Enter"){

        calculateBMI();

    }

});

// ============================
// Console
// ============================

console.log(
"%cBMI Calculator Ready",
"color:#2ecc71;font-size:18px;font-weight:bold;"
);