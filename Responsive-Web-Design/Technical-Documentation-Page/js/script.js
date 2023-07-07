const menuButton = document.getElementById("menu-button");
const navBar = document.getElementById("nav-bar");

let isMenuOpen = true;

menuButton.addEventListener("click", () => {
  isMenuOpen = !isMenuOpen;

  if (isMenuOpen === false) {
    menuButton.innerHTML = "<i class='fa-solid fa-bars'></i>";
    navBar.classList.add('hidden');
    setTimeout(() => {
      navBar.style.display = "none";
    }, 100);
  } else {
    menuButton.innerHTML = "<i class='fa-solid fa-xmark'></i></i>";
    navBar.style.display = "flex";
    window.scrollTo(0, 0)
    setTimeout(() => {
      navBar.classList.remove('hidden')
    }, 100);
  }
});
