function solution(arr) {
  const answer = [];
  arr.forEach((x, i) => {
    if (arr[i] !== arr[i + 1] || answer.includes(x) === undefined)
      answer.push(x);
  });
  return answer;
}

console.log(solution([1, 1, 3, 3, 0, 1, 1]));
console.log(solution([4, 4, 4, 3, 3]));
