// 하향식 DP는 재귀 + 메모이제이션을 적용한 알고리즘이다.
function coinChange(coins, amount) {
  // amount보다 작거나 같은 값들을 coins로 만들 수 있는 최소한의 수를 저장하는 객체
  let memo = {};
  const max = amount + 1;
  // amount를 coin의 요소로 만들 수 있는 최소한의 동전 개수를 구하는 재귀를 위한 함수
  function minCoins(n) {
    // 탈출조건 => n === 0 return 0
    if (n === 0) return 0;
    if (n < 0) return max;
    // memo에 n에 대한 값이 있으면 그 값을 바로 반환
    if (memo[n]) return memo[n];
    else {
      let min = max;
      for (let coin of coins) {
        min = Math.min(min, minCoins(n - coin) + 1);
      }
      memo[n] = min;
      return memo[n];
    }
  }
  let answer = minCoins(amount);
  return answer === max ? -1 : answer;
}

console.log(coinChange([1, 2, 5], 11));
