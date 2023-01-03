// todo: 문제: 배열의 세개의 숫자를 더했을 때 0이 되는 횟수를 리턴
// * 입력: 정수 배열
// * 출력: 정수
// ! 주의사항: 3 ≤ number의 길이 ≤ 13

function solution(number) {
  let count = 0;
  for (let i = 0; i < number.length; i++) {
    for (let j = i + 1; j < number.length; j++) {
      for (let k = j + 1; k < number.length; k++) {
        if (number[i] + number[j] + number[k] === 0) count++;
      }
    }
  }

  //   number.forEach((element, index) => {
  //     if (element + number[index + 1] + [index + 2] === 0) {
  //       count++;
  //     }
  //   });
  return count;
}

console.log(solution([-2, 3, 0, 2, -5])); //! 2
console.log(solution([-3, -2, -1, 0, 1, 2, 3])); //! 5
console.log(solution([-1, 1, -1, 1])); //! 0
