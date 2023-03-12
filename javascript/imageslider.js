const images = document.querySelectorAll(".slider img");
const indicators = document.querySelectorAll(".slider-indicator");
let currentImg = 0;

function showImage(index) {
  images[currentImg].classList.remove("active");
  images[index].classList.add("active");
  indicators[currentImg].classList.remove("active");
  indicators[index].classList.add("active");
  currentImg = index;
}

function nextImage() {
  let index = currentImg + 1;
  if (index >= images.length) {
    index = 0;
  }
  showImage(index);
}

let intervalId = setInterval(nextImage, 5000);

for (let i = 0; i < indicators.length; i++) {
  indicators[i].addEventListener("click", () => {
    clearInterval(intervalId);
    showImage(i);
    intervalId = setInterval(nextImage, 5000);
  });
}

showImage(0);
