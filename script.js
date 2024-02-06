const count = document.querySelector("#count");
const increaseBtn = document.querySelector("#Increase");
const resetBtn = document.querySelector("#Reset");
const decreaseBtn = document.querySelector("#Decrease");

let counter = 0;
increaseBtn.addEventListener("click", () => {
  counter++;
  count.innerHTML = counter < 10 ? "0" + counter : counter;
});

resetBtn.addEventListener("click", () => {
  counter = "00";
  count.innerHTML = counter;
});

decreaseBtn.addEventListener("click", () => {
  counter--;
  if (counter < 0) {
    alert("Please Increase the number");
    counter = 0;
  }
  count.innerHTML = counter < 10 ? "0" + counter : counter;
});
