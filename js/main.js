const infoBtns = document.querySelectorAll(".info-dot");
const infoHints = document.querySelectorAll(".info-hint");

// Клик по кнопке с подсказками
for (let btn of infoBtns) {
  btn.addEventListener("click", showHint);
}

function showHint(e) {
  e.stopPropagation();

  // Hide all hint
  for (let hint of infoHints) {
    hint.classList.add("none");
  }

  // Show current hint
  this.parentNode.querySelector(".info-hint").classList.toggle("none");
}

// Закрытие подсказки при клике по всему документу
document.addEventListener("click", function () {
  for (let hint of infoHints) {
    hint.classList.add("none");
  }
});

// Запрещаем всплытие события наверх при клике по подсказке
for (let hint of infoHints) {
  hint.addEventListener("click", (e) => e.stopPropagation());
}

// Swiper slider
const swiper = new Swiper(".swiper", {
  // Optional parameters
  // direction: "vertical",
  loop: true,
  freeMode: true,

  slidesPerView: 1,
  spaceBetween: 42,

  breakpoints: {
    600: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    920: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1230: {
      slidesPerView: 4,
      spaceBetween: 42,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: "#sliderPrev",
    prevEl: "#sliderNext",
  },
});

// Tabs
const tabsBtns = document.querySelectorAll("[data-tab]");
const tabsProducts = document.querySelectorAll("[data-tab-value]");
console.log(tabsProducts);

for (let btn of tabsBtns) {
  btn.addEventListener("click", function () {
    // Убираем активные классы у всех кнопок
    for (let btn of tabsBtns) {
      btn.classList.remove("tab-controls__btn--active");
    }
    // Добавляем активный класс к текущей кнопке
    this.classList.add("tab-controls__btn--active");

    // Получаем значение категорий товаров которые нужно включить
    this.dataset.tab;

    // Скрыть ненужные товары и отобразить нужные
    for (let product of tabsProducts) {
      // Проверка на отображение всех товаров
      if (this.dataset.tab === "all") {
        product.classList.remove("none");
      } else {
        if (product.dataset.tabValue === this.dataset.tab) {
          product.classList.remove("none");
        } else {
          product.classList.add("none");
        }
      }
    }

    // Update Swipe
    swiper.update();
  });
}

// Mobile nav

const mobileNavOpenBtn = document.querySelector("#open-mobile-nav-btn");
const mobileNavCloseBtn = document.querySelector("#close-mobile-nav-btn");
const mobileNav = document.querySelector("#mobile-nav");

mobileNavOpenBtn.onclick = function () {
  mobileNav.classList.add("mobile-nav-wrapper--open");
};

mobileNavCloseBtn.onclick = function () {
  mobileNav.classList.remove("mobile-nav-wrapper--open");
};

// mobile-nav-wrapper--open

// close-mobile-nav-btn
