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

// function walk(node, callback) {
//   callback(node);

//   for (let index = 0; index < node.childNodes.length; index++) {
//       walk(node.childNodes[index], callback);
//   }
// }

// function childNodes(nodeId) {
//   let node = document.getElementById(nodeId);
//   let directChildren;
//   if (node.childNodes) {
//       directChildren = node.childNodes.length;
//   } else {
//       directChildren = 0;
//   }

//   let totalChildren = -1;
//   walk(node, (node) => {
//       totalChildren++;
//   });

//   let indirectChildren = totalChildren - directChildren;

//   return [directChildren, indirectChildren];
// }

// console.log(childNodes("4"));

/*
input: node ID
output: an array indicating the number of direct child
nodes in the first element, and indirect child nodes
in the element of the array

Data Structure: Should record the number of direct childNodes
as a count variable. 

Algorithm: Can use a while loop to traverse down from
a parent node to increment the allChildren count. Can do this
by adding to the all children count the value of each successive array's
length to the count.
*/

function childNodes(nodeId) {
  let selectedNode = document.getElementById(nodeId);

  function walk(node, callback) {
    callback(node);

    for (let index = 0; index < node.childNodes.length; index++) {
      walk(node.childNodes[index], callback);
    }
  }

  let directChildren = selectedNode.childNodes.length;
  let indirectChildrenCount = -1;

  walk(selectedNode, (node) => {
    indirectChildrenCount++;
  })
}

console.log(childNodes("2"));