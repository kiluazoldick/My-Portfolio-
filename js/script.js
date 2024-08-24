const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  // @ts-ignore
  header.classList.toggle("sticky", window.scrollY > 120);
});

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

// @ts-ignore
menu.onclick = () => {
  // @ts-ignore
  menu.classList.toggle("bx-x");
  // @ts-ignore
  navlist.classList.toggle("active");
};

window.onscroll = () => {
  // @ts-ignore
  menu.classList.remove("bx-x");
  // @ts-ignore
  navlist.classList.remove("active");
};

// Design by Nanga Doumer
