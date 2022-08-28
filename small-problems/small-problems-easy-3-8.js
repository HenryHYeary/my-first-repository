
// input: three test scores (integers)
// output: Letter grade representing average grade on tests (string)

//Examples: Letter grade should be capitalized, no need to check for negative values or vals greater than 100
// Data structures: should create a separate variable for the mean score to use with comparisons.
// Algorithm: should use && comparisons within an if statement to determine the grade.

function getGrade (score1, score2, score3) {
  let totalScore = score1 + score2 + score3;
  let meanScore = totalScore / 3;

  if (meanScore >= 90 && meanScore <= 100) {
    return 'A';
  } else if (meanScore >= 80 && meanScore < 90) {
    return 'B';
  } else if (meanScore >= 70 && meanScore < 80) {
    return 'C';
  } else if (meanScore >= 60 && meanScore < 70) {
    return 'D';
  } else {
    return 'F';
  }
}


console.log(getGrade(95, 90, 93));
console.log(getGrade(50, 50, 95));