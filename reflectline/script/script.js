const hamburgerIcon = document.getElementById("hamburger");
const closeMenu = document.getElementById("closeMenu");
const overlay = document.getElementById("overlay");
const mobileMenu = document.getElementById("mobile-menu");

function closeMobileMenu() {
  mobileMenu.style.width = "0";
  overlay.style.display = "none";
}

function openMobileMenu() {
  mobileMenu.style.width = "25rem";
  overlay.style.display = "block";
  mobileMenu.style.display = "block";
}

overlay.addEventListener("click", closeMobileMenu);
closeMenu.addEventListener("click", closeMobileMenu);
hamburgerIcon.addEventListener("click", openMobileMenu);

const tabSignupBtn = document.getElementById("tab-signup");
const tabLoginBtn = document.getElementById("tab-login");
const userRegisterForm = document.querySelector(".user-register-form");
const userLoginForm = document.querySelector(".user-login-form");
const userInputField = document.querySelectorAll(".input-field");

function clearInputValue() {
  userInputField.forEach((input) => {
    input.value = "";
  });
}

tabSignupBtn.addEventListener("click", () => {
  userRegisterForm.classList.remove("hidden");
  userLoginForm.classList.add("hidden");
  tabSignupBtn.style.borderBottom = "2px solid black";
  tabLoginBtn.style.borderBottom = "none";
  clearInputValue();
});

tabLoginBtn.addEventListener("click", () => {
  userRegisterForm.classList.add("hidden");
  userLoginForm.classList.remove("hidden");
  tabLoginBtn.style.borderBottom = "2px solid black";
  tabSignupBtn.style.borderBottom = "none";
  userInputField.value = "";
  clearInputValue();
});
