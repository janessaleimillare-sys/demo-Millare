const themeButton = document.querySelector("#theme-button");

let isNight = false;

themeButton.addEventListener("click", () => {
  isNight = !isNight;
  document.body.classList.toggle("night", isNight);
});
