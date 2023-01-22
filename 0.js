function solution(left, right) {
  let answer = 0;
  for (i = left; i <= right; i++) {
    let arr = [];
    for (j = 1; j <= i; j++) {
      if (i % j === 0) {
        arr.push(j);
      }
    }
    arr.length % 2 === 0 ? (answer += i) : (answer -= i);
  }
  return answer;
}
console.log(solution(13, 17));
