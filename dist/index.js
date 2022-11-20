const button = document.querySelector("#menu-btn");
const buttonClose = document.querySelector("#menu-close");
const menu = document.querySelector("#menu");
const toTop = document.querySelector("#toTop");

button.addEventListener("click", () => {
  //   menu.classList.toggle("hidden");
  menu.classList.remove("hidden");
  button.classList.add("hidden");
  buttonClose.classList.remove("hidden");
});

buttonClose.addEventListener("click", () => {
  //   menu.classList.toggle("hidden");
  menu.classList.add("hidden");
  button.classList.remove("hidden");
  buttonClose.classList.add("hidden");
});

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    toTop.classList.add("hidden");
    toTop.classList.remove("flex");
  }
}

toTop.addEventListener("click", () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
