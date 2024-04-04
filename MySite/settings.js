// script.js

let currentSectionIndex = 0;
const sections = document.querySelectorAll('.scrollable-section');

function showSection(index) {
  sections.forEach((section, i) => {
    if (i === index) {
      section.style.display = 'block';
    } else {
      section.style.display = 'none';
    }
  });
}

function scrollToNext() {
  currentSectionIndex = (currentSectionIndex + 1) % sections.length;
  showSection(currentSectionIndex);
}

function scrollToPrev() {
  currentSectionIndex = (currentSectionIndex - 1 + sections.length) % sections.length;
  showSection(currentSectionIndex);
}

// Show the first section initially
showSection(currentSectionIndex);


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
