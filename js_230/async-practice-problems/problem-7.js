let x = document.querySelector(".x");
let xVertical = document.querySelector(".x .vertical");
let xHorizontal = document.querySelector(".x .horizontal");

document.addEventListener("mousemove", (event) => {
  x.style.top = String(event.clientY) + "px";
  x.style.left = String(event.clientX) + "px";
});

document.addEventListener("keyup", (event) => {
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
});

// Book solution

// document.addEventListener('mousemove', (event) => {
//   let x = document.querySelector('.x');
//   x.style.left = event.clientX.toString() + 'px';
//   x.style.top = event.clientY.toString() + 'px';
// });

// document.addEventListener("keyup", (event) => {
//   let key = event.key;
//   let color;

//   if (key === 'r') {
//     color = 'red';
//   } else if (key === 'g') {
//     color = 'green';
//   } else if (key === 'b') {
//     color = 'blue';
//   }

//   if (color) {
//     let x = document.querySelector('.x');
//     let child;
//     for (let index = 0; index < x.children.length; index++) {
//       child = x.children[index];
//       child.style.background = color;
//     }
//   }
// });