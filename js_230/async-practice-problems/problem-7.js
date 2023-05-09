let x = document.querySelector(".x");
let xVertical = document.querySelector(".x .vertical");
let xHorizontal = document.querySelector(".x .horizontal");

document.addEventListener("mousemove", (event) => {
  x.style.top = String(event.clientY) + "px";
  x.style.left = String(event.clientX) + "px";
});

document.addEventListener("keydown", (event) => {
  if (event.key === "b") {
    xVertical.style.background = "blue";
    xHorizontal.style.background = "blue";
  } 
  
  if (event.key === "g") {
    xVertical.style.background = "green";
    xHorizontal.style.background = "green";
  }
  
  if (event.key === "r") {
    xVertical.style.background = "red";
    xHorizontal.style.background = "red";
  }
})