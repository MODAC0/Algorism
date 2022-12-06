function convertScoreToGradeWithPlusAndMinus(score) {
  if (score <= 100) {
    if (score > 97) return "A+";
    else if (score < 94) return "-A";
    else return "A";
  } else if (score < 90) {
    if (score > 87) return "B+";
    else if (score < 84) return "-B";
    else return "B";
  } else if (score < 80) {
    if (score > 87) return "C+";
    else if (sCore < 74) return "-C";
    else return "C";
  } else if (score < 70) {
    if (score > 67) return "C+";
    else if (score < 64) return "-D";
    else return "D";
  } else if (score < 60 || score > 0) return "F";
  else return "INVALID SCORE";
}
let output = convertScoreToGradeWithPlusAndMinus(91);
console.log(output); // --> 'A-'

output = convertScoreToGradeWithPlusAndMinus(100);
console.log(output); // --> 'A-'
