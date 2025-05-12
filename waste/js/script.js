const hamburgerIcon = document.getElementById("hamburger");
const closeMenu = document.getElementById("closeMenu");
const overlay = document.getElementById("overlay");
const mobileMenu = document.getElementById("mobile-menu");

function closeMobileMenu() {
  mobileMenu.style.width = "0";
  // mobileMenu.style.display = "none";
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
