function convertScoreToGrade(score) {
  const num = ~~(score / 10);
  if (num === 9) return "A";
  else if (num === 8) return "B";
  else if (num === 7) return "C";
  else if (num === 6) return "D";
  else if (num <= 5 || num >= 0) return "F";
  else return "INVALID SCORE";
}

let output = convertScoreToGrade(91);
console.log(output); // --> 'A'

output = convertScoreToGrade(44);
console.log(output); // --> 'A'

output = convertScoreToGrade(81);
console.log(output); // --> 'A'

output = convertScoreToGrade(59);
console.log(output); // --> 'A'
