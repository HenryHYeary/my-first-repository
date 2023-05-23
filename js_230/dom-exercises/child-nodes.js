// function walk(node, callback) {
//   callback(node);
//   for (let index = 0; index < node.childNodes.length; index++) {
//     walk(node.childNodes[index], callback);
//   }
// }

// function walkOnlyChildren(node, callback) {
//   for (let index = 0; index < node.childNodes.length; index++) {
//     walk(node.childNodes[index], callback);
//   }
// }

// function childNodes(nodeId) {
//   let currentNode = document.getElementById(nodeId);
//   let directChildren = currentNode.childNodes.length;

//   let indirectChildren = 0;
//   walkOnlyChildren(currentNode, (node) => {
//     indirectChildren += node.childNodes.length;
//   });

//   return [directChildren, indirectChildren];
// }

// Above is a flawed solution

function walk(node, callback) {
  callback(node);

  for (let index = 0; index < node.childNodes.length; index++) {
      walk(node.childNodes[index], callback);
  }
}

function childNodes(nodeId) {
  let node = document.getElementById(nodeId);
  let directChildren;
  if (node.childNodes) {
      directChildren = node.childNodes.length;
  } else {
      directChildren = 0;
  }

  let totalChildren = -1;
  walk(node, (node) => {
      totalChildren++;
  });

  let indirectChildren = totalChildren - directChildren;

  return [directChildren, indirectChildren];
}

console.log(childNodes("4"));