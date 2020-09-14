let userInput,
  computerInput,
  choices = ["paper", "stone", "scissor"],
  userPoints = 0,
  computerPoints = 0;

for (let i = 0; i < document.querySelectorAll(" img").length; i++) {
  document.querySelectorAll("img")[i].addEventListener("click", doSomething);
}

function doSomething() {
  userInput = this.id;
  computerInput = choices[Math.floor(Math.random() * 3)];
  if (userInput !== computerInput) {
    if (userInput === "paper") {
      if (computerInput === "stone") {
        userPoints++;
        document.querySelector("h2").textContent = "YOU WON !!";
      } else {
        computerPoints++;
        document.querySelector("h2").textContent = "YOU LOST !!";
      }
    } else if (userInput === "stone") {
      if (computerInput === "paper") {
        computerPoints++;
        document.querySelector("h2").textContent = "YOU LOST !!";
      } else {
        userPoints++;
        document.querySelector("h2").textContent = "YOU WON !!";
      }
    } else if (userInput === "scissor") {
      if (computerInput === "paper") {
        userPoints++;
        document.querySelector("h2").textContent = "YOU WON !!";
      } else {
        computerPoints++;
        document.querySelector("h2").textContent = "YOU WON !!";
      }
    }
    document.querySelector("#userScore").textContent = userPoints;
    document.querySelector("#computerScore").textContent = computerPoints;
  } else {
    document.querySelector("h2").textContent = "IT WAS A DRAW MATCH !!";
  }
  document.querySelector(".resultContaineer").style.display = "flex";
  document.querySelector(".userBoard").textContent = userInput;
  document.querySelector(".computerBoard").textContent = computerInput;
}
