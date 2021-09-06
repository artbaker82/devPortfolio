const nav = document.getElementById("nav-wrapper");
const navRight = document.getElementById("nav-right");
const navLinks = document.querySelectorAll(".nav-link");
const body = document.querySelector("body");
body.addEventListener("scroll", () => {
  let navPos = nav.getBoundingClientRect().top;
  console.log(navPos);
  //show navbar at postion 100
  if (navPos < 100) {
    nav.classList.remove("hide-nav");
  } else {
    nav.classList.add("hide-nav");
  }

  if (navPos <= 0) {
    nav.style.backgroundColor = "#c0baa2";
  } else {
    nav.style.backgroundColor = "none";
  }
});
