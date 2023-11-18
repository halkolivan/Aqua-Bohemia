const body = document.querySelector("body");
const buttonOpenMenu = document.querySelector(".borders");
const leftMenu = document.querySelector(".left-menu-position");
buttonOpenMenu.onclick = () => {
  if (leftMenu.classList.contains("open-menu")) {
    leftMenu.classList.remove("open-menu");
  } else {
    leftMenu.classList.add("open-menu");
  }
};
