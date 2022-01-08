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
var page_down = document.querySelectorAll(".page-down");
var sliderImg = document.querySelectorAll('.slider-img')

for (let i = 0; i < page_down.length; i++) {
    page_down[i].addEventListener("mouseover", pageDown);
    page_down[i].addEventListener("mouseleave", pageUp);   
}

function pageDown() {
    for (let i = 0; i < sliderImg.length; i++) {
        sliderImg[i].classList.add("scroll-effect");
    }
}
function pageUp() {
    for (let i = 0; i < sliderImg.length; i++) {
        sliderImg[i].classList.remove("scroll-effect");
    }
}