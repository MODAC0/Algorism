function solution(k, tangerine) {
  let result = 0;
  let kind = {};
  // 귤의 크기가 키, 크기 별 귤들의 합이 값이 되는 객체
  tangerine.forEach((e) => (kind[e] = ++kind[e] || 1));
  kind;
  // 종류의 합을 오름차 순으로 정렬
  const arr = Object.values(kind).sort((a, b) => b - a);
  arr;
  let total = 0;
  // 종류의 합을 더할 때 k를 만족하면 더한 횟수 result를 반환
  for (num of arr) {
    result++;
    total += num;
    if (total >= k) break;
  }
  return result;
}

console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3]));
console.log(solution(4, [1, 3, 2, 5, 4, 5, 2, 3]));
console.log(solution(2, [1, 1, 1, 1, 2, 2, 2, 3]));
