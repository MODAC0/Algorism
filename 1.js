/*  
todo 문제
! 주의사항
**/
function solution(sizes) {
  const widthArr = sizes
    .map((el) => el.sort((a, b) => a - b))
    .map((el) => el[0]);
  const heightArr = sizes
    .map((el) => el.sort((a, b) => a - b))
    .map((el) => el[1]);
  return Math.max(...widthArr) * Math.max(...heightArr);
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
); // 4000
console.log(
  solution([
    [10, 7],
    [12, 3],
    [8, 15],
    [14, 7],
    [5, 15],
  ])
); // 120
console.log(solution[([14, 4], [19, 6], [6, 16], [18, 7], [7, 11])]); // 133
