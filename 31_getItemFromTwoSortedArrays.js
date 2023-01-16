/*  
todo 문제
! 주의사항
**/
const getItemFromTwoSortedArrays = function (arr1, arr2, k) {
  let leftIdx = 0,
    rightIdx = 0;

  while (k > 0) {
    let cnt = Math.ceil(k / 2);
    let left = cnt,
      right = cnt;
    if (leftIdx === arr1.length) {
      rightIdx = rightIdx + k;
      break;
    }
    if (rightIdx === arr2.length) {
      leftIdx = leftIdx + k;
      break;
    }
    if (cnt > arr1.length - leftIdx) left = arr1.length - leftIdx;
    if (cnt > arr2.length - rightIdx) right = arr2.length - rightIdx;
    if (arr1[leftIdx + left - 1] < arr2[rightIdx + right - 1]) {
      leftIdx = leftIdx + left;
      k = k - left;
    } else {
      rightIdx = rightIdx + right;
      k = k - right;
    }
  }
  leftMax = arr1[leftIdx - 1] || -1;
  rightMax = arr2[rightIdx - 1] || -1;
  return Math.max(leftMax, rightMax);
};

let arr1 = [1, 4, 8, 10, 15, 20, 25, 30];
let arr2 = [2, 3, 5, 9, 16, 26, 31, 32];
let result = getItemFromTwoSortedArrays(arr1, arr2, 10);
console.log(result); // --> 8
