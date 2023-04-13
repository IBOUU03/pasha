let counter = 0;
const back = document.querySelector("#back");
const next = document.querySelector("#next");
const slider = document.querySelector("#slider");
const sliderContainer = document.querySelector("#carusel-id");
let max = document.querySelectorAll(".slide-item").length - 1;

function sliderFunc() {
  if (counter < max) {
    counter++;
    slider.style.left = "-" + 100 * counter + "vw";
  } else {
    counter = 0;
    slider.style.left = "-" + 100 * counter + "vw";
  }
}
let timer = setInterval(sliderFunc, 2000);
sliderContainer.addEventListener("mouseout", function () {
  timer = setInterval(sliderFunc, 2000);
});
sliderContainer.addEventListener("mouseover", function () {
  clearInterval(timer);
});
next.addEventListener("click", sliderFunc);
back.addEventListener("click", function () {
  if (counter >= 0) {
    counter--;
    slider.style.left = "-" + 100 * counter + "vw";
  }
});