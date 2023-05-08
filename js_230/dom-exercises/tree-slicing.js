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

function sliceTree(startIdx, endIdx) {
  let parentElement = document.getElementById(startIdx);
  let targetChild = document.getElementById(endIdx);

  if (!parentElement || !targetChild) return undefined;

  let parentTagName = parentElement.tagName;

  let sliceArr = [];

  let currentElement = targetChild;

  while (currentElement.tagName !== "HTML" &&
        currentElement.tagName !== parentTagName) {
          sliceArr.push(currentElement.tagName);
          currentElement = currentElement.parentNode;
          if (!currentElement) return undefined;
        }

  if (sliceArr[sliceArr.length - 1] === "BODY") return undefined;

  sliceArr.push(parentTagName);
  
  return sliceArr.reverse();
}