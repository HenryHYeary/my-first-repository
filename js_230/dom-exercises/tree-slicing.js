/*
input: two integers, startIdx and endIdx
  - startIdx is the parent node's id attribute
  - endIdx is the innermost child node's id attribute
output: an array of tagNames

Examples: 
  - Similar to slice but different because slice isn't inclusive
  on right hand side
  - endIdx does not have to be the id of the innermost child node
  - Only consider element nodes
  - Only elements that have body as an ancestor are sliceable
  - if the id attribute of the start index is not in the DOM,
  return undefined
  - if the slice is not feasible (no path connecting the element at the
  startIdx to the endIdx) return undefined

Data Structure: find the parent element as the element at the id of the
              first argument
              - let the end of the chain be the element found at
              endIdx
              - use a while loop that terminates either when the
              target element is found or when body is found
              in the tagNames

Algorithm: - instantiate parentElement (getElementById(firstArg))
           - instantiate targetChild  (getElementById(secondArg))

           - store targetChildTagName

           - create sliceArr (empty arr)

          - instantiate currentElement equal to parentElement

          - while the tagName of the current element is not "HTML"
          and the tagName of the current element is not the targetChild's
          tagName
            - push the tagName of the current element to the sliceArr

          - check the last element of the sliceArr. If it is "BODY"
            - return undefined
          - else
            - push the targetChildTagName to the sliceArr
            - return the sliceArr
*/

// function sliceTree(startIdx, endIdx) {
//   let parentElement = document.getElementById(startIdx);
//   let targetChild = document.getElementById(endIdx);

//   if (!parentElement || !targetChild) return undefined;

//   let parentTagName = parentElement.tagName;

//   let sliceArr = [];

//   let currentElement = targetChild;

//   while (currentElement.tagName !== "HTML" &&
//         currentElement.tagName !== parentTagName) {
//           sliceArr.push(currentElement.tagName);
//           currentElement = currentElement.parentNode;
//           if (!currentElement) return undefined;
//         }

//   if (sliceArr[sliceArr.length - 1] === "BODY") return undefined;

//   sliceArr.push(parentTagName);
  
//   return sliceArr.reverse();
// }

// Other personal solution

/*
input: a start index and an end index
output: an array of tagNames representing the elements
within the slice

Examples: the first element must be a parent of the second
or a parent of the parent of the second for the slice to be valid.
We only care about element nodes.
Can only slice if the element is a child of body.
If either of the elements do not exist then return undefined.

Data Structure: create a guard clause for if there is no parent child
relationship. Create another guard clause for if the element is not
a child of document.body. Create a guard clause for if either do not
exist.
Finally create an array to store all of the element tagNames.

Algorithm: Push the tagName of the parent element
            into the array, then get an array of the children
            of the parent and filter out the element that contains
            the target child element.

            do this until the last child element is reached
*/

function sliceTree(startIdx, endIdx) {
  let parentElement = document.getElementById(String(startIdx));
  let childElement = document.getElementById(String(endIdx));

  let slicedArr = [];

  if (!parentElement || !childElement) return;

  if (!document.body.contains(parentElement) || !document.body.contains(childElement)) return;

  if (!parentElement.contains(childElement)) return;


  while (parentElement) {
      slicedArr.push(parentElement.tagName);
      parentElement = [...parentElement.children].find(child => child.contains(childElement));
  }

  return slicedArr;
}