// todo: 문제:
// * 입력:
// * 출력:
// ! 주의사항:

// 근사값 = 원래 숫자 / 2
// 만약 근사값의 2제곱이 원래숫자와 다르면 근사값 = (근사값 + (원래 숫자 / 근사값)) / 2

function computeSquareRoot(num) {
  let halfNum = num / 2; // 3
  while (halfNum ** 2 !== num) {
    // 9 !== 6
    if (Number((halfNum ** 2).toFixed(2)) === num) break;
    halfNum = (halfNum + num / halfNum) / 2; // 5/2 => 2.5
  }
  return Number(halfNum.toFixed(2));
}

let output = computeSquareRoot(9);
console.log(output); // --> 3

output = computeSquareRoot(6);
console.log(output); // --> 2.45
