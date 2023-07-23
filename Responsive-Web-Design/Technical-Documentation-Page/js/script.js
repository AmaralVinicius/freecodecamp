class Menu {
  constructor(menuButton, navBar, mainDoc, navLinks) {
    this.menuButton = document.querySelector(menuButton);
    this.navBar = document.querySelector(navBar);
    this.mainDoc = document.querySelector(mainDoc);
    this.navLinks = document.querySelectorAll(navLinks);
    this.mobileMediaQuery = window.matchMedia("(max-width: 730px)");
    this.isMenuOpen;
  };

  closeMenu() {
    this.isMenuOpen = false;
    this.menuButton.innerHTML = "<i class='fa-solid fa-bars'></i>";
    this.navBar.classList.add("hidden");
    setTimeout(() => {
      this.navBar.style.display = "none";
    }, 100);
  };

  openMenu () {
    this.isMenuOpen = true;
    this.menuButton.innerHTML = "<i class='fa-solid fa-xmark'></i></i>";
    this.navBar.style.display = "flex";
    setTimeout(() => {
      this.navBar.classList.remove("hidden");
    }, 100);
  };

  mediaQueryAction (mediaQuery) {
    if (mediaQuery.matches) {
      this.closeMenu();
    } else {
      this.openMenu();
    };
  };

  init() {
    this.mediaQueryAction(this.mobileMediaQuery);

    this.menuButton.addEventListener("click", () => {
      this.isMenuOpen = !this.isMenuOpen;
    
      if (this.isMenuOpen === false) {
        this.closeMenu();
      } else {
        this.openMenu();
      };
    });

    this.navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        this.mediaQueryAction(this.mobileMediaQuery);
      });
    });

    this.mainDoc.addEventListener("click", () => {
      if (this.isMenuOpen) {
        this.mediaQueryAction(this.mobileMediaQuery);
      };
    });

    window.addEventListener("resize", () => {
      this.mediaQueryAction(this.mobileMediaQuery);
    });

    return this;
  }
}

const menu = new Menu(
  "#menu-button",
  "#nav-bar",
  "#main-doc",
  ".nav-link"
);
menu.init();

hljs.highlightAll();
