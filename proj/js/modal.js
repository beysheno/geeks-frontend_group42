//Modal

const modal = document.querySelector(".modal");
const modalTrigger = document.querySelector(".explore-btn");
const closeIcon = document.querySelector(".modal_close");
let timeout;
let modalShown = false;

if (modal && modalTrigger && closeIcon) {
  const debounce = (func, delay) => {
    let debounceTimeout;
    return function (...args) {
      clearTimeout(debounceTimeout);
      debounceTimeout = setTimeout(() => func.apply(this, args), delay);
    };
  };

  const openModal = () => {
    if (!modalShown) {
      modal.style.display = "flex";
      modalShown = true;
      removeListeners();
      document.body.style.overflow = "hidden";
    }
  };

  const closeModal = () => {
    modal.style.display = "none";
    document.body.style.overflow = "";
    clearTimeout(timeout);
    modalShown = false;
  };

  const resetTimer = () => {
    clearTimeout(timeout);
    if (!modalShown) {
      timeout = setTimeout(openModal, 5000);
    }
  };

  function checkScrollEnd() {
    if (
      !modalShown &&
      window.innerHeight + window.scrollY >= document.body.offsetHeight
    ) {
      openModal();
    }
  }

  function removeListeners() {
    window.removeEventListener("mousemove", resetTimer);
    window.removeEventListener("keypress", resetTimer);
    window.removeEventListener("touchstart", resetTimer);
    window.removeEventListener("scroll", debouncedHandleScroll);
  }

  function handleScroll() {
    resetTimer();
    checkScrollEnd();
  }

  const debouncedHandleScroll = debounce(handleScroll, 100);

  window.addEventListener("scroll", debouncedHandleScroll);
  window.addEventListener("mousemove", resetTimer);
  window.addEventListener("keypress", resetTimer);
  window.addEventListener("touchstart", resetTimer);

  modalTrigger.onclick = () => openModal();
  closeIcon.onclick = () => closeModal();
  modal.onclick = (event) => {
    if (event.target === modal) {
      closeModal();
    }
  };

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modalShown) {
      closeModal();
    }
  });
}

// post data

const form = document.querySelector("form");
const chat_id = "@aziret_less7";
const token = "7868798465:AAFBXOia-mIzVuuahpF6yYCwkcOjaSg3AYY";
const api_url = `https://api.telegram.org/bot${token}/sendMessage`;
const user = {};
form.onsubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  formData.forEach((item, idx) => {
    user[idx] = item;
  });
  const { name, phone } = user;
  const text = `name: ${name} \nphone:${phone}`;
  await fetch(api_url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chat_id, text }),
  });
};
