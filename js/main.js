/*=========================================
      CancerCare+ Main JavaScript
==========================================*/

// ================= Loader =================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 1200);

});

// ================= Sticky Navbar =================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.style.padding = "14px 35px";
        navbar.style.background = "rgba(255,255,255,.92)";
        navbar.style.boxShadow = "0 10px 25px rgba(0,0,0,.12)";

    } else {

        navbar.style.padding = "18px 40px";
        navbar.style.background = "rgba(255,255,255,.75)";
        navbar.style.boxShadow = "0 8px 30px rgba(0,0,0,.08)";

    }

});


// Load Saved Theme

if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark-mode");

    darkBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

}

// ================= Mobile Menu =================

const menuBtn = document.querySelector(".menu-toggle");

const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("show");

});

// ================= Smooth Scroll =================

document.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", function (e) {

        const target = this.getAttribute("href");

        if (target.startsWith("#")) {

            e.preventDefault();

            document.querySelector(target).scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ================= Scroll Progress =================

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    const scroll = document.documentElement.scrollTop;

    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const progress = (scroll / height) * 100;

    progressBar.style.width = progress + "%";

});

// ================= Back To Top =================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "flex";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ================= Hero Button =================

const learnBtn = document.querySelector(".primary-btn");

learnBtn.addEventListener("click", () => {

    alert("Welcome to CancerCare+! More sections will be added in the next part.");

});

// ================= Support Button =================

const supportBtn = document.querySelector(".support-btn");

supportBtn.addEventListener("click", () => {

    alert("Support Center will be available soon.");

});

// ================= Statistics Animation =================

const stats = document.querySelectorAll(".hero-stats h2");

stats.forEach(stat => {

    stat.addEventListener("mouseenter", () => {

        stat.style.transform = "scale(1.15)";
        stat.style.transition = ".3s";

    });

    stat.addEventListener("mouseleave", () => {

        stat.style.transform = "scale(1)";

    });

});

// ================= Hero Card Effect =================

const heroCard = document.querySelector(".hero-card");

heroCard.addEventListener("mousemove", (e) => {

    const rect = heroCard.getBoundingClientRect();

    const x = e.clientX - rect.left;

    const y = e.clientY - rect.top;

    heroCard.style.transform =
        `rotateX(${-(y - rect.height / 2) / 20}deg)
         rotateY(${(x - rect.width / 2) / 20}deg)`;

});

heroCard.addEventListener("mouseleave", () => {

    heroCard.style.transform = "rotateX(0deg) rotateY(0deg)";

});

// ================= Console Message =================

console.log("CancerCare+ Loaded Successfully");