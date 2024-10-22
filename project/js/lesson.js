// phone checker
const phoneInput = document.querySelector("#phone_input");
const phoneButton = document.querySelector("#phone_button");
const phoneResult = document.querySelector("#phone_result");

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/;

phoneButton.onclick = () => {
  if (regExp.test(phoneInput.value)) {
    phoneResult.innerHTML = "OK";
    phoneResult.style.color = "green";
  } else {
    phoneResult.innerHTML = "NOT OK";
    phoneResult.style.color = "red";
  }
};

// Tab Slider

const tabContentBlocks = document.querySelectorAll(".tab_content_block");
const tabItems = document.querySelectorAll(".tab_content_item");
const tabParent = document.querySelector(".tab_content_items");
let currentTab = 0;
let timer;
const hideTabContent = () => {
  tabContentBlocks.forEach((item) => {
    item.style.display = "none";
  });
  tabItems.forEach((item) => {
    item.classList.remove("tab_content_item_active");
  });
};

const showTabContent = (index = 0) => {
  tabContentBlocks[index].style.display = "block";
  tabItems[index].classList.add("tab_content_item_active");
  currentTab = index;
};
const autoSwitchTab = () => {
  timer = setTimeout(() => {
    currentTab = (currentTab + 1) % tabItems.length;
    hideTabContent();
    showTabContent(currentTab);
    autoSwitchTab();
  }, 3000);
};

const resetTimer1 = () => {
  clearInterval(timer);
  autoSwitchTab();
};
tabParent.onclick = (event) => {
  if (event.target.classList.contains("tab_content_item")) {
    tabItems.forEach((item, index) => {
      if (event.target === item) {
        hideTabContent();
        showTabContent(index);
        resetTimer1();
      }
    });
  }
};
hideTabContent();
showTabContent();
autoSwitchTab();

//converter

const usdInput = document.querySelector("#usd");
const somInput = document.querySelector("#som");
const euroInput = document.querySelector("#eur");

const converter = (element, targetElement, targetElement2) => {
  element.oninput = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "../data/conventer.json");
    request.setRequestHeader("Content-type", "application/json");
    request.send();
    request.onload = () => {
      const data = JSON.parse(request.response);

      if (element.id === "som") {
        targetElement.value = (element.value / data[0].usd).toFixed(2);
        targetElement2.value = (element.value / data[1].eur).toFixed(2);
      }
      if (element.id === "usd") {
        targetElement.value = (element.value * data[0].usd).toFixed(2);
        targetElement2.value = (element.value * data[2].eur).toFixed(2);
      }
      if (element.id === "eur") {
        targetElement.value = (element.value / data[2].eur).toFixed(2);
        targetElement2.value = (element.value * data[1].eur).toFixed(2);
      }
      if (element.value === "") {
        targetElement.value = "";
        targetElement2.value = "";
      }
    };
  };
};
converter(usdInput, somInput, euroInput);
converter(somInput, usdInput, euroInput);
converter(euroInput, usdInput, somInput);

// DRY - Dont  repeat yourself
// KISS - keep it simple, stupid || keep it super simple

// Card Switcher

const card = document.querySelector(".card");
const prevButton = document.querySelector("#btn-prev");
const nextButton = document.querySelector("#btn-next");
let cardId = 1;

const fetchRequest = () => {
  fetch(`https://jsonplaceholder.typicode.com/todos/${cardId}`)
    .then((response) => response.json())
    .then((data) => {
      const { id, title, completed } = data;
      card.innerHTML = `
      <p>${title}</p>
      <p>${completed}</p>
      <span>${id}</span>
      `;
    });
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

//hw part2

const posts = fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((post) => console.log(post));

