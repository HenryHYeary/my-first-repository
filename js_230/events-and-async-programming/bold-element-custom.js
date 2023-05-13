document.addEventListener("DOMContentLoaded", () => {
  let paragraphElement = document.querySelector("p");

  function makeBold(element, callback) {
    element.style.fontWeight = "bold";

    if (callback && typeof callback === "function") {
      callback(element);
    }
  }

  makeBold(paragraphElement);
});