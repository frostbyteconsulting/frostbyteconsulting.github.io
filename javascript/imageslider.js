const images = document.querySelectorAll(".imageslider-images img");
const indicators = document.querySelectorAll(".imageslider-indicators span");

let currentImg = 0;

function showImage(index) {
  images[currentImg].classList.remove("active");
  images[index].classList.add("active");
  currentImg = index;
}

function nextImage() {
  let index = currentImg + 1;
  if (index >= images.length) {
    index = 0;
  }
  showImage(index);
}

function updateIndicators() {
  indicators.forEach((indicator, index) => {
    if (index === currentImg) {
      indicator.classList.add("active");
    } else {
      indicator.classList.remove("active");
    }
  });
}

prevBtn.addEventListener("click", () => {
  let index = currentImg - 1;
  if (index < 0) {
    index = images.length - 1;
  }
  showImage(index);
});

nextBtn.addEventListener("click", () => {
  nextImage();
});

setInterval(() => {
  nextImage();
}, 5000);

updateIndicators();
showImage(0);
