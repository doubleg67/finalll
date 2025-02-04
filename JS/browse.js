const numberBox = document.querySelector(".number-box");
const inputBox = document.querySelector(".input-box");

numberBox.addEventListener("click", function (e) {
  if (e.target.classList.contains("numbered-btn")) {
    inputBox.classList.remove("hidden");
  }
});
