/*
input: a nested array of tag elements that represents the output dom tree
output: elements nested in the same structure as the the original
dom array however in dom tree format.

Examples:
What is the most important base case to recursively consider here?
When there are no more children (childNodes or children property is null)
stop calling the original function

Simplest case is no children
Next step up involves relating the return values => all children will be
parents until they are not


BASE CASE: [BODY, []]
A simple body
return value is the created body element

NEXT CASE UP: [BODY, [ARTICLE, []]]
document.createElement(arr[0])
keep going until arr[1] length is equal to 0
return value is the body element with nested article element


Data Structure: Should keep a variable assigned to the domTree
that will expand outwards with recursive function
  - add children using appendChild

Algorithm: check to see if arr[1] is an empty array
          if it is then return the element
*/

function arrayToNodes(nodesArr) {
  let parent = document.createElement(nodesArr[0])
  let children = nodesArr[1];

  if (children.length === 0) {
    return parent;
  } else {
    for (let index = 0; index < children.length; index++) {
      parent.appendChild(arrayToNodes(children[index]));
    }
  }

  return parent;
}