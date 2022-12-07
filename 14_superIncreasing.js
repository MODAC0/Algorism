// todo: 문제: 수를 요소로 갖는 배열을 입력받아 각 요소들이 그 이전의 요소들의 합보다 큰지 여부를 리턴해야 합니다.
// * 입력: superIncreasing([1, 3, 6, 13, 54])
// * 출력: true
// ! 주의사항: arr[i]는 arr[0]부터 arr[i-1]까지의 합보다 커야 합니다.

// function superIncreasing(arr) {
//   // TODO: 여기에 코드를 작성합니다.
//   let plusNum = arr[0];
//   for (i = 1; i < arr.length; i++) {
//     if (arr[i] > plusNum) {
//       plusNum += arr[i];
//     } else return false;
//   }
//   return true;
// }
function superIncreasing(arr) {
  // TODO: 여기에 코드를 작성합니다.
  let result = true;
  return arr.reduce((pre, cur, inx, ar) => {
    if (pre >= cur) {
      ar.splice(inx);
      return false;
    }
    if (inx === arr.length - 1) return true;
    else return pre + cur;
  });
}

let output = superIncreasing([1, 3, 6, 13, 54]);
console.log(output); // --> true

output = superIncreasing([1, 3, 5, 9]);
console.log(output); // --> false
//
