
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