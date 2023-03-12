const images = document.querySelectorAll(".slider img");
const indicators = document.querySelectorAll(".slider-indicator");

let currentImg = 0;

function showImage(index) {
  images[currentImg].classList.remove("active");
  indicators[currentImg].classList.remove("active");
  images[index].classList.add("active");
  indicators[index].classList.add("active");
  currentImg = index;
}

function startSlider() {
  setInterval(() => {
    let index = currentImg + 1;
    if (index >= images.length) {
      index = 0;
    }
    showImage(index);
  }, 5000);
}

indicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    showImage(index);
  });
});

showImage(0);
startSlider();
