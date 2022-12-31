// todo: 문제: 점 네 개의 좌표를 담은 이차원 배열  dots가 다음과 같이 매개변수로 주어집니다. 주어진 네 개의 점을 두 개씩 이었을 때, 두 직선이 평행이 되는 경우가 있으면 1을 없으면 0을 return 하도록 solution 함수를 완성해보세요.
// * 입력: [[1, 4], [9, 2], [3, 8], [11, 6]]
// * 출력: 1
// ! 주의사항:

function solution(dots) {
  let inclination = [];
  for (i = 0; i < dots.length; i++) {
    for (j = i + 1; j < dots.length; j++) {
      inclination.push((dots[i][1] - dots[j][1]) / (dots[i][0] - dots[j][0]));
    }
  }
  const set1 = [...new Set(inclination)];
  return set1.length === inclination.length ? 0 : 1;
}

console.log(
  solution([
    [1, 4],
    [9, 2],
    [3, 8],
    [11, 6],
  ])
);
console.log(
  solution([
    [3, 5],
    [4, 1],
    [2, 4],
    [5, 10],
  ])
);
console.log(
  solution([
    [1, 2],
    [2, 3],
    [4, 4],
    [5, 8],
  ])
);
