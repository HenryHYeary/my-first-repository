/*
input: no arguments
output: a nested array representation of the DOM

Examples: - Body will always be the first element
          - Body is on one dimension
            - Dimensions increment by 1
            for every level of a parent child relationship
            - Bracket levels should always match the number
            of nested relationships present.
          
          - Children are present in nested array (second element)
            - siblings possible after body
              - Each will have their own "tree"

Data Structure: Create a function that simply traverses up a single dom
tree until it reaches a null value for the children present.

Plan on implementing this function recursively and keep adding to the 
resultArray in the format ["PARENT_TAG_NAME", [children]]

Plan on mapping elements inside arrays to tagNames during this process

Mental Model: Check if the parent element has children


Algorithm: Start with body element

*/

// Recursive solution
function nodesToArr(node = document.body) {
  let childElements = [].slice.call(node.children).map(nodesToArr);

  return [
    node.tagName,
    childElements
  ]
}

// Book solution
function nodesToArr() {
  const nodesArray = ['BODY', formatNodes([].slice.call(document.body.children))];
  let currentParentNodes = nodesArray[1];

  while (anyChildren(currentParentNodes)) {
    currentParentNodes = getNextGenerationParents(currentParentNodes);
  }

  getNextGenerationParents(currentParentNodes);

  return nodesArray;
}

function getNextGenerationParents(currentParentNodes) {
  let newParentNodes = [];
  currentParentNodes.forEach((parentNode, index, parentNodes) => {
    parentNodes[index] = appendChildren(parentNode);
    if (parentNodes[index][1].length > 0) {
      newParentNodes = newParentNodes.concat(parentNodes[index][1]);
    }
  });

  return newParentNodes;
}

function anyChildren(parentNodes) {
  for (let index = 0; index < parentNodes.length; index++) {
    if (parentNodes[index][0].children.length > 0) {
      return true;
    }
  }

  return false;
}

function appendChildren(parentNode) {
  const children = formatNodes([].slice.call(parentNode[0].children));
  parentNode[0] = parentNode[0].tagName;
  parentNode.push(children);
  return parentNode;
}

function formatNodes(nodes) {
  return nodes.map(node => [node]);
}