const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.main-nav');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

const links = navMenu.querySelectorAll('a');
links.forEach((link) =>
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
  })
);

const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal');
        obs.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.25,
  }
);

document.querySelectorAll('.section, .card, .ministry-card, .media-card, .timeline-item').forEach((el) => {
  observer.observe(el);
});
