// todo: 문제: 2차원 배열(배열을 요소로 갖는 배열)을 입력받아 'B'의 위치 정보를 요소로 갖는 배열을 리턴해야 합니다
// * 입력:[['A', 'A', 'A', 'A', 'A'],['A', 'B', 'A', 'A', 'A'],['A', 'A', 'A', 'A', 'A'],['A', 'A', 'A', 'A', 'A'],['A', 'A', 'A', 'A', 'A'],]
// * 출력:[1, 1]
// ! 주의사항: 항상 한 개의 문자열 'B'가 존재합니다.
// ! arr, arr[i]의 길이는 다양하게 주어집니다.

function findBugInApples(arr, inx) {
  // Map으로 B가 있는 배열의 인덱스를 찾고
  // B가 있는 배열 안의 B의 인덱스를 찾아서 리턴
  let result = [];
  arr.map((el, inx) => {
    if (el.includes("B")) {
      result.push(inx);
      result.push(el(inx).indexOf("B"));
    }
  });
  return result;
}

output = findBugInApples([
  ["A", "A", "A", "A", "A"],
  ["A", "B", "A", "A", "A"],
  ["A", "A", "A", "A", "A"],
  ["A", "A", "A", "A", "A"],
  ["A", "A", "A", "A", "A"],
]);
console.log(output); //[1, 1]

output = findBugInApples([
  ["A", "A"],
  ["A", "A", "A", "A", "B", "A"],
]);
console.log(output);
