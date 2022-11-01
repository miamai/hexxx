const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".nav-header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("open");
});
