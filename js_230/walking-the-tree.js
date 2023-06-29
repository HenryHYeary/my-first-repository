function iterateAndLog(array) {
  for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
  }
}

let letters = ['h', 'e', 'l', 'l', 'o'];
iterateAndLog(letters);

function recurseAndLog(array) {
  if (array.length > 0) {
    console.log(array);
    console.log(array[0]);
    recurseAndLog(array.slice(1));
  }
}

recurseAndLog(letters);

function walk(node) {
  console.log(node.nodeName);
  for (let index = 0; index < node.childNodes.length; index++) {
    walk(node.childNodes[index]);
  }
}

walk(document.body)

function walk(node, callback) {
  callback(node);
  for (let index = 0; index < node.childNodes.length; index++) {
    walk(node.childNodes[index], callback);
  }
}

walk(document.body, node => {
  console.log(node.nodeName);
})