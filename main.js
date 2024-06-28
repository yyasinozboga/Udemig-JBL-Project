const resMenuBtn = document.querySelector(".res-menu-btn");
const resMenu = document.querySelector(".res-menu");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
const resMenuLinks = document.querySelectorAll(".res-menu-link");

navMenu.addEventListener("click", (e) => {
  const ele = e.target;

  navLinks.forEach((navLink) => {
    if (navLink.href === ele.href) {
      ele.classList.add("active");
    } else {
      navLink.classList.remove("active");
    }
  });
});

resMenu.addEventListener("click", (e) => {
  const ele = e.target;

  resMenuLinks.forEach((resMenuLink) => {
    if (resMenuLink.href === ele.href) {
      ele.parentElement.classList.add("active");
    } else {
      resMenuLink.parentElement.classList.remove("active");
    }
  });

  if (ele.className === "res-menu-link") {
    resMenu.classList.remove("active");
  }
});

resMenuBtn.addEventListener("click", () => {
  resMenu.classList.toggle("active");
});
