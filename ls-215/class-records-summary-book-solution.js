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
  let scoreData = Object.keys(scores).map(student => scores[student].scores);
  let examData = scoreData.map(score => score.exams);

 return {
    studentGrades: scoreData.map(scoreObj => getStudentScore(scoreObj)),
    exams: getExamSummary(examData)
 };
}

function getStudentScore(scoreObj) {
  let examData = scoreObj.exams;
  let exerciseData = scoreObj.exercises;
  let examAvg = getAverage(examData);
  let exercisePoints = getPointsSum(exerciseData);
  let finalScore = getFinalGrade(examAvg, exercisePoints);
  let letterGrade = getLetterGrade(finalScore);
  return `${finalScore} (${letterGrade})`;
}

function getAverage(scores) {
  let totalOfScores = scores.reduce((sum, next) => sum + next);
  return totalOfScores / scores.length;
}

function getPointsSum(exercises) {
  return exercises.reduce((sum, next) => sum + next);
}

function getLetterGrade(finalScore) {
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

function getFinalGrade(examAvg, exercisePoints) {
  return Math.round(examAvg * 0.65 + exercisePoints * 0.35);
}

function getExamMinimum(examRow) {
  return examRow.reduce((min, next) => (min <= next ? min : next));
}

function getExamMaximum(examRow) {
  return examRow.reduce((max, next) => (max >= next ? max : next));
}

function getExamSummary(examData) {
  let dataByExam = transpose(examData)
  return dataByExam.map(examRow => {
    return {
      average: parseFloat(getAverage(examRow).toFixed(1)),
      minimum: getExamMinimum(examRow),
      maximum: getExamMaximum(examRow),
    }
  })
}


function transpose(array) {
  return array[0].map((col, columnIdx) => {
    return array.map(row => row[columnIdx]);
  })
}

const log = console.log
log(generateClassRecordSummary(studentScores));
// log(transpose([
//     [ 90, 95, 100, 80 ],
//     [ 50, 70, 90, 100 ],
//     [ 88, 87, 88, 89 ],
//     [ 100, 100, 100, 100 ],
//     [ 50, 80, 60, 90 ]
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