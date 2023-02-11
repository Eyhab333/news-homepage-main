const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const topnav = document.querySelector(".topnav");

hamburger.addEventListener("click", () => {
  hamburger.style.display = "none"
  close.style.display = "block"
  topnav.style.display = "block"
})

close.addEventListener("click", () => {
  hamburger.style.display = "block"
  close.style.display = "none"
  topnav.style.display = "none"
  document.body.style.backgroundColor = "";
})