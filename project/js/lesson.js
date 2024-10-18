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
};

hideTabContent();
showTabContent();

tabParent.onclick = (event) => {
  if (event.target.classList.contains("tab_content_item")) {
    tabItems.forEach((item, index) => {
      if (event.target === item) {
        hideTabContent();
        showTabContent(index);
      }
    });
  }
};
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
      }
    };
  };
};
converter(usdInput, somInput, euroInput);
converter(somInput, usdInput, euroInput);
converter(euroInput, usdInput, somInput);

// DRY - Dont  repeat yourself
// KISS - keep it simple, stupid || keep it super simple
