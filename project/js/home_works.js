// home work Part 1: Mail Checker

const gmailInput = document.querySelector("#gmail_input");
const gmailButton = document.querySelector("#gmail_button");
const gmailResult = document.querySelector("#gmail_result");

const regExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

gmailButton.onclick = () => {
  if (regExp.test(gmailInput.value)) {
    gmailResult.innerHTML = "OK";
    gmailButton.style.color = "green";
  } else {
    gmailResult.innerHTML = "Not OK";
    gmailButton.style.color = "red";
  }
};

// home work Part 2: MoveBlock

// const parentBlock = document.querySelector(".parent_block");
// const childBlock = document.querySelector(".child_block");

// let posX = 0;
// const offsetWidth = parentBlock.offsetWidth - childBlock.offsetWidth;

// const moveblock = () => {
//   if (posX < offsetWidth) {
//     posX++;
//     childBlock.style.left = `${posX}px`;
//     requestAnimationFrame(moveblock);
//   }
// };
// moveblock();

//home work Part 1: MoveBlock
const parentBlock = document.querySelector(".parent_block");
const childBlock = document.querySelector(".child_block");

const offsetWidth = parentBlock.offsetWidth - childBlock.offsetWidth;
const offsetHeight = parentBlock.offsetHeight - childBlock.offsetHeight;

let posX = 0;
let posY = 0;
let direction = "right";

const moveblock = () => {
  if (direction === "right" && posX < offsetWidth) {
    posX++;
    childBlock.style.left = `${posX}px`;
  } else if (direction === "right" && posX >= offsetWidth) {
    direction = "down";
  }

  if (direction === "down" && posY < offsetHeight) {
    posY++;
    childBlock.style.top = `${posY}px`;
  } else if (direction === "down" && posY >= offsetHeight) {
    direction = "left";
  }

  if (direction === "left" && posX > 0) {
    posX--;
    childBlock.style.left = `${posX}px`;
  } else if (direction === "left" && posX <= 0) {
    direction = "up";
  }

  if (direction === "up" && posY > 0) {
    posY--;
    childBlock.style.top = `${posY}px`;
  } else if (direction === "up" && posY <= 0) {
    direction = "right";
  }

  requestAnimationFrame(moveblock);
};

moveblock();

// home work Part 2: stopwatch

const timerDisplay = document.querySelector("#seconds");
const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");
const resetButton = document.querySelector("#reset");

let seconds = 0;
let timerInterval;
updateDisplay = () => {
  timerDisplay.innerHTML = seconds;
};
startButton.onclick = () => {
  if (!timerInterval) {
    timerInterval = setInterval(() => {
      seconds++;
      updateDisplay();
    }, 1000);
  }
};

stopButton.onclick = () => {
  clearInterval(timerInterval);
  timerInterval = null;
};
resetButton.onclick = () => {
  clearInterval(timerInterval);
  timerInterval = null;
  seconds = 0;
  updateDisplay();
};
updateDisplay();

//characters
const personBlock = document.querySelector(".characters-list");
const userPhoto = "";
getPersons = async () => {
  try {
    const response = await fetch("../data/persons.json");
    const data = await response.json();
    Object.values(data).forEach((person) => {
      const personCard = document.createElement("div");
      personCard.setAttribute("className", "character-card");
      personCard.innerHTML = `
      <div class="character-photo"><img  src="${
        person.photo || userPhoto
      }" alt="${person.name}"></div>
      
      <div class="character-decription">
      <h2>${person.name}</h2>
      <p>Age: ${person.age}</p>
      <p>Faculty: ${person.faculty}</p>
      </div>
      `;
      personBlock.appendChild(personCard);
    });
  } catch (error) {
    console.log(error);
  }
};

getPersons();
//any.json
getAnyChars = async () => {
  try {
    const response = await fetch("../data/any.json");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
getAnyChars();
