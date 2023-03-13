let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slider-img");
  let circles = document.getElementsByClassName("slider-circle");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
    circles[i].classList.remove("active");
  }
  slides[slideIndex - 1].style.display = "block";
  circles[slideIndex - 1].classList.add("active");
}

setInterval(() => {
  plusSlides(1);
}, 5000);
