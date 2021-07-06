/* jshint esversion: 6 */
const headerCityButton = document.querySelector(".header__city-button");
// if (localStorage.getItem("lomoda-location")) {
// headerCityButton.textContent = localStorage.getItem("lomoda-location");
// }

headerCityButton.textContent =
  localStorage.getItem("lomoda-location") || "Ваш город?";

headerCityButton.addEventListener("click", () => {
  const city = prompt("Укажите Ваш город");
  headerCityButton.textContent = city;
  localStorage.setItem("lomoda-location", city);
});

// блокировка скролла
const disableScroll = () => {
  const widthScroll = window.innerWidth - document.body.offsetWidth;
  document.body.dbScrollY = window.scrollY;
  // Первый вариант - скачет скролл
  // document.body.style.overflow = "hidden";
  // второй вариант - не скачет скорлл
  document.body.style.cssText = `
	position: fixed;
  top: ${-window.scrollY}px;
	left: 0;
	width: 100%;
	heigth: 100vh;
	overflow: hidden;
	padding-right: ${widthScroll}px;
	`;
};

const enableScroll = () => {
  // Первый вариант - скачет скролл
  // document.body.style.overflow = "";
  // второй вариант - не скачет скорлл
  document.body.style.cssText = "";
  window.scroll({
    top: document.body.dbScrollY,
  });
};

// модальное окно
const subheaderСart = document.querySelector(".subheader__cart");
const cartOverlay = document.querySelector(".cart-overlay");
const cartModalOpen = () => {
  cartOverlay.classList.add("cart-overlay-open");
  disableScroll();
};

const cartModalClose = () => {
  cartOverlay.classList.remove("cart-overlay-open");
  enableScroll();
};

subheaderСart.addEventListener("click", cartModalOpen);

cartOverlay.addEventListener("click", (event) => {
  const target = event.target;
  // Первый вариант
  // if (target.classList.contains("cart__btn-close")) {
  // cartModalClose();
  // }
  // Второй вариант
  if (target.matches(".cart__btn-close") || target.matches(".cart-overlay")) {
    cartModalClose();
  }
});
