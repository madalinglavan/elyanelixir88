/*==================================================

    ELYAN ELIXIR
    script.js

==================================================*/



/*==================================================

    SELECTORS

==================================================*/

const loader = document.getElementById("loader");

const header = document.querySelector("header");

const burger = document.querySelector(".burger");

const navLinks = document.querySelector(".nav-links");

const navigationLinks = document.querySelectorAll(".nav-links a");



/*==================================================

    WINDOW LOAD

==================================================*/

window.addEventListener("load", () => {

    setTimeout(() => {

        loader.classList.add("hide");

    }, 1200);

});



/*==================================================

    HEADER SCROLL

==================================================*/

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.classList.add("active");

    }

    else {

        header.classList.remove("active");

    }

});



/*==================================================

    BURGER MENU

==================================================*/

burger.addEventListener("click", () => {

    burger.classList.toggle("active");

    navLinks.classList.toggle("active");

    document.body.classList.toggle("menu-open");

});



/*==================================================

    CLOSE MENU AFTER CLICK

==================================================*/

navigationLinks.forEach(link => {

    link.addEventListener("click", () => {

        burger.classList.remove("active");

        navLinks.classList.remove("active");

        document.body.classList.remove("menu-open");

    });

});



/*==================================================

    SMOOTH SCROLL

==================================================*/

navigationLinks.forEach(link => {

    link.addEventListener("click", function (e) {

        const target = this.getAttribute("href");

        if (target.startsWith("#")) {

            e.preventDefault();

            const section = document.querySelector(target);

            if (section) {

                window.scrollTo({

                    top: section.offsetTop - 80,

                    behavior: "smooth"

                });

            }

        }

    });

});



/*==================================================

    ACTIVE MENU

==================================================*/

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navigationLinks.forEach(link => {

        link.classList.remove("current");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("current");

        }

    });

});



/*==================================================

    SCROLL INDICATOR

==================================================*/

const scrollIndicator = document.querySelector(".scroll-indicator");

if (scrollIndicator) {

    scrollIndicator.addEventListener("click", () => {

        const nextSection = document.querySelector("#massage");

        if (nextSection) {

            nextSection.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

}



/*==================================================

    ESC KEY CLOSE MENU

==================================================*/

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        burger.classList.remove("active");

        navLinks.classList.remove("active");

        document.body.classList.remove("menu-open");

    }

});



/*==================================================

    CLICK OUTSIDE MENU

==================================================*/

document.addEventListener("click", (e) => {

    const insideMenu = navLinks.contains(e.target);

    const insideBurger = burger.contains(e.target);

    if (!insideMenu && !insideBurger) {

        burger.classList.remove("active");

        navLinks.classList.remove("active");

        document.body.classList.remove("menu-open");

    }

});



/*==================================================

    RESIZE WINDOW

==================================================*/

window.addEventListener("resize", () => {

    if (window.innerWidth > 992) {

        burger.classList.remove("active");

        navLinks.classList.remove("active");

        document.body.classList.remove("menu-open");

    }

});



/*==================================================

    PREVENT DOUBLE CLICK

==================================================*/

let menuLocked = false;

burger.addEventListener("click", () => {

    if (menuLocked) return;

    menuLocked = true;

    setTimeout(() => {

        menuLocked = false;

    }, 300);

});



/*==================================================

    END PART 1

==================================================*/

/*==================================================

    HERO SLIDER

==================================================*/

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide(index) {

    slides.forEach((slide) => {

        slide.classList.remove("active");

    });

    slides[index].classList.add("active");

}

function nextSlide() {

    currentSlide++;

    if (currentSlide >= slides.length) {

        currentSlide = 0;

    }

    showSlide(currentSlide);

}

if (slides.length > 0) {

    setInterval(nextSlide, 6000);

}



/*==================================================

    HERO PARALLAX

==================================================*/

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

    if (!hero) return;

    let offset = window.pageYOffset;

    hero.style.backgroundPositionY = offset * 0.4 + "px";

});



/*==================================================

    REVEAL ANIMATION

==================================================*/

const revealElements = document.querySelectorAll(

    ".section, .section-title, .services-grid, .gallery-grid, .contact-wrapper"

);

const revealObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {

        threshold: 0.15

    }

);

revealElements.forEach((element) => {

    revealObserver.observe(element);

});



/*==================================================

    SCROLL TO TOP BUTTON

==================================================*/

const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {

    if (!backToTop) return;

    if (window.scrollY > 500) {

        backToTop.classList.add("active");

    }

    else {

        backToTop.classList.remove("active");

    }

});

if (backToTop) {

    backToTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}



/*==================================================

    HERO BUTTON HOVER EFFECT

==================================================*/

const heroButtons = document.querySelectorAll(

    ".btn-primary, .btn-secondary"

);

heroButtons.forEach((button) => {

    button.addEventListener("mouseenter", () => {

        button.classList.add("hover");

    });

    button.addEventListener("mouseleave", () => {

        button.classList.remove("hover");

    });

});



/*==================================================

    SECTION TITLE ANIMATION

==================================================*/

const titles = document.querySelectorAll(".section-title h2");

titles.forEach((title) => {

    revealObserver.observe(title);

});



/*==================================================

    LAZY LOAD IMAGES

==================================================*/

const lazyImages = document.querySelectorAll("img[data-src]");

const imageObserver = new IntersectionObserver(

    (entries, observer) => {

        entries.forEach((entry) => {

            if (!entry.isIntersecting) return;

            const img = entry.target;

            img.src = img.dataset.src;

            img.removeAttribute("data-src");

            observer.unobserve(img);

        });

    },

    {

        threshold: 0.1

    }

);

lazyImages.forEach((img) => {

    imageObserver.observe(img);

});



/*==================================================

    PAGE FADE IN

==================================================*/

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});



/*==================================================

    CONSOLE MESSAGE

==================================================*/

console.log(

    "%cElyan Elixir",

    "color:#0F6A4D;font-size:22px;font-weight:bold;"

);

console.log(

    "%cWebsite realizat cu ❤️",

    "color:#D4AF37;font-size:14px;"

);



/*==================================================

    END PART 2

==================================================*/

/*==================================================

BURGER MENU

==================================================*/

if (burger) {

    burger.addEventListener("click", () => {

        burger.classList.toggle("active");

        navLinks.classList.toggle("active");

        document.body.classList.toggle("menu-open");

    });

}

navigationLinks.forEach(link=>{

    link.addEventListener("click",()=>{

        burger.classList.remove("active");

        navLinks.classList.remove("active");

        document.body.classList.remove("menu-open");

    });

});

const overlay=document.querySelector(".mobile-overlay");

if(burger){

    burger.addEventListener("click",()=>{

        overlay.classList.toggle("active");

    });

}

overlay.addEventListener("click",()=>{

    burger.classList.remove("active");

    navLinks.classList.remove("active");

    overlay.classList.remove("active");

    document.body.classList.remove("menu-open");

});

/*==================================================

FULLSCREEN MENU

==================================================*/

const mobileMenu=document.querySelector(".mobile-menu");

if(burger){

burger.addEventListener("click",()=>{

burger.classList.toggle("active");

mobileMenu.classList.toggle("active");

document.body.classList.toggle("menu-open");

});

}

document.querySelectorAll(".mobile-menu a").forEach(link=>{

link.addEventListener("click",()=>{

burger.classList.remove("active");

mobileMenu.classList.remove("active");

document.body.classList.remove("menu-open");

});

});

document.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

burger.classList.remove("active");

mobileMenu.classList.remove("active");

document.body.classList.remove("menu-open");

}

});