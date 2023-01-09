/*  
todo 문제
부분적으로 오름차순 정렬*된 정수의 배열(rotated)과 정수(target)를 입력받아 target의 인덱스를 리턴해야 합니다. 부분적으로 정렬된 배열: 배열을 왼쪽 혹은 오른쪽으로 0칸 이상 순환 이동할 경우 완전히 정렬되는 배열
예시: [4, 5, 6, 0, 1, 2, 3]은 왼쪽으로 3칸 또는 오른쪽으로 4칸 순환 이동할 경우 완전히 정렬됩니다.

! 주의사항
rotated에 중복된 요소는 없습니다.
target이 없는 경우, -1을 리턴해야 합니다.
**/
const rotatedArraySearch = function (rotated, target) {
  let left = 0;
  let right = rotated.length - 1;
  while (left <= right) {
    let mid = parseInt((left + right) / 2);
    //! 탈출조건: mid = target의 인덱스
    if (rotated[mid] === target) {
      return mid;
    }
    //? 중간의 수가 0번째 수 이상이면
    if (rotated[left] <= rotated[mid]) {
      //? 중간에서 왼쪽 배열 구하는 조건문
      if (rotated[left] <= target && rotated[mid] >= target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      //? 오른쪽 배열의 left값
      if (rotated[mid] <= target && rotated[right] >= target) {
        left = mid + 1;
        //? 왼쪽 배열의 right값
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
};

let arr = [4, 5, 6, 0, 1, 2, 3];
let n = 5;
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
