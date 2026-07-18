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
const mobileMenu = document.querySelector(".mobile-menu");
const overlay = document.querySelector(".mobile-overlay");
const navigationLinks = document.querySelectorAll(".nav-links a, .mobile-menu a");
const sections = document.querySelectorAll("section");
/*==================================================

    WINDOW LOAD

==================================================*/

window.addEventListener("load", () => {

    setTimeout(() => {

        loader.classList.add("hide");

    }, 1200);

});




function handleScroll() {

    const scrollY = window.scrollY;

    if (scrollY > 60) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (scrollY >= sectionTop) {
            current = section.id;
        }

    });

    navigationLinks.forEach(link => {

        link.classList.remove("current");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("current");
        }

    });

    if (backToTop) {
        backToTop.classList.toggle("active", scrollY > 500);
    }

}
window.addEventListener("scroll", handleScroll);


navigationLinks.forEach(link => {

    link.addEventListener("click", function (e) {

        const target = this.getAttribute("href");

        if (target.startsWith("#")) {

            e.preventDefault();

            burger.classList.remove("active");
            mobileMenu.classList.remove("active");
            overlay.classList.remove("active");
            document.body.classList.remove("menu-open");
            overlay.classList.remove("active");

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

    CLICK OUTSIDE MENU

==================================================*/

document.addEventListener("click", (e) => {

    const insideMenu = mobileMenu.contains(e.target);

    const insideBurger = burger.contains(e.target);

    if (!insideMenu && !insideBurger) {

        burger.classList.remove("active");

        mobileMenu.classList.remove("active");

        document.body.classList.remove("menu-open");

        overlay.classList.remove("active");

    }

});



/*==================================================

    RESIZE WINDOW

==================================================*/

window.addEventListener("resize", () => {

    if (window.innerWidth > 992) {

        burger.classList.remove("active");

        mobileMenu.classList.remove("active");

        document.body.classList.remove("menu-open");
        overlay.classList.remove("active");

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

    setInterval(nextSlide, 10000);

}





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






overlay.addEventListener("click",()=>{

    burger.classList.remove("active");

    mobileMenu.classList.remove("active");

    overlay.classList.remove("active");

    document.body.classList.remove("menu-open");

});

/*==================================================

FULLSCREEN MENU

==================================================*/



if (burger) {

    burger.addEventListener("click", () => {

        burger.classList.toggle("active");
        mobileMenu.classList.toggle("active");
        overlay.classList.toggle("active");
        document.body.classList.toggle("menu-open");
        console.log("BURGER");

    });

}


document.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

burger.classList.remove("active");

mobileMenu.classList.remove("active");

document.body.classList.remove("menu-open");

}

});

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");
            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0,
    rootMargin: "0px 0px -100px 0px"
});

reveals.forEach(el => observer.observe(el));