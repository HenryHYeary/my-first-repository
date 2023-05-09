document.addEventListener("click", (event) => {
  let x = document.querySelector(".x");
  x.style.top = String(event.clientY) + "px";
  x.style.left = String(event.clientX) + "px";
});