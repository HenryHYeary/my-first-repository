/*
input: two element ids
output: true for successful swap, undefined for unsuccessful swap

Examples: If one of the id attributes does not exist
          then you should return undefined
          - If at least one of the nodes is a child of the other
          then you should return undefined

Data Structure: Need to record the next sibling of each node passed into
the function

Algorithm: Guard clause for non existent case, and for parent child case
          - record next element sibling for each node
            - if there is no next element sibling for the one of the nodes
              - record the parent element of the node
              - append the other node as a child of the parent element
            - else
              - insert the node before the next element sibling
              of the other node

            - ensure this process happens for both nodes
            might need to abstract the above to a subfunction
*/

// function nodeSwap(firstNodeId, secondNodeId) {
//   let node1 = document.getElementById(firstNodeId);
//   let node2 = document.getElementById(secondNodeId);

//   if (!node1 || !node2) return undefined;

//   let node1ChildrenArr = [].slice.call(node1.children).map(node => node.id);
//   let node2ChildrenArr = [].slice.call(node2.children).map(node => node.id);

//   if (node1ChildrenArr.includes(String(secondNodeId)) || 
//       node2ChildrenArr.includes(String(firstNodeId))) return undefined;

//   let node1NextSibling = node1.nextElementSibling;
//   let node2NextSibling = node2.nextElementSibling;

//   let node1Parent = node1.parentElement;
//   let node2Parent = node2.parentElement;

//   if (!node1NextSibling) {
//     node1Parent.appendChild(node2);
//   } else {
//     node1Parent.insertBefore(node2, node1NextSibling);
//   }

//   if (!node2NextSibling) {
//     node2Parent.appendChild(node1);
//     return true;
//   } else {
//     node2Parent.insertBefore(node1, node2NextSibling);
//     return true;
//   }
// }

// // Book solution (loses event listeners from replaceChild)
// function nodeSwap(node1Id, node2Id) {
//   const node1 = document.getElementById(node1Id);
//   const node2 = document.getElementById(node2Id);

//   if (!isInvalidSwap(node1, node2)) {
//     const node1Clone = node1.cloneNode(true);
//     const node2Clone = node2.cloneNode(true);
//     const node1Parent = node1.parentNode;
//     const node2Parent = node2.parentNode;

//     node1Parent.replaceChild(node2Clone, node1);
//     node2Parent.replaceChild(node1Clone, node2);
//     return true;
//   }
// }

// function isInvalidSwap(node1, node2) {
//   return ((!node1 || !node2) ||
//           (node1.contains(node2) || node2.contains(node1)));
// }

/*
input: two element ids
output: true for valid swaps, undefined for invalid

Example: If one of the attributes does not exist
then return undefined

If at least one of the nodes is a child of the other
then undefined should be returned as well

Mental Model: Need a way of keeping tabs of the locations
of the two nodes.

Create two guard clauses

Could potentially record parent element and next element sibling of each
node to keep track of its place within the DOM tree
*/

// Book solution

// document.addEventListener("DOMContentLoaded", () => {
//   function swapNodes(firstId, secondId) {
//     let firstNode = document.getElementById(String(firstId));
//     let secondNode = document.getElementById(String(secondId));

//     if (!firstNode || !secondNode) {
//       return;
//     }

//     if (firstNode.contains(secondNode) || secondNode.contains(firstNode)) {
//       return;
//     }

//     let firstNodeParent = firstNode.parentElement;
//     let secondNodeParent = secondNode.parentElement;
//     let firstNodeClone = firstNode.cloneNode(true);
//     let secondNodeClone = secondNode.cloneNode(true);

//     firstNodeParent.replaceChild(secondNodeClone, firstNode);
//     secondNodeParent.replaceChild(firstNodeClone, secondNode);

//     return true;
//   }
// });

// Another solution (improved over first)

function nodeSwap(id1, id2) {
  let element1 = document.getElementById(id1);
  let element2 = document.getElementById(id2);

  if (!element1 || !element2) return;

  if (element1.contains(element2) || element2.contains(element1)) return;

  let nextSibling1 = element1.nextElementSibling;
  let nextSibling2 = element2.nextElementSibling;

  let parent1 = element1.parentElement;
  let parent2 = element2.parentElement;

  if (!nextSibling1) {
      parent1.append(element2);
  } else {
      parent1.insertBefore(element2, nextSibling1);
  }

  if (!nextSibling2) {
      parent2.append(element1);
  } else {
      parent2.insertBefore(element1, nextSibling2);
  }
}