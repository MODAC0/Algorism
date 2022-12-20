// todo: 아래와 같이 정의된 피보나치 수열 중 n번째 항의 수를 리턴해야 합니다.
// 0번째 피보나치 수는 0이고, 1번째 피보나치 수는 1입니다. 그 다음 2번째 피보나치 수부터는 바로 직전의 두 피보나치 수의 합으로 정의합니다.
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...

// * 입력: let output = bubbleSort([2, 1, 3])
// * 출력: console.log(output); // --> [1, 2, 3]
// ! 주의사항: 재귀함수를 이용해 구현해야 합니다.
// ! 주의사항: 반복문(for, while) 사용은 금지됩니다.
// ! 주의사항: 함수 fibonacci가 반드시 재귀함수일 필요는 없습니다.

// 메모이제이션 = 필요한 값들을 배열에 저장하는 식으로 메모리 효율을 높이는 방법

function fibonacci(n) {
  let memo = [0, 1];
  const aux = (n) => {
    if (memo[n] !== undefined) return memo[n];
    else return (memo[n] = aux(n - 1) + aux(n - 2));
  };
  return aux(n);
}
let output = fibonacci(0);
console.log(output); // --> 0

output = fibonacci(1);
console.log(output); // --> 1

output = fibonacci(5);
console.log(output); // --> 5

output = fibonacci(9);
console.log(output); // --> 34
