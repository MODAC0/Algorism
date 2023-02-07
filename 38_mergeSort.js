/** 정수를 요소로 갖는 배열을 입력받아 오름차순으로 정렬하여 리턴해야 합니다. 
 * 입력
인자 1 : arr
number 타입을 요소로 갖는 배열
arr[i]는 정수
arr.length 100,000 이하
출력
number 타입을 요소로 갖는 배열을 리턴해야 합니다.
배열의 요소는 오름차순으로 정렬되어야 합니다.
arr[i] <= arr[j] (i < j)
주의사항
병합 정렬을 구현해야 합니다.
arr.sort 사용은 금지됩니다.
입력으로 주어진 배열은 중첩되지 않은 1차원 배열입니다.
*/

// const mergeSort = function (arr) {
//   const list = arr.map((e) => [e]);
//   for (i = 0; i < list.length; i++) {
//     if (list[i + 1] <= list[i]) {
//       list[i + 1] = [...list[i + 1], ...list[i]];
//       list.shift();
//     }
//     if (list[i + 1] > list[i]) {
//       list[i + 1] = [...list[i], ...list[i + 1]];
//       list.shift();
//     }
//   }
//   const [result] = list;
//   return result;
// };

// let output = mergeSort([3, 1, 21]);
// console.log(output); // --> [1, 3, 21]

/** --------------------------------------------------------- */

const merge = function (left, right) {
  const merged = [];
  let leftIdx = 0,
    rightIdx = 0;
  const size = left.length + right.length;

  for (let i = 0; i < size; i++) {
    if (leftIdx >= left.length) {
      // 왼쪽 인덱스가 왼쪽 배열의 길이 이상이면
      merged.push(right[rightIdx]); // 빈배열에 오른쪽 배열의 오른쪽 값을 넣는다
      rightIdx++; // 오른쪽 인덱스를 1씩 증가시킨다.
    } else if (rightIdx >= right.length || left[leftIdx] <= right[rightIdx]) {
      // 오른쪽 인덱스가 오른쪽 배열의 길이 이상이거나 왼쪽배열의 왼쪽 인덱스가 오른쪽배열의 오른쪽 인덱스 이하이면
      merged.push(left[leftIdx]); // 빈배열에 왼쪽 배열의 왼쪽 값을 넣는다.
      leftIdx++; // 왼쪽 인덱스를 1씩 증가시킨다.
    } else {
      merged.push(right[rightIdx]);
      rightIdx++;
    }
  }
  return merged;
};

const mergeSort = (arr) => {
  if (arr.length < 2) return arr;
  const mid = ~~(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  const merged = merge(left, right);
  return merged;
};

let output = mergeSort([4, 7, 4, 3, 9, 1, 2]);
console.log(output); // --> [1, 2, 3, 4, 4, 7, 9]
