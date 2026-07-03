/*=====================================================
            FAQ SECTION
                Part 6C-1
======================================================*/

// =====================================
// Select Elements
// =====================================

const faqItems = document.querySelectorAll(".faq-item");
const faqQuestions = document.querySelectorAll(".faq-question");
const searchInput = document.getElementById("faqSearch");

const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

// =====================================
// Accordion
// =====================================

faqQuestions.forEach(question => {

    question.addEventListener("click", () => {

        const item = question.parentElement;

        // Close other FAQ items

        faqItems.forEach(faq => {

            if (faq !== item) {

                faq.classList.remove("active");

            }

        });

        // Toggle current item

        item.classList.toggle("active");

    });

});

// =====================================
// Search FAQ
// =====================================

searchInput.addEventListener("keyup", () => {

    const value =
        searchInput.value.toLowerCase();

    faqItems.forEach(item => {

        const text =
            item.innerText.toLowerCase();

        if (text.includes(value)) {

            item.style.display = "block";

        }

        else {

            item.style.display = "none";

        }

    });

});

// =====================================
// Feedback Buttons
// =====================================

function showFeedback(message,color){

    // Remove old message

    const old =
        document.querySelector(".feedback-message");

    if(old){

        old.remove();

    }

    const div =
        document.createElement("div");

    div.className =
        "feedback-message";

    div.innerHTML =
        message;

    div.style.color =
        color;

    document
        .querySelector(".faq-feedback")
        .appendChild(div);

}

yesBtn.addEventListener("click",()=>{

    showFeedback(

        "🎉 Thank you! We're glad the information was helpful.",

        "#27ae60"

    );

});

noBtn.addEventListener("click",()=>{

    showFeedback(

        "🙏 Thank you for your feedback. We'll continue improving this section.",

        "#e67e22"

    );

});

// =====================================
// Keyboard Accessibility
// =====================================

faqQuestions.forEach(question=>{

    question.setAttribute("tabindex","0");

    question.addEventListener("keydown",(e)=>{

        if(
            e.key==="Enter" ||
            e.key===" "
        ){

            e.preventDefault();

            question.click();

        }

    });

});

// =====================================
// Search Shortcut
// Ctrl + K
// =====================================

document.addEventListener("keydown",(e)=>{

    if(e.ctrlKey && e.key==="k"){

        e.preventDefault();

        searchInput.focus();

    }

});

// =====================================
// Smooth Scroll on Search
// =====================================

searchInput.addEventListener("focus",()=>{

    document
        .querySelector(".faq-section")
        .scrollIntoView({

            behavior:"smooth",

            block:"start"

        });

});

// =====================================
// Expand First FAQ by Default
// =====================================

if(faqItems.length>0){

    faqItems[0].classList.add("active");

}

// =====================================
// Hover Animation
// =====================================

faqItems.forEach(item=>{

    item.addEventListener("mouseenter",()=>{

        item.style.transform =
            "translateY(-4px)";

    });

    item.addEventListener("mouseleave",()=>{

        item.style.transform =
            "";

    });

});

// =====================================
// Console
// =====================================

console.log(

    "%cFAQ Module Loaded",

    "color:#2ecc71;font-size:18px;font-weight:bold;"

);