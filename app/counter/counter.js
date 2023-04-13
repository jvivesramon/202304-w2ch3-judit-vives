let count = 0;

const counterDisplay = document.querySelector("h1");

const buttonForIncrement = document.querySelector(".increment");
const buttonForDecrement = document.querySelector(".decrement");
const buttonForRestart = document.querySelector(".restart");
const messageLimitTNumbers = document.querySelector("span");

const getPlusOne = () => 1;

buttonForIncrement.addEventListener("click", () => {
  messageLimitTNumbers.style.display = "none";

  if (counterDisplay.textContent > 9) {
    messageLimitTNumbers.innerHTML = `El contador no puede pasar de 10.`;
    messageLimitTNumbers.style.display = "";
    return;
  }

  count += getPlusOne();
  counterDisplay.textContent = count;
});

buttonForDecrement.addEventListener("click", () => {
  messageLimitTNumbers.style.display = "none";

  if (count < 1) {
    messageLimitTNumbers.innerHTML = `El contador no puede bajar de 0.`;
    messageLimitTNumbers.style.display = "";
    return;
  }

  count -= getPlusOne();
  counterDisplay.textContent = count;
});

buttonForRestart.addEventListener("click", () => {
  messageLimitTNumbers.style.display = "none";

  count = 0;
  counterDisplay.textContent = count;
});
