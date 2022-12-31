// todo: 문제:
// * 입력:
// * 출력:
// ! 주의사항:

function solution(num, total) {
  var answer = [];
  // num = answer.length
  // 3,15 => 5,5,5
  // 4,5,6
  //  4,14 => 4,4,4,4
  // Math.ceil(total/num)-Math.floor(n/2) = 초기값
  let initialValue = Math.ceil(total / num) - Math.floor(num / 2);
  for (let i = 0; i < num; i++) {
    answer.push(initialValue);
    initialValue++;
  }
  // 2,3,4,5
  return answer;
}
console.log(solution(3, 12));
console.log(solution(5, 15));
