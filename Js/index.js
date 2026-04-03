const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  mobileMenu.setAttribute('aria-hidden', !isOpen);
  hamburger.setAttribute('aria-expanded', isOpen);
});

document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    mobileMenu.setAttribute('aria-hidden', true);
    hamburger.setAttribute('aria-expanded', false);
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.menu-card, .review-card, .stat, .value, .about-content, .about-imgs')
  .forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });