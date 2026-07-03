/*=====================================================
        CancerCare+
        Testimonials Slider
                Part 7C-1
======================================================*/

// ==========================================
// Elements
// ==========================================

const testimonialCards =
    document.querySelectorAll(".testimonial-card");

const dots =
    document.querySelectorAll(".dot");

const nextButton =
    document.querySelector(".next-btn");

const prevButton =
    document.querySelector(".prev-btn");

const slider =
    document.querySelector(".testimonial-slider");

let currentSlide = 0;

let autoSlide;

// ==========================================
// Initialize
// ==========================================

showSlide(currentSlide);

startAutoSlide();

// ==========================================
// Show Slide
// ==========================================

function showSlide(index){

    testimonialCards.forEach(card=>{

        card.classList.remove("active");

    });

    dots.forEach(dot=>{

        dot.classList.remove("active");

    });

    testimonialCards[index].classList.add("active");

    dots[index].classList.add("active");

}

// ==========================================
// Next Slide
// ==========================================

function nextSlide(){

    currentSlide++;

    if(currentSlide >= testimonialCards.length){

        currentSlide = 0;

    }

    showSlide(currentSlide);

}

// ==========================================
// Previous Slide
// ==========================================

function previousSlide(){

    currentSlide--;

    if(currentSlide < 0){

        currentSlide =
            testimonialCards.length - 1;

    }

    showSlide(currentSlide);

}

// ==========================================
// Buttons
// ==========================================

nextButton.addEventListener("click",()=>{

    nextSlide();

    restartAutoSlide();

});

prevButton.addEventListener("click",()=>{

    previousSlide();

    restartAutoSlide();

});

// ==========================================
// Dots
// ==========================================

dots.forEach((dot,index)=>{

    dot.addEventListener("click",()=>{

        currentSlide = index;

        showSlide(currentSlide);

        restartAutoSlide();

    });

});

// ==========================================
// Auto Slide
// ==========================================

function startAutoSlide(){

    autoSlide = setInterval(()=>{

        nextSlide();

    },5000);

}

// ==========================================
// Restart Timer
// ==========================================

function restartAutoSlide(){

    clearInterval(autoSlide);

    startAutoSlide();

}

// ==========================================
// Pause On Hover
// ==========================================

slider.addEventListener("mouseenter",()=>{

    clearInterval(autoSlide);

});

slider.addEventListener("mouseleave",()=>{

    startAutoSlide();

});

// ==========================================
// Keyboard Navigation
// ==========================================

document.addEventListener("keydown",(e)=>{

    if(e.key==="ArrowRight"){

        nextSlide();

        restartAutoSlide();

    }

    if(e.key==="ArrowLeft"){

        previousSlide();

        restartAutoSlide();

    }

});

// ==========================================
// Touch Swipe (Mobile)
// ==========================================

let touchStart = 0;

let touchEnd = 0;

slider.addEventListener("touchstart",(e)=>{

    touchStart =
        e.changedTouches[0].screenX;

});

slider.addEventListener("touchend",(e)=>{

    touchEnd =
        e.changedTouches[0].screenX;

    handleSwipe();

});

function handleSwipe(){

    const distance =
        touchEnd - touchStart;

    if(distance > 60){

        previousSlide();

        restartAutoSlide();

    }

    if(distance < -60){

        nextSlide();

        restartAutoSlide();

    }

}

// ==========================================
// Accessibility
// ==========================================

dots.forEach(dot=>{

    dot.setAttribute("tabindex","0");

    dot.addEventListener("keydown",(e)=>{

        if(
            e.key==="Enter" ||
            e.key===" "
        ){

            e.preventDefault();

            dot.click();

        }

    });

});

// ==========================================
// Console
// ==========================================

console.log(
"%cTestimonials Slider Ready",
"color:#2ecc71;font-size:18px;font-weight:bold;"
);