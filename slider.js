const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");
const bottom = document.querySelector(".bottom");

let slideNumber = 1;
let length = images.length;

//bottom button
for (let i = 0; i < length; i++) {
  const div = document.createElement("div");
  div.className = "button";
  bottom.appendChild(div);
}

//color to first button
const buttons = document.querySelectorAll(".button");
buttons[0].style.backgroundColor = "white";

//remove button color on prev button
const resetBg = () => {
  buttons.forEach((button) => {
    button.style.backgroundColor = "transparent";
  });
};

//click button to slide
buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    resetBg();
    slider.style.transform = `translateX(-${index * 500}px)`;
    button.style.backgroundColor = "white";
  });
});

//right arrow
const nextSlide = () => {
  slider.style.transform = `translateX(-${slideNumber * 500}px)`;
  slideNumber++;
};

const getFirstSlide = () => {
  slider.style.transform = `translateX(0px)`;
  slideNumber = 1;
};

//left arrow
const getLastSlide = () => {
  slider.style.transform = `translateX(-${(length - 1) * 500}px)`;
  slideNumber = length;
};

const prevSlide = () => {
  slider.style.transform = `translateX(-${(slideNumber - 2) * 500}px)`;
  slideNumber--;
};

const changeColor = () => {
  resetBg();
  buttons[slideNumber - 1].style.backgroundColor = "white";
};

//right
right.addEventListener("click", () => {
  slideNumber < length ? nextSlide() : getFirstSlide();
  changeColor();
});
//left
left.addEventListener("click", () => {
  slideNumber > 1 ? prevSlide() : getLastSlide();
  changeColor();
});
