// todo: 문제: 머쓱이는 친구들과 동그랗게 서서 공 던지기 게임을 하고 있습니다. 공은 1번부터 던지며 오른쪽으로 한 명을 건너뛰고 그다음 사람에게만 던질 수 있습니다. 친구들의 번호가 들어있는 정수 배열 numbers와 정수 K가 주어질 때, k번째로 공을 던지는 사람의 번호는 무엇인지 return 하도록 solution 함수를 완성해보세요.
// * 입력: [1, 2, 3, 4] / 2
// * 출력: 3
// ! 주의사항:
function solution(numbers, k) {
  let oddArr = numbers.filter((el) => el % 2 === 1);
  let evenArr = numbers.filter((el) => el % 2 === 0);

  if (numbers.length % 2 === 0) {
    if (numbers.length - 1 > k) return oddArr[k - 1];
    else return oddArr[(k % oddArr.length) - 1];
  }

  if (numbers.length % 2 === 1) {
    oddArr.concat(evenArr);
    return oddArr[k];
  }
}

console.log(solution([1, 2, 3, 4], 2));
console.log(solution([1, 2, 3, 4, 5, 6], 5));
