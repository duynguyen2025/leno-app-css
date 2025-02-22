const mobileNav = document.querySelector(".mobile-nav")
const mobileNavToggle = document.querySelector(".mobile-menu__btn")

mobileNavToggle.addEventListener("click", () => {
  mobileNav.classList.toggle("mobile-nav--open")
})

// Video Modal
const modal = document.getElementById("videoModal")
const videoButton = document.querySelector(".preview__video-button")
const closeButton = document.querySelector(".modal__close-button")
const videoPlayer = document.getElementById("videoPlayer")

// Open modal when clicked
videoButton.addEventListener("click", function () {
  // Show modal
  modal.style.display = "block"

  //Replace the src attribute with the video URL
  videoPlayer.src = "https://www.youtube.com/embed/8sXRyHI3bLw"

  // Close modal on close button click
  closeButton.addEventListener("click", function () {
    modal.style.display = "none"
    videoPlayer.src = ""
  })

  // Close modal on outter click
  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none"
      videoPlayer.src = ""
    }
  })
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
