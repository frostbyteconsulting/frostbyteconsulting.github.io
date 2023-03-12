const images = document.querySelectorAll(".slider img");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
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

showImage(0);
