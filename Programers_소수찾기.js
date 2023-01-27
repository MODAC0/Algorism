function solution(n) {
  let answer = new Set();
  for (let i = 1; i <= n; i += 2) {
    answer.add(i);
  }
  answer.delete(1);
  answer.add(2);
  for (let j = 3; j < Math.sqrt(n); j++) {
    if (answer.has(j)) {
      for (let k = j * 2; k <= n; k += j) {
        answer.delete(k);
      }
    }
  }
  return answer.size;
}

console.log(solution(10)); // 4
console.log(solution(5)); // 3
