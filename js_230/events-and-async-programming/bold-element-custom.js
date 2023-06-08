// document.addEventListener("DOMContentLoaded", () => {
//   let paragraphElement = document.querySelector("p");

//   function makeBold(element, callback) {
//     element.style.fontWeight = "bold";

//     if (callback && typeof callback === "function") {
//       callback(element);
//     }
//   }

//   makeBold(paragraphElement);
// });

// Using a custom event

// document.addEventListener("DOMContentLoaded", () => {
//   let sectionElement = document.querySelector("section");

//   function makeBold(element) {
//     element.style.fontWeight = "bold";
//     let bolded = new CustomEvent("bolded");

//     element.dispatchEvent(bolded);
//   }

//   sectionElement.addEventListener("bolded", (event) => {
//     alert(event.target.tagName);
//     event.target.classList.add("highlight");
//   });

//   makeBold(sectionElement);
// })

let sectionElement = document.querySelector("section");
function makeBold(element, callback) {
  element.style.fontWeight = "bold";
  if (callback && typeof callback === "function") {
    callback(element);
  }
}