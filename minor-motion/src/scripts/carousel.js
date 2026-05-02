const track = document.querySelector(".carousel-track");
const slides = [...document.querySelectorAll(".slide")];
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  track.scrollTo({
    left: slides[currentIndex].offsetLeft,
    behavior: "smooth"
  });
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  track.scrollTo({
    left: slides[currentIndex].offsetLeft,
    behavior: "smooth"
  });
});

setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  track.scrollTo({
    left: slides[currentIndex].offsetLeft,
    behavior: "smooth"
  });
}, 6000);
