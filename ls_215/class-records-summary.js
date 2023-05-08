/*
input: an object containing grade information for five students. Each obj
has a unique id number, as well as a property of scores that is a nested object
with two properties, one for exams and one for exercises.
output: an object that contains a property with the rounded integer grade of each student
follwed by their final letter grade in parentheses.
The other property on the object is an array of exam score information for each exam 
with an average score, a minimum socre, and a maximum score.

Examples: For this particular course there will be four exams and five exercises.
Exams have a weigth of 65% while exercises have a wight of 35%.
The total maximum for exercises in any term is always 100.
Percent grade is rounded to the nearest integer.
Letter grade needs to be matched with percentage score.

Data Structure: First need to create functions to calculate the students score
based off of student object information.
1. Compute average exam score
2. Compute total exercise score
3. Apply weights to the final percentage grade.
4. Round percentage grade to nearest int
5. Determine letter grade
6. Format into a string with percentage and letter grade included.

After this map all of these final grade strings to each student object and
set student grades property to that array on return object.

Next calculate average scores on each exam, take into account the min and max scores
and set the correct properties for each exam object within the final exams array.

Algorithm: Average out the exam score array for each individual student (use reduce)
Determine the exercise grade by simply adding together each exercise grade (also reduce)
Apply weights to the two different scores and add them together to get the final score
Round up the final percentage grade.
Define function to assign int grade to letter grade (determine range).
Define function to make final grade string

Add together all exam scores and create an average rounding to one decimal point.
make note of all mins and maxes and then create the objects in the array progressively.
Should create exam score arrays based on their indexes before doing this process.

Define return object with two correct arrays and return the object from the main function.
*/

let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

function generateClassRecordSummary(scores) {
  let studentGrades = Object.values(scores).map(obj => {
    let avgExamScore = determineAverage(obj['scores']['exams']);
    let exercisesPoints = determinePointsSum(obj['scores']['exercises']);
    let finalScore = determineIntFinalScore(avgExamScore, exercisesPoints);
    let letterGrade = determineLetterGrade(finalScore);
    return gradeString(finalScore, letterGrade);
  });

  let scoresPerStudent = Object.values(scores).map(obj => {
    return obj['scores']['exams'];
  });

  let scoresPerExam = rotateMatrix90Degrees(scoresPerStudent);
  let exams = scoresPerExam.map(subArr => {
    return { average: Number(determineAverage(subArr).toFixed(1)),
              minimum: Math.min(...subArr),
              max: Math.max(...subArr)
            }
  });

  return { studentGrades, exams };
}

function determineAverage(exams) {
  let totalScores = exams.reduce((sum, next) => sum + next);

  return (totalScores / exams.length);
}

function determinePointsSum(exercises) {
  return exercises.reduce((sum, next) => sum + next);
}

function rotateMatrix90Degrees(nestedArr) {
  let newOuterArr = [];
  for (let outerIndex = 0; outerIndex < nestedArr.length; outerIndex++) {
    let newSubArr = nestedArr.map((subArr) => {
      return subArr.filter((score, index) => index === outerIndex);
    }).flat();

    newOuterArr.push(newSubArr);
  }

  return newOuterArr.filter(subArr => subArr.length !== 0);
}

function determineIntFinalScore(examScore, exerciseScore) {
  return Math.round((examScore * 0.65) + (exerciseScore * .35));
}

function determineLetterGrade(finalScore) {
  if (finalScore >= 93 && finalScore <= 100) {
    return 'A';
  } else if (finalScore >= 85 && finalScore <= 92) {
    return 'B';
  } else if (finalScore >= 77 && finalScore <= 84) {
    return 'C';
  } else if (finalScore >= 69 && finalScore <= 76) {
    return 'D';
  } else if (finalScore >= 60 && finalScore <= 68) {
    return 'E';
  } else {
    return 'F';
  }
}

function gradeString(finalScore, letterGrade) {
  return `${finalScore} (${letterGrade})`;
} 

const log = console.log;
// console.log(determineAverage([90, 95, 100, 80]));
// console.log(determinePointsSum([20, 15, 10, 19, 15]));
// log(determineIntFinalScore(91.25, 79));
// log(determineLetterGrade(87));
// log(gradeString(87, 'B'));

log(generateClassRecordSummary(studentScores));
// log(rotateMatrix90Degrees([
//   [ 90, 95, 100, 80 ],
//   [ 50, 70, 90, 100 ],
//   [ 88, 87, 88, 89 ],
//   [ 100, 100, 100, 100 ],
//   [ 50, 80, 60, 90 ]
// ]));

// returns:
// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }