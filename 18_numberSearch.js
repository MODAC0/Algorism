// todo: 문제: 문자열에서 숫자를 모두 찾아 더한 뒤 해당 값을 (숫자와 공백을 제외한 나머지) 문자열의 길이로 나눈 값 반올림
// * 입력:
// * 출력:
// ! 주의사항: 숫자(digit)는 연속해서 등장하지 않습니다.

function numberSearch(str) {
  // 문자열에서 숫자를 찾고
  // 모두 더한다
  const a = [];
  const b = [];
  for (el of str) {
    +el ? a.push(+el) : b.push(el);
  }
  const devidingUp = a.reduce((pre, cur) => (pre += cur));
  const devidingBy = b.filter((el) => el !== " ").length;
  return Math.round(devidingUp / devidingBy);
}

let output = numberSearch("Hello6 ");
console.log(output); // --> 1

output = numberSearch("Hello6 9World 2,");
console.log(output); // --> 2

output = numberSearch("Hello6 9World 2, Nic8e D7ay!");
console.log(output); // --> 2
