/*  
todo 문제
부분적으로 오름차순 정렬*된 정수의 배열(rotated)과 정수(target)를 입력받아 target의 인덱스를 리턴해야 합니다. 부분적으로 정렬된 배열: 배열을 왼쪽 혹은 오른쪽으로 0칸 이상 순환 이동할 경우 완전히 정렬되는 배열
예시: [4, 5, 6, 0, 1, 2, 3]은 왼쪽으로 3칸 또는 오른쪽으로 4칸 순환 이동할 경우 완전히 정렬됩니다.

! 주의사항
rotated에 중복된 요소는 없습니다.
target이 없는 경우, -1을 리턴해야 합니다.
**/
const rotatedArraySearch = function (rotated, target) {
  // if (exponent === 0) return 1;

  // const half = parseInt(exponent / 2);
  // const temp = power(base, half);
  // const result = (temp * temp) % 94906249;

  // if (exponent % 2 === 1) return (base * result) % 94906249;
  // else return result;
  let low = 0;
  let high = rotated.length - 1;
  let mid = parseInt((low + high) / 2);
  while (low <= high) {
    if (rotated[mid] === target) return mid;
    else if (rotated[mid] > target) high = mid - 1;
    else if (rotated[mid] < target) low = mid + 1;
  }
  return mid;
};

let arr = [4, 5, 6, 0, 1, 2, 3];
let n = 2;
console.log(rotatedArraySearch(arr, n));
arr = [4, 5, 6, 0, 1, 2, 3];
n = 100;
console.log(rotatedArraySearch(arr, n));
arr = [9, 10, 15, 4, 6, 8];
n = 6;
console.log(rotatedArraySearch(arr, n));
arr = [10, 11, 12, 3, 6, 7, 8, 9];
n = 11;
console.log(rotatedArraySearch(arr, n));
