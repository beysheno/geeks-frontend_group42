//weather app

const searchInput = document.querySelector(".cityName");
const city = document.querySelector(".city");
const temp = document.querySelector(".temp");

const API_KEY = "e417df62e04d3b1b111abeab19cea714";
const BASE_URL = "http://api.openweathermap.org/data/2.5/weather";
searchInput.oninput = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}?q=${searchInput.value}&appid=${API_KEY}&units=metric`
    );
    const data = await response.json();
    city.innerHTML = data.name || "Город не найден";
    temp.innerHTML = data.main?.temp
      ? Math.round(data.main?.temp) + "&degC"
      : "Температура не определена";
  } catch (e) {
    console.log(e);
  }
};
// Card Switcher

const card = document.querySelector(".card");
const prevButton = document.querySelector("#btn-prev");
const nextButton = document.querySelector("#btn-next");
let cardId = 1;

const fetchRequest = async () => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${cardId}`
    );
    const data = await response.json();
    const { id, title, completed } = data;
    card.innerHTML = `
      <p>${title}</p>
      <p>${completed}</p>
      <span>${id}</span>
      `;
  } catch (error) {
    console.log(error);
  }
};
document.addEventListener("DOMContentLoaded", () => {
  fetchRequest();
});
nextButton.onclick = () => {
  if (cardId >= 200) {
    cardId = 1;
  } else {
    cardId++;
  }
  fetchRequest();
};

prevButton.onclick = () => {
  if (cardId <= 1) {
    cardId = 200;
  } else {
    cardId--;
  }
  fetchRequest();
};
