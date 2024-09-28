const $tipForm = document.querySelector("#tip-form");
const [$amount, $tipPercent] = [...$tipForm.querySelectorAll("input")];
const $button = document.querySelector("button");
const $total = document.querySelector("#total");

function calculateTip() {
  if (!$amount.value || !$tipPercent.value) {
    $total.innerText = "";
  } else {
    const amount = parseFloat(document.getElementById("amount").value);
    const tipPercent = parseFloat(document.getElementById("tip-percent").value);
    const total = amount + (amount * tipPercent) / 100;
    $total.innerText = total.toFixed(2);
  }
}

$button.addEventListener("click", (event) => {
  event.preventDefault();
  calculateTip();
});
