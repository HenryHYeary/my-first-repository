
function generateUIUD() {
  let characters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
  let sections = [8, 4, 4, 4, 12];

  let uiud = '';
  sections.forEach((section, sectionIndex) => {
    for (let i = 0; i < section; i++) {
      let randomIndex = Math.floor(Math.random() * characters.length);
      uiud += characters[randomIndex];
    }

    if (sectionIndex < sections.length - 1) {
      uiud += '-';
    }
  });

  return uiud;
}

console.log(generateUIUD());
console.log(generateUIUD());
console.log(generateUIUD());