const mobileNavToggleBtn = document.querySelector("#mobile-nav-toggle-btn");
const pageNav = document.querySelector("#page-navigation");

mobileNavToggleBtn.addEventListener("click", () => {
  pageNav.classList.toggle("hide-on-mobile");
});