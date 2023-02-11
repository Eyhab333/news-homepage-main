const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const topnav = document.querySelector(".topnav");


hamburger.addEventListener("click", () => {
  hamburger.style.display = "none"
  close.style.display = "block"
  topnav.style.display = "block"
  document.body.style.backgroundColor = "hsla(240, 100%, 5%, 0.5)";
})

close.addEventListener("click", () => {
  hamburger.style.display = "block"
  close.style.display = "none"
  topnav.style.display = "none"
  document.body.style.backgroundColor = "";
})