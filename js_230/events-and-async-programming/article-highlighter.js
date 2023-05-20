/*
input: A click on any of the hyperlinks at the top of the page
or a click on any of the articles within the page (or anywhere else
in the document).
output: A highlighted border around the main element (articles page)
or a highlighted border around one of the article elements.

Examples: Clicking a hyperlink should take you to that article in the main
element and add a highlighted border around it (highlight class).
  - If another element already has the highlight class then the browser
  removes the class from that element
  - When the user clicks on an article element or any of its children
  the browser adds the highlight class to it.
  - When the user clicks anywhere else on the page, the browser adds
  the highlight class to the main element

Data Structure: Should only have to define a single event listener for this exercise
Create one for the document as a whole.
*/

document.addEventListener("DOMContentLoaded", () => {
  function highlight({target}) {
    let element;
    let id;

    removeHighlight();

    if (target.tagName === "A") {
      id = target.href.match("#article-[0-9]+")[0];
      element = document.querySelector(id);
    } else {
      element = document.querySelector("main");
    }

    element.classList.add("highlight");
  }

  function removeHighlight() {
    const highlighted = document.querySelector(".highlight");
    if (highlighted) {
      highlighted.classList.remove("highlight");
    }
  }

  const nav = document.querySelector("header ul");
  const main = document.querySelector("main");

  nav.addEventListener("click", highlight);
  document.addEventListener("click", highlight);
  main.addEventListener("click", e => {
    e.preventDefault();
    let article = e.target;
    if (article.tagName !== "ARTICLE") {
      article = article.parentNode;
    }

    if (article.tagName === "ARTICLE") {
      e.stopPropagation();
      removeHighlight();
      article.classList.add("highlight");
    }
  });
});