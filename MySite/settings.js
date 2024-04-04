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
