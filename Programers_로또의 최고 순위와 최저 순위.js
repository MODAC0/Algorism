/**
 * 로또 6/45(이하 '로또'로 표기)는 1부터 45까지의 숫자 중 6개를 찍어서 맞히는 대표적인 복권입니다. 아래는 로또의 순위를 정하는 방식입니다.
 * 로또를 구매한 민우는 당첨 번호 발표일을 학수고대하고 있었습니다. 하지만, 민우의 동생이 로또에 낙서를 하여, 일부 번호를 알아볼 수 없게 되었습니다.
 * 당첨 번호 발표 후, 민우는 자신이 구매했던 로또로 당첨이 가능했던 최고 순위와 최저 순위를 알아보고 싶어 졌습니다.
 * 알아볼 수 없는 번호를 0으로 표기하기로 하고, 민우가 구매한 로또 번호 6개가 44, 1, 0, 0, 31 25라고 가정해보겠습니다.
 * 당첨 번호 6개가 31, 10, 45, 1, 6, 19라면, 당첨 가능한 최고 순위와 최저 순위의 한 예는 아래와 같습니다.
 */

function solution(lottos, win_nums) {
  // 당첨된 번호
  const matchNum = lottos.filter((e) => win_nums.includes(e)).length;
  // 지워진 번호
  console.log(matchNum);
  const deleteNum = lottos.filter((e) => e === 0).length;
  console.log(deleteNum);
  let min = 7 - matchNum >= 6 ? 6 : 7 - matchNum;
  let max = min - deleteNum < 1 ? 1 : min - deleteNum;
  return [max, min];
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19])); // [3, 5]
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25])); // [1, 6]
console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35])); // [1, 1]
