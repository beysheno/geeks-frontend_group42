// // task 1
// const regExp = /^\d+$/;

// const containsOnlyDigits = (str) => {
//   return regExp.test(str);
// };

// console.log(containsOnlyDigits("12345")); // Выведет true
// console.log(containsOnlyDigits("12a45")); // Выведет false

//task2

// const interval = () =>
//   setInterval(() => {
//     console.log("Прошла секунда");
//   }, 1000);

// interval();

//task3
// const count = () => {
//   let i = 1;
//   const interval = setInterval(() => {
//     if (i === 10) {
//       clearInterval(interval);
//     }
//     console.log(i++);
//   }, 1000);
// };
// count();
//task4
//Cоздать блок 150 на 150 пикселей и получить его через дом элементы при нажатии на которую будет меняться его задний фон при повторном нажатии будет убираться цвет заднего фона - выполните эту задачу с использованием classList и его методов

// const block = document.querySelector(".block");

// block.onclick = (event) => {
//   if (event.target.classList.contains("red")) {
//     event.target.classList.remove("red");
//   } else {
//     event.target.classList.add("red");
//   }
// };

// task5;

// const request = new XMLHttpRequest();
// request.open("GET", "data.json");
// request.setRequestHeader("Content-type", "application/json");
// request.send();

// request.onload = () => {
//   const data = JSON.parse(request.response);
//   console.log(data);
// };
