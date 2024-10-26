//task1
// function extractNumbers(str) {
//   return str.match(/\d/g);
// }

// console.log(extractNumbers("a1fg5hj6")); // вернёт [1, 5, 6]

//task2
// const task2 = (prev = 0, curr = 1) => {
//   if (prev > 144) return;
//   console.log(prev);

//   setTimeout(() => {
//     task2(curr, curr + prev);
//   }, 1000);
// };
// task2();

// task3
// const url = " https://fakestoreapi.com/products";

// const getData = async () => {
//   const response = await fetch(url);
//   const data = await response.json();
//   data.forEach((item) => console.log(item.title));
// };
// getData();

//task4

// const div = document.querySelector("div");
// div.onclick = (event) => {
//   if (event.target.tagName === "BUTTON") {
//     const color = event.target.getAttribute("data-color");
//     document.body.style.backgroundColor = color;
//   }
// };

//task5
// const toggleBtn = document.querySelector("#button");

// toggleBtn.onclick = () => {
//   const squareBlock = document.querySelector("#square-block");

//   if (squareBlock.style.display === "none") {
//     squareBlock.style.display = "block";
//     this.textContent = "Скрыть";
//   } else {
//     squareBlock.style.display = "none";
//     this.textContent = "Показать";
//   }
// };

// task6
// let count = 0;
// const counterElement = document.querySelector("#counter");

// const intervalId = setInterval(() => {
//   if (count >= 100) {
//     clearInterval(intervalId);
//   } else {
//     count++;
//     counterElement.textContent = count;
//   }
// }, 1);

//task7

// Создайте кнопку при нажатии на которую будет отправляться GET запрос на JSON и полученные данные от туда выводите в консоль (JSON создавайте на своё усмотрение) используйте async await

// const getBtn = document.querySelector("#get");

// getBtn.onclick = async () => {
//   try {
//     const response = await fetch("data.json");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };
