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

const parentBlock = document.querySelector(".parent_block");
const childBlock = document.querySelector(".child_block");

let posX = 0;
const offsetWidth = parentBlock.offsetWidth - childBlock.offsetWidth;

const moveblock = () => {
  if (posX < offsetWidth) {
    posX++;
    childBlock.style.left = `${posX}px`;
    requestAnimationFrame(moveblock);
  }
};
moveblock();
