//Modal

const modal = document.querySelector(".modal");
const modalTrigger = document.querySelector("#btn-get");
const closeIcon = document.querySelector(".modal_close");
let timeout;
let modalShown = false;

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
};
const resetTimer = () => {
  clearTimeout(timeout);
  if (!modalShown) {
    timeout = setTimeout(openModal, 10000);
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
  window.removeEventListener("scroll", handleScroll);
}
function handleScroll() {
  resetTimer();
  checkScrollEnd();
}
window.addEventListener("mousemove", resetTimer);
window.addEventListener("keypress", resetTimer);
window.addEventListener("touchstart", resetTimer);
window.addEventListener("scroll", handleScroll);

modalTrigger.onclick = () => openModal();
closeIcon.onclick = () => closeModal();
modal.onclick = (event) => {
  if (event.target === modal) {
    closeModal();
  }
};
