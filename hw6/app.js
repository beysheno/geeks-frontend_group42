let $codebox = document.querySelector(".code-box");
let $refreshBtn = document.querySelector(".refresh-btn");

function createDigits(value) {
  let div = document.createElement("div");
  div.className = "digit";
  div.textContent = value;
  return div;
}

function renderArray(data, container) {
  container.innerHTML = ""; 
  for (let item of data) {
    let $digit = createDigits(item);
    container.append($digit);
  }
}

function generateRandomNumbers() {
  let arr = [];
  for (let i = 0; i < 4; i++) {
    let randomNumber = Math.floor(Math.random() * 9) + 1;
    arr.push(randomNumber);
  }
  return arr;
}

let arr = generateRandomNumbers();
renderArray(arr, $codebox);

$refreshBtn.addEventListener("click", () => {
  arr = generateRandomNumbers();
  renderArray(arr, $codebox);
});