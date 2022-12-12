// todo: 문제: 두 수(num1, num2)를 입력받아, num1를 num2로 나눈 나머지를 리턴해야 합니다.
// * 입력:(25, 4)
// * 출력: 1
// ! 주의사항: 나눗셈(/), 나머지(%) 연산자 사용은 금지됩니다.
// ! 주의사항: 0은 어떤 수로 나누어도 나머지가 0입니다.
// ! 주의사항: 어떤 수도 0으로 나눌 수 없습니다. 이 경우 'Error: cannot divide by zero'를 리턴해야 합니다.

function modulo(num1, num2) {
  let result = 0;
  if (num2 === 0) return "Error: cannot divide by zero";
  for (i = num2; i < num1; i += num2) {
    result = num1 - i;
  }
  return result;
}

let output = modulo(25, 4);
console.log(output); // --> 1
