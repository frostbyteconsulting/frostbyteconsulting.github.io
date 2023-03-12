const images = document.querySelectorAll(".slider img");
const indicatorsContainer = document.querySelector(".indicators");
let currentImg = 0;

function showImage(index) {
  images[currentImg].classList.remove("active");
  images[index].classList.add("active");
  currentImg = index;
}

function createIndicators() {
  for (let i = 0; i < images.length; i++) {
    const indicator = document.createElement("button");
    indicator.addEventListener("click", () => {
      showImage(i);
      resetTimer();
    });
    indicatorsContainer.appendChild(indicator);
  }
}

function setActiveIndicator(index) {
  const indicators = document.querySelectorAll(".indicators button");
  for (let i = 0; i < indicators.length; i++) {
    indicators[i].classList.remove("active");
  }
  indicators[index].classList.add("active");
}

createIndicators();
setActiveIndicator(0);
showImage(0);

let timer = setInterval(() => {
  let index = currentImg + 1;
  if (index >= images.length) {
    index = 0;
  }
  showImage(index);
  setActiveIndicator(index);
}, 5000);

function resetTimer() {
  clearInterval(timer);
  timer = setInterval(() => {
    let index = currentImg + 1;
    if (index >= images.length) {
      index = 0;
    }
    showImage(index);
    setActiveIndicator(index);
  }, 5000);
}
