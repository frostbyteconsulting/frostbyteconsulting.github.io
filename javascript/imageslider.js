const slides = document.querySelectorAll('.slides img');
const circles = document.querySelector('.circles');

let counter = 0;
let interval;

// create circles
for (let i = 0; i < slides.length; i++) {
  const circle = document.createElement('button');
  circle.addEventListener('click', () => {
    clearInterval(interval);
    counter = i;
    showSlide(counter);
    interval = setInterval(() => {
      counter++;
      if (counter === slides.length) {
        counter = 0;
      }
      showSlide(counter);
    }, 5000);
  });
  circles.appendChild(circle);
}

const circleButtons = document.querySelectorAll('.circles button');

function showSlide(index) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
    circleButtons[i].classList.remove('active');
  }
  slides[index].classList.add('active');
  circleButtons[index].classList.add('active');
}

showSlide(counter);
interval = setInterval(() => {
  counter++;
  if (counter === slides.length) {
    counter = 0;
  }
  showSlide(counter);
}, 5000);
