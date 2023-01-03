// todo: 문제: 두 수를 입력받아 거듭제곱을 리턴해야 합니다.
// * 입력: (base >= 2) / (exponent >= 0)
// * 출력:실제 계산 결과를 94,906,249로 나눈 나머지를 리턴해야 합니다.
// ! 주의사항: 시간복잡도 O(logN)을 만족해야 합니다.
function power(base, exponent) {
  if (exponent === 0) return 1;

  const half = parseInt(exponent / 2);
  const temp = power(base, half);
  const result = (temp * temp) % 94906249;

  if (exponent % 2 === 1) return (base * result) % 94906249;
  else return result;
}

console.log(power(3, 40));
console.log(power(5, 9));
console.log(power(13, 121));
