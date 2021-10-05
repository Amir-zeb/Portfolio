// menu js
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);
function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('open');
        nav.classList.add('open');
        showMenu = true;
    } else {
        menuBtn.classList.remove('open');
        nav.classList.remove('open');
        showMenu = false;
    }
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// image effect 
var page_down = document.querySelector(".page-down");
page_down.addEventListener("mouseover", pageDown);
function pageDown() {
    document.querySelector('.slider-img').classList.add("scroll-effect");
}
page_down.addEventListener("mouseleave", pageUp);
function pageUp() {
    document.querySelector('.slider-img').classList.remove("scroll-effect");
}