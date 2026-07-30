/*=========================================
    ACTIVE NAVIGATION
=========================================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            current = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


/*=========================================
    SMOOTH SCROLL
=========================================*/

navLinks.forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        window.scrollTo({

            top: target.offsetTop - 80,
            behavior: "smooth"

        });

    });

});


/*=========================================
    SCROLL REVEAL ANIMATION
=========================================*/

const revealElements = document.querySelectorAll(

".about-box, .education-card, .card, .certificate-card, .project-card, .contact-box"

);

function revealOnScroll(){

    const windowHeight = window.innerHeight;

    revealElements.forEach((element)=>{

        const revealTop = element.getBoundingClientRect().top;

        if(revealTop < windowHeight - 100){

            element.style.opacity="1";
            element.style.transform="translateY(0)";

        }

    });

}

revealElements.forEach((element)=>{

    element.style.opacity="0";
    element.style.transform="translateY(50px)";
    element.style.transition="all .8s ease";

});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


/*=========================================
    TYPING EFFECT
=========================================*/

const typingText = document.querySelector(".home-content h2");

const words = [

"Python Developer",

"Machine Learning Enthusiast",

"C Programmer",

"Problem Solver"

];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

function typingEffect(){

    const currentWord = words[wordIndex];

    if(!deleting){

        typingText.textContent =
        currentWord.substring(0, letterIndex);

        letterIndex++;

        if(letterIndex > currentWord.length){

            deleting = true;

            setTimeout(typingEffect,1500);

            return;

        }

    }else{

        typingText.textContent =
        currentWord.substring(0, letterIndex);

        letterIndex--;

        if(letterIndex < 0){

            deleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;

            }

        }

    }

    setTimeout(typingEffect,deleting ? 60 : 120);

}

typingEffect();


/*=========================================
    HEADER SHADOW
=========================================*/

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 50){

        header.style.boxShadow="0 5px 20px rgba(0,0,0,.4)";

    }else{

        header.style.boxShadow="none";

    }

});


/*=========================================
    CURRENT YEAR
=========================================*/

const footer = document.querySelector("footer p");

if(footer){

    footer.innerHTML =
    `© ${new Date().getFullYear()} K. Pradyothan | Designed & Developed by K. Pradyothan`;

}