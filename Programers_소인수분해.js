// todo: 문제: 자연수 n이 매개변수로 주어질 때 n의 소인수를 오름차순으로 담은 배열을 return하도록 solution 함수를 완성해주세요.
// * 입력: 12
// * 출력: 	[2, 3]
// ! 주의사항: 2 ≤ n ≤ 10,000

function solution(n) {
  var answer = [];
  for (let i = 2; i <= n; i++) {
    if (n % i === 0) answer.push(i);
  }
  return answer.filter((el) => {
    let cont = 0;
    for (let i = 1; i <= el; i++) {
      if (el % i === 0) cont++;
    }
    if (cont === 2) return true;
    else return false;
  });
}

let test = solution(12);
console.log(solution(12));
