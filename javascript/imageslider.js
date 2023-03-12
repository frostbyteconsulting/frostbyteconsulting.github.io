const images = document.querySelectorAll(".slider img");
const dots = document.querySelectorAll(".dot");
let currentImg = 0;

function showImage(index) {
  images[currentImg].classList.remove("active");
  images[index].classList.add("active");
  dots[currentImg].classList.remove("active");
  dots[index].classList.add("active");
  currentImg = index;
}

function nextImage() {
  let index = currentImg + 1;
  if (index >= images.length) {
    index = 0;
  }
  showImage(index);
}

let slideInterval = setInterval(nextImage, 5000);

for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", function() {
    showImage(i);
    clearInterval(slideInterval);
    slideInterval = setInterval(nextImage, 5000);
  });
}

showImage(0);
