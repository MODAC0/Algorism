function solution(box, n) {
  return box.map((x) => Math.floor(x / n)).reduce((y, z) => y * z);
}

console.log(solution([10, 8, 6], 3));
