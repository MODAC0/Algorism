function solution(lines) {
  let sorted = lines.sort((a, b) => {
    if (a[0] > b[0]) return 1;
    if (a[0] < b[0]) return -1;
  });
  let minNum = sorted[0][0];
  if (minNum < 0) lines = lines.map((x) => x.map((y) => y + Math.abs(minNum)));
  let answer = [];
  for (let i = 0; i < lines.length; i++) {
    for (let j = lines[i][0]; j < lines[i][1]; j++) {
      if (answer[j] === undefined) {
        answer[j] = 1;
      } else answer[j]++;
    }
  }
  return answer.filter((el) => el >= 2).length;
}

console.log(
  solution([
    [0, 1],
    [2, 5],
    [3, 9],
  ])
);
console.log(
  solution([
    [-1, 1],
    [1, 3],
    [3, 9],
  ])
);
console.log(
  solution([
    [0, 5],
    [3, 9],
    [1, 10],
  ])
);
