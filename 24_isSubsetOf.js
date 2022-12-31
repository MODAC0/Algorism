// todo: 문제: 두 개의 배열(base, sample)을 입력받아 sample이 base의 부분집합인지 여부를 리턴해야 합니다.
// * 입력: array 2개
// * 출력: boolean
// ! 주의사항: 시간 복잡도를 개선하여, Advanced 테스트 케이스(base, sample의 길이가 70,000 이상)를 통과해 보세요.

const isSubsetOf = function (base, sample) {
  base.sort();
  sample.sort();
  for (let i = 0; i < base.length; i++) {
    if (base[i] === sample[0]) sample.shift();
  }
  return sample.length === 0 ? true : false;
};

let base = [1, 2, 3, 4, 5];
let sample = [1, 3];
let output = isSubsetOf(base, sample);
console.log(output); // --> true

sample = [6, 7];
output = isSubsetOf(base, sample);
console.log(output); // --> false

base = [10, 99, 123, 7];
sample = [11, 100, 99, 123];
output = isSubsetOf(base, sample);
console.log(output); // --> false
