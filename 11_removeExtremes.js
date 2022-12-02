// todo: 문제: 문자열을 요소로 갖는 배열을 입력받아 가장 짧은 문자열과 가장 긴 문자열을 제거한 배열을 리턴해야 합니다.
// * 입력: 1(['a', 'b', 'c', 'def'])
// * 출력: ['a', 'b']
// ! 주의사항: 가장 짧은 문자열의 길이와 가장 긴 문자열의 길이가 같은 경우는 없습니다.
// ! 가장 짧은 문자열 또는 가장 긴 문자열이 다수일 경우, 나중에 위치한 문자열을 제거합니다.

function removeExtremes(arr) {
  let maxIdx = 20;
  let minIdx = 0;
  const newArr = arr.filter((element) => {
    element.length = maxIdx;
    element.length = minIdx;
    

});


  }
}

console.log(removeExtremes(["a", "b", "c", "def"]));
console.log(removeExtremes(["where", "is", "the", "longest", "word"]));
