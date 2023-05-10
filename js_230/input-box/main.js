document.addEventListener("DOMContentLoaded", () => {
  let textField = document.querySelector(".text-field");

  textField.addEventListener("click", event => {
    event.stopPropagation();
    textField.classList.add("focused");
  });

  document.addEventListener("click", () => {
    textField.classList.remove("focused");
  });
});