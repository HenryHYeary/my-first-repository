let divRed = document.querySelector("#red");
let divBlue = document.querySelector("#blue");
let divOrange = document.querySelector("#orange");
let divGreen = document.querySelector("#green");


function track(callback) {
  function isEventTracked(events, event) {
    return events.includes(event);
  } 

  return event => {
    if (!isEventTracked(tracker.list(), event)) {
      tracker.add(event);
    }

    callback(event);
  };
}

let tracker = (function() {
  let events = [];

  return {
    elements() {
      return this.list().map(event => event.target);
    },

    list() {
      return events.slice();
    },

    clear() {
      events.length = 0;
      return 0;
    },

    add(event) {
      events.push(event);
    }
  }
})();


divRed.addEventListener('click', track(event => {
  document.body.style.background = 'red';
}));

divBlue.addEventListener('click', track(event => {
  event.stopPropagation();
  document.body.style.background = 'blue';
}));

divOrange.addEventListener('click', track(event => {
  document.body.style.background = 'orange';
}));

divGreen.addEventListener('click', track(event => {
  document.body.style.background = 'green';
}));
