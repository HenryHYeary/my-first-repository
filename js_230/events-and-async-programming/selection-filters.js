/*
input: a click event on a specific dropdown option
output: a new display of options on the other other end
that match the classification or animal name of the original selection

Example: As a selection gets more specific there should be less and less
options available for the user to select from. The clear button should
remove all restraints and bring up the original selection again

Data Structure: Should create two objects that contain the corresponding
information about classes that match specific animals, and animals that match
specific classes

Add event listeners on each of the elements inside of the arrays, that will toggle
the hidden attribute for the other list of values

Algorithm: Create the objects/hashes to match the correct classifications and animals
to their right corresponding values.
  - create array like objects that store the option elements and convert these array like
  objects into arrays to operate from later

  - Add an event listener to each element in the array, that will toggle the hidden attribute
  on each of the rest of the elements in the corresponding array to that elements name
  in its classification or animal object
    - Create a function that will unhide all selections, and reset the user from the beginning
*/

// Try to come back to this one

const CLASSIFICATION_OPTIONS = {
  "Vertebrate": ["Bear", "Turtle", "Whale", "Salmon", "Ostrich"],
  "Warm-blooded": ["Bear", "Whale", "Ostrich"],
  "Cold-blooded": ["Salmon", "Turtle"],
  "Mammal": ["Bear", "Whale"],
  "Bird": ["Ostrich"]
};

const ANIMALS = {
  'Bear': ['Vertebrate', 'Warm-blooded', 'Mammal'],
  'Turtle': ['Vertebrate', 'Cold-blooded'],
  'Whale': ['Vertebrate', 'Warm-blooded', 'Mammal'],
  'Salmon': ['Vertebrate', 'Cold-blooded'],
  'Ostrich': ['Vertebrate', 'Warm-blooded', 'Bird'],
};

// function unhideAll(animals, classifications) {
//   [animals, classifications].forEach(selection => {
//     [...selection.children].forEach(option => {
//       option.removeAttribute("hidden");
//     })
//   });
// }

// document.addEventListener("DOMContentLoaded", () => {
//   const classifications = document.getElementById("animal-classifications");
//   const animals = document.getElementById("animals");

//   function hideOptions(targetValue, selectionType) {
//     unhideAll(animals, classifications);
//     let matchingOptions;

//     if (selectionType.id === "animals") {
//       matchingOptions = CLASSIFICATION_OPTIONS[targetValue];
//     } else if (selectionType.id === "animal-classifications") {
//       matchingOptions = ANIMAL_OPTIONS[targetValue];
//     }

//     [...selectionType.children].forEach(selectionOption => {
//       if (!matchingOptions.includes(selectionOption.value)) {
//         selectionOption.setAttribute("hidden", "true");
//       }
//     });
//   }

//   classifications.addEventListener("change", event => {
//     hideOptions(event.target.value, animals);
//   });

//   animals.addEventListener("change", event => {
//     hideOptions(event.target.value, classifications);
//   });
// });

// Better solution

document.addEventListener("DOMContentLoaded", () => {
  let animalClassifications = document.querySelector("#animal-classifications");
  let animals = document.querySelector("#animals");
  let clearButton = document.querySelector("#clear");
  let options = document.querySelectorAll("option");

  function unhideAll() {
      for (let index = 0; index < options; index++) {
          options[index].removeAttribute("hidden");
      }
  }

  function unhideSelect(select) {
      for (let index = 0; index < select.children.length; index++) {
          select.children[index].removeAttribute("hidden");
      }
  }

  animalClassifications.addEventListener("change", event => {
      unhideSelect(animals);
      let selected = animalClassifications.value;

      for (let index = 0; index < animals.children.length; index++) {
          let currentOption = animals.children[index];
          if (!CLASSIFICATION_OPTIONS[selected].includes(currentOption.value)) {
              currentOption.setAttribute("hidden", "true");
          }
      }
  });

  animals.addEventListener("change", event => {
      unhideSelect(animalClassifications)
      let selected = animals.value;

      for (let index = 0; index < animalClassifications.children.length; index++) {
          let currentOption = animalClassifications.children[index];
          if (!ANIMALS[selected].includes(currentOption.value)) {
              currentOption.setAttribute("hidden", "true");
          }
      }
  })

  clearButton.addEventListener("click", (event) => {
      unhideAll();
  });
});