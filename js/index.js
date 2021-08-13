// Menu variables

const backgroundModal = document.querySelector("#background-modal")
const navList = document.querySelector("#main-nav")
const hamburgerIcon = document.querySelector("#hamburger-close")

// Email validation variables

const regexEmailValidation = /\S+@\S+\.\S+/
const form = document.querySelector("#form")
const inputForm = document.querySelector("#inputForm")
const error = document.querySelector("#messageError")

// Slider variables
const sliderCards = document.querySelectorAll(".testimonial__item")

hamburgerIcon.addEventListener("click", () => {
  dropDownMenu()
})

form.addEventListener("submit", (e) => {
  e.preventDefault()

  validateEmail()
})

// Display of the menu

function dropDownMenu() {
  navList.style.display == ""
    ? ((navList.style.display = "flex"),
      (backgroundModal.style.display = "block"),
      hamburgerIcon.setAttribute("src", "assets/images/icon-close.svg"))
    : ((navList.style.display = ""),
      (backgroundModal.style.display = ""),
      hamburgerIcon.setAttribute("src", "assets/images/icon-hamburger.svg"))
}

// Email validation

function validateEmail() {
  regexEmailValidation.test(inputForm.value)
    ? form.submit()
    : (error.textContent = "Please insert a valid email"),
    (inputForm.style.border = "2px solid IndianRed"),
    (inputForm.style.color = "IndianRed")
}
// TODO: Slider, deskot view
