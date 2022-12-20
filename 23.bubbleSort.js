// todo: 문제: 정수를 요소로 갖는 배열을 입력받아 오름차순으로 정렬하여 리턴해야 합니다.

// 첫 번째 요소가 두 번째 요소보다 크면, 두 요소의 위치를 바꿉니다. (swap)
// 두 번째 요소와 세 번째 요소보다 크면, 두 요소의 위치를 바꿉니다. (swap)
// 1, 2를 마지막까지 반복합니다. (마지막에서 두 번째 요소와 마지막 요소를 비교)
// 1~3의 과정을 한 번 거치게 되면, 가장 큰 요소가 배열의 마지막으로 밀려납니다.
// 1~3의 과정을 첫 요소부터 다시 반복합니다.
// 5를 통해 두 번째로 큰 요소가 배열의 마지막 바로 두 번째로 밀려납니다.
// 1~3의 과정을 총 n번(배열의 크기) 반복합니다.

// * 입력: let output = bubbleSort([2, 1, 3])
// * 출력: console.log(output); // --> [1, 2, 3]
// ! 주의사항: 위에서 설명한 알고리즘을 구현해야 합니다.
// ! 주의사항:arr.sort 사용은 금지됩니다.
// ! 주의사항:입력으로 주어진 배열은 중첩되지 않은 1차원 배열입니다.

const bubbleSort = function (arr) {
  for (i = 0; i < arr.length - 1; i++) {
    // 회전수
    let count = 0;
    for (j = 0; j < arr.length - 1 - i; j++) {
      // 교체수
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        count++;
      }
    }
    if (count === 0) break;
  }
  return arr;
};

let outPut = bubbleSort([20, -10, -11, 2, 4, 299]);
console.log(outPut);
outPut = bubbleSort([2, 1, 3]);
console.log(outPut); // --> [1, 2, 3]
