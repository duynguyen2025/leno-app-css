const mobileNav = document.querySelector(".mobile-nav")
const mobileNavToggle = document.querySelector(".mobile-menu__btn")

mobileNavToggle.addEventListener("click", () => {
  mobileNav.classList.toggle("mobile-nav--open")
})

// Navigation background on scroll
window.addEventListener("scroll", function () {
  const mainHeader = document.querySelector(".main-header")
  if (window.scrollY > 0) {
    mainHeader.classList.add("main-header--scrolled")
  } else {
    mainHeader.classList.remove("main-header--scrolled")
  }
})
