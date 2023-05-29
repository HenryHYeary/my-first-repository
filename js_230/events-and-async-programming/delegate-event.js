function delegateEvent(parentElement, selector, eventType, callback) {
  if (!parentElement) {
    return;
  }

  parentElement.addEventListener(eventType, event => {
    let collection = [...parentElement.querySelectorAll(selector)];
    collection.forEach(element => {
      if (element.contains(event.target)) {
        callback(event);
      }
    })
  })

  return true;
}

const element1 = document.querySelector("table");
const element2 = document.querySelector("main h1");
const element3 = document.querySelector("main");

const callback = ({target, currentTarget}) => {
  alert(`Target: ${target.tagName}\nCurrent Target: ${currentTarget.tagName}`);
};

document.addEventListener("DOMContentLoaded", () => {
  delegateEvent(element2, 'h1', 'click', callback);
})