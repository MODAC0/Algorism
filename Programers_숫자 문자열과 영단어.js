// todo: 문제:
// * 입력:
// * 출력:
// ! 주의사항:

function solution(s) {
  let result = s;
  const arr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  arr.forEach((element, index) => {
    if (result.includes(element)) {
      result = result.replaceAll(element, index);
    }
  });
  return parseInt(+result);
}

console.log(solution("one4seveneight"));
console.log(solution("23four5six7"));
console.log(solution("2three45sixseven"));
console.log(solution("123"));
