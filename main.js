// Setting Game Name
let gameName = "Guess The Word";
document.title = `${gameName} | Mohammed Qashqesh`;
document.querySelector("h1").textContent = gameName;
document.querySelector(
  "footer"
).textContent = `${gameName} Game Created By Mohammed Qashqesh`;

// Setting Game Options
let numberOfInputs = 6;
let numberOfTries = 5;
let currentTry = 1;

// Menage Words
let words = [
  "banana",
  "rocket",
  "friend",
  "butter",
  "castle",
  "rabbit",
  "planet",
  "silver",
  "monkey",
  "forest",
  "cheese",
  "guitar",
  "candle",
  "orange",
  "school",
  "window",
  "circle",
  "bottle",
  "number",
  "bridge",
];
let randomWord = words[Math.floor(Math.random() * words.length)].toUpperCase();
console.log(randomWord);
let messageArea = document.querySelector(".message");

function generateInputs() {
  let inputsContainer = document.querySelector(".inputs");
  for (let i = 1; i <= numberOfTries; i++) {
    let tryDiv = document.createElement("div");
    tryDiv.classList.add(`try-${i}`);
    tryDiv.innerHTML = `<span>Try ${i}</span>`;

    if (i !== 1) tryDiv.classList.add("disabled-inputs");

    for (let j = 1; j <= numberOfInputs; j++) {
      let input = document.createElement("input");
      input.type = "text";
      input.setAttribute("maxlength", 1);
      input.id = `try-${i}-input-${j}`;
      tryDiv.appendChild(input);
    }

    inputsContainer.appendChild(tryDiv);
  }

  inputsContainer.children[0].children[1].focus();

  let inputInDisabledDiv = document.querySelectorAll(".disabled-inputs input");
  inputInDisabledDiv.forEach((input) => {
    input.disabled = true;
  });

  let inputs = document.querySelectorAll("input");

  inputs.forEach((input, index) => {
    input.addEventListener("input", function () {
      this.value = this.value.toUpperCase();
      let nextInput = inputs[index + 1];
      if (nextInput) nextInput.focus();
    });

    input.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight") {
        let nextInput = inputs[index + 1];
        if (nextInput) nextInput.focus();
      }
      if (e.key === "ArrowLeft") {
        let previousInput = inputs[index - 1];
        if (previousInput) previousInput.focus();
      }
    });
  });
}
generateInputs();

let checkBtn = document.getElementById("check-btn");
checkBtn.addEventListener("click", handleWord);

function handleWord() {
  let successGuess = true;
  for (let i = 1; i <= numberOfInputs; i++) {
    let inputField = document.getElementById(`try-${currentTry}-input-${i}`);
    if (inputField.value === randomWord[i - 1]) {
      inputField.classList.add("in-place");
    } else if (
      randomWord.includes(inputField.value) &&
      inputField.value !== ""
    ) {
      inputField.classList.add("not-in-place");
      successGuess = false;
    } else {
      inputField.classList.add("wrong");
      successGuess = false;
    }
  }
  if (successGuess) {
    document.querySelectorAll(".inputs > div").forEach((div) => {
      div.classList.add("disabled-inputs");
    });
    messageArea.innerHTML = `<p>You Win, The Word Is <span>${randomWord}</span></p>`;
    checkBtn.disabled = true;
  } else {
    document
      .querySelector(`.inputs .try-${currentTry}`)
      .classList.add("disabled-inputs");
    document
      .querySelectorAll(`.inputs > .try-${currentTry} input`)
      .forEach((input) => (input.disabled = true));

    currentTry++;

    let nextDiv = document.querySelector(`.inputs > .try-${currentTry}`);
    if (nextDiv) {
      nextDiv.classList.remove("disabled-inputs");
      document
        .querySelectorAll(`.inputs > .try-${currentTry} input`)
        .forEach((input) => (input.disabled = false));
      nextDiv.children[1].focus();
    } else {
      messageArea.innerHTML = `<p>You Lose, The Word Is <span>${randomWord}</span></p>`;
      checkBtn.disabled = true;
    }
  }
}
