document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector("main");
  const sub = document.querySelector("#sub");

  main.addEventListener("contextmenu", event => {
    event.preventDefault();
    alert(event.target.tagName.toLowerCase());
  });

  sub.addEventListener("contextmenu", event => {
    event.stopPropagation();
    event.preventDefault();
    alert(event.target.getAttribute("id"));
  })
});