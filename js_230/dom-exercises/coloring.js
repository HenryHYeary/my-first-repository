/*
input: a non-negative integer
output: coloring for the generation specified by the
input integer

Examples: Generations are based on indentation
          - Does this mean they are necessarily based on
          a nest structure as well?
          - Looks like the same relative position compared
          to the parent element is what the indentation is based off of
          - In this structure 1 is only the article at the top
            - generations are based on levels of childNodes
            - what to do when no direct children of article?
*/

// function colorGeneration(targetGeneration) {
//   let generation = 0;
//   let parents = [document.body];
//   let elements;

//   while (generation < targetGeneration) {
//     generation += 1;
//     elements = getAllChildrenOf(parents);
//     parents = elements;
//   }

//   if (elements) {
//     color(elements);
//   }
// }

// function color(elements) {
//   elements.forEach(({classList}) => {
//     classList.add("generation-color");
//   })
// }

// function getAllChildrenOf(parents) {
//   return parents.map(({children}) => [].slice.call(children))
//                                               .reduce((collection, children) => collection.concat(children), []);
// }

/*
input: a non-negative integer
output: coloring for the specific blocks in a 
generation of elements

Examples: Looks like generation colors are based off of indentation
in HTML structure.

Toggle generation color for every element that is in line with the
specific level of indentation provided.

Data Structure: Need to access the children of each parent element.

*/

function colorGeneration(colorId) {

}