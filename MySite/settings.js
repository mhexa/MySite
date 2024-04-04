
  let currentSectionIndex = 0;
  const sections = document.querySelectorAll('.scrollable-section');
  
  function scrollToNext() {
    if (currentSectionIndex < sections.length - 1) {
      currentSectionIndex++;
      sections[currentSectionIndex].scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  function scrollToPrev() {
    if (currentSectionIndex > 0) {
      currentSectionIndex--;
      sections[currentSectionIndex].scrollIntoView({ behavior: 'smooth' });
    }
  }
  