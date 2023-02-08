/** 팀장은 자신보다 먼저 출근해 있는 직원들에게 구매한 빼빼로를 전부 나누어 주려고 합니다.
단, 서로 질투하는 경우를 만들지 않기 위해 모든 직원들에게 공평하게 빼빼로를 나누어 주려고 합니다.
직원들은 각각의 빼빼로를 똑같은 개수만큼 받아야 합니다. 빼빼로를 쪼개서 줄 수는 없습니다.

하지만 회사에 도착하기 전이라 몇 명의 직원들이 있는지 모르는 상황입니다.
팀장이 아몬드 빼빼로를 4개, 누드 빼빼로를 8개를 구매 했다면, 다음과 같이 세 가지 방법으로 나누어 줄 수 있습니다.

출근한 직원이 1명이라면 아몬드 빼빼로 4개와 누드 빼빼로 8개를 줄 수 있습니다.
출근한 직원이 2명이라면 아몬드 빼빼로 2개와 누드 빼빼로 4개를 각각 줄 수 있습니다.
출근한 직원이 3명이라면 빼빼로를 남기지 않고 공평하게 주는 방법은 없습니다.
출근한 직원이 4명이라면 아몬드 빼빼로 1개와 누드 빼빼로 2개를 각각 줄 수 있습니다.
팀장은 출근한 직원 수에 따라 어떻게 빼빼로를 나누어 줄지 고민하고 있습니다.
여러분이 직원 수에 따라 빼빼로를 나누어 주는 방법을 구하는 솔루션을 제공해 주세요.

 */

function divideChocolateStick(M, N) {
  // TODO: 여기에 코드를 작성합니다.
  // 빼빼로를 받는 직원의 수 = M,N의 공약수 / M,N 중 작은 수
  function gcd(m, n) {
    if (m % n === 0) return n;
    return gcd(n, m % n);
  }

  const result = []; // 리턴할 2차원 배열
  const GCD = gcd(M, N); // 최대공약수

  // 시간복잡도를 줄이기 위해 반복문은 제곱근까지만 돌리기
  // (제곱근보다 큰 약수) = GCD / (제곱근보다 작은 약수)
  const sqrt = Math.floor(Math.sqrt(GCD)); // 제곱근

  for (let left = 1; left <= sqrt; left++) {
    // 최대공약수의 약수인 경우 중 제곱근 보다 작은 약수의 경우
    if (GCD % left === 0) {
      result.push([left, M / left, N / left]);

      // 제곱근이 아닌 경우(제곱근 보다 작은 경우)
      if (left * left < GCD) {
        right = GCD / left; // 나머지 약수들 구하기
        result.push([right, M / right, N / right]);
      }
    }
  }
  return result.sort((x, y) => x[0] - y[0]);
}

let M = 4;
let N = 8;
let output = divideChocolateStick(M, N);
console.log(output);
// [[1, 4, 8], [2, 2, 4], [4, 1, 2]]
