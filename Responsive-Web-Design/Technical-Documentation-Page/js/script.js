const menuButton = document.getElementById("menu-button");
const navBar = document.getElementById("nav-bar");
const navLinks = document.querySelectorAll(".nav-link");

let isMenuOpen;

const closeMenu = () => {
  isMenuOpen = false
  menuButton.innerHTML = "<i class='fa-solid fa-bars'></i>";
  navBar.classList.add("hidden");
  setTimeout(() => {
    navBar.style.display = "none";
  }, 100);
};

const openMenu = () => {
  isMenuOpen = true
  menuButton.innerHTML = "<i class='fa-solid fa-xmark'></i></i>";
    navBar.style.display = "flex";
    setTimeout(() => {
      navBar.classList.remove("hidden")
    }, 100);
};

const mobileMediaQuery = window.matchMedia("(max-width: 730px)")
if (mobileMediaQuery.matches) {
  closeMenu();
} else {
  openMenu();
};

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (isMenuOpen && mobileMediaQuery.matches) {
      closeMenu();
    };
  });
});

menuButton.addEventListener("click", () => {
  isMenuOpen = !isMenuOpen;

  if (isMenuOpen === false) {
    closeMenu();
  } else {
    openMenu();
  };
});
