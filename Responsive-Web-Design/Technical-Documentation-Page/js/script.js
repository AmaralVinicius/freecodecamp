const menuButton = document.getElementById("menu-button");
const navBar = document.getElementById("nav-bar");
const mainDoc = document.getElementById("main-doc");

let isMenuOpen = true;

menuButton.addEventListener("click", () => {
  isMenuOpen = !isMenuOpen;

  if (isMenuOpen === false) {
    menuButton.innerHTML = "<i class='fa-solid fa-bars'></i>";
    navBar.classList.add("hidden");
    mainDoc.classList.remove("effect");
    setTimeout(() => {
      navBar.style.display = "none";
    }, 100);
  } else {
    menuButton.innerHTML = "<i class='fa-solid fa-xmark'></i></i>";
    navBar.style.display = "flex";
    setTimeout(() => {
      navBar.classList.remove("hidden")
      mainDoc.classList.add("effect");
    }, 100);
  }
});
