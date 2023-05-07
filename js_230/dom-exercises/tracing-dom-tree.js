/*
input: an integer
output: a 2D array
First nested arr contains the element and its siblings
Following nested arrs contain the parent(s) of the element and their siblings

Examples: Each nested arr should have the string value of the tagName
property for each element in the arrays

Data Structure: create variable for target element (get by Id)
              - create subfunction for finding siblings of an
              element
              - while loop necessary to traverse all the way
              up to article (end at body)
              - Keep track of tagName property of the elements
              you are traversing, and either push or map
              to an array

Algorithm: Find targetElement by id
            - find siblings of targetElement
              - filter siblings to not include text nodes
            
            - start an empty parentsArray
            - create a currentElement variable set to the parent
            Element of the target element

            - while the currentElement's tag name is not equal
            to body
              - push the element to the parentsArray
              - reassign currentElement to the parent of the current
              element
            
            - map each element of parentsArray to subArrays that
            are all of their respective siblings. Map siblings to their
            tagNames

            create newArray with found siblings of current element in first
            subArray, with all subArrays following being the subArrs
            in parentsArray

*/

function domTreeTracer(elementId) {
  let targetNode = document.getElementById(elementId);
  let siblingsOfTarget = findSiblingsNoText(targetNode);
  let parentsArr = findParentsOf(targetNode);

  let siblingsOfParents = parentsArr.map(node => findSiblingsNoText(node));


  let allSiblings = [siblingsOfTarget].concat(siblingsOfParents);

  return allSiblings.map(subArr => {
    return subArr.map(node => node.tagName);
  });
}

function findParentsOf(node) {
  if (!node.parentNode) {
    return [];
  }

  let parent = node.parentNode;
  let parentsArr = [];

  while (parent.tagName !== "BODY") {
    parentsArr.push(parent);
    parent = parent.parentNode;
  }

  return parentsArr;
}

function findSiblingsNoText(node) {
  let parent = node.parentNode;
  let siblings = parent.childNodes;

  return [].slice.call(siblings).filter(node => node.nodeType !== 3) || [];
}