// Tab navigation functionality
const tabs = document.querySelectorAll('nav button');
const sections = document.querySelectorAll('section[role="tabpanel"]');

function changeTab(selectedIndex) {
  tabs.forEach((tab, idx) => {
    const selected = idx === selectedIndex;
    tab.classList.toggle('active', selected);
    tab.setAttribute('aria-selected', selected);
    tab.tabIndex = selected ? 0 : -1;
    sections[idx].classList.toggle('active', selected);
  });
}

tabs.forEach((tab, idx) => {
  tab.addEventListener('click', () => changeTab(idx));
  tab.addEventListener('keydown', e => {
    let newIndex = idx;
    if (e.key === 'ArrowRight') {
      newIndex = (idx + 1) % tabs.length;
      e.preventDefault();
    } else if (e.key === 'ArrowLeft') {
      newIndex = (idx - 1 + tabs.length) % tabs.length;
      e.preventDefault();
    }
    if (newIndex !== idx) {
      tabs[newIndex].focus();
      changeTab(newIndex);
    }
  });
});

// Contact form submission with basic validation and success message
const form = document.getElementById('contactForm');

form.addEventListener('submit', e => {
  e.preventDefault();
  // Simple validation
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  alert('Thank you for your message! I will get back to you soon.');
  form.reset();
});
