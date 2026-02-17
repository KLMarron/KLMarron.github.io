
const items = document.querySelectorAll('.portfolio__item');

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    },
    { threshold: 0.2 }
  );

  items.forEach(item => observer.observe(item));


document.addEventListener("DOMContentLoaded", () => {
  const island = document.querySelector(".island-header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      island.style.padding = "10px 20px";
      island.style.opacity = "0.9";
    } else {
      island.style.padding = "14px 30px";
      island.style.opacity = "1";
    }
  });
});
const burger = document.querySelector('.burger');
  const nav = document.querySelector('.island-nav');

  burger.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
