const mobileNav = document.querySelector(".mobile-nav")
const mobileNavToggle = document.querySelector(".mobile-menu__btn")

mobileNavToggle.addEventListener("click", () => {
  mobileNav.classList.toggle("mobile-nav--open")
})
