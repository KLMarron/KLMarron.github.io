document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault(); 

  emailjs.sendForm('service_tu3gaq9', 'template_rao9l6y', this)
    .then(function() {
      alert("Message sent successfully!");
      document.getElementById('contactForm').reset(); 
    }, function(error) {
      alert("Oops, something went wrong: " + JSON.stringify(error));
    });
});


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

window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  const logo = preloader.querySelector(".preloader-logo");
  const klm = preloader.querySelector(".klm-text");
  const particles = preloader.querySelectorAll(".particle");

  
  logo.style.animationPlayState = "running";
  klm.style.animationPlayState = "running";
  particles.forEach(p => p.style.animationPlayState = "running");

  
  const totalIntroDuration = 5000; 

  setTimeout(() => {
    preloader.style.transition = "transform 1s ease, opacity 1s ease";
    preloader.style.transform = "translateY(-100%)";
    preloader.style.opacity = "0";

    setTimeout(() => {
      preloader.style.display = "none";
    }, 1000);

  }, totalIntroDuration);
});
 const burger = document.querySelector('.burger');
  const nav = document.querySelector('.island-nav');

  burger.addEventListener('click', () => {
    nav.classList.toggle('active');
  });

const images = document.querySelectorAll(".carousel-img");
const dots = document.querySelectorAll(".dot");
let index = 0;

function showSlide(i) {
  images.forEach(img => img.classList.remove("active"));
  dots.forEach(dot => dot.classList.remove("active"));

  images[i].classList.add("active");
  dots[i].classList.add("active");
}


setInterval(() => {
  index = (index + 1) % images.length;
  showSlide(index);
}, 5000);


dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    index = i;
    showSlide(i);
  });
});


