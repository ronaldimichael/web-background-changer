// Button to change to the chosen color
const chosenColor = document.querySelector(".chosen-color");
chosenColor.addEventListener("mousedown", function () {
  document.body.classList.toggle("btn-chosen-color");
});

// Button to change to a random color
const randomColor = document.querySelector(".random-color");
randomColor.addEventListener("mousedown", function () {
  const red = Math.round(Math.random() * 255 + 1);
  const green = Math.round(Math.random() * 255 + 1);
  const blue = Math.round(Math.random() * 255 + 1);
  document.body.style.backgroundColor =
    "rgb(" + red + "," + green + "," + blue + ")";
});

// Save slider variables
const sliderRed = document.querySelector("input[name=sliderRed]");
const sliderGreen = document.querySelector("input[name=sliderGreen]");
const sliderBlue = document.querySelector("input[name=sliderBlue]");

// Red slider
sliderRed.addEventListener("input", function () {
  const red = sliderRed.value;
  const green = sliderGreen.value;
  const blue = sliderBlue.value;
  document.body.style.backgroundColor =
    "rgb(" + red + ", " + green + ", " + blue + ")";
});

// Green slider
sliderGreen.addEventListener("input", function () {
  const red = sliderRed.value;
  const green = sliderGreen.value;
  const blue = sliderBlue.value;
  document.body.style.backgroundColor =
    "rgb(" + red + ", " + green + ", " + blue + ")";
});

// Blue slider
sliderBlue.addEventListener("input", function () {
  const red = sliderRed.value;
  const green = sliderGreen.value;
  const blue = sliderBlue.value;
  document.body.style.backgroundColor =
    "rgb(" + red + ", " + green + ", " + blue + ")";
});

// This is a feature where anywhere the mouse going the background color will change according to X Y position
// document.body.addEventListener("mousemove", function (event) {
//   // Create variable using Math.round to get integer for clientX: window width scaled to 255
//   const xPosition = Math.round((event.clientX / window.innerWidth) * 255);

//   // Create variable using Math.round to get integer for clientY: window height scaled to 255
//   const yPosition = Math.round((event.clientY / window.innerHeight) * 255);
//   document.body.style.backgroundColor =
//     "rgb(" + xPosition + "," + yPosition + ",0";
// });
