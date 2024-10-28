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
