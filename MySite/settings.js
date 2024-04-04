function scrollToPrev() {
    const sections = document.querySelectorAll('.scrollable-section');
    const currentIndex = Array.from(sections).findIndex(section => section.scrollLeft > 0);
    if (currentIndex > 0) {
      sections[currentIndex - 1].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }
  
  function scrollToNext() {
    const sections = document.querySelectorAll('.scrollable-section');
    const currentIndex = Array.from(sections).findIndex(section => section.scrollLeft > 0);
    if (currentIndex < sections.length - 1) {
      sections[currentIndex + 1].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }
  