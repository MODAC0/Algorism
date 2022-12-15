// todo: 문제: 문자열을 입력받아 연속되는 문자가 있을 경우, 연속 구간을 반복되는 수와 문자로 조합한 형태로 압축한 문자열을 리턴해야 합니다.
// * 입력: string 타입의 알파벳 문자열
// * 출력: string 타입을 리턴해야 합니다.
// ! 주의사항: 3개 이상 연속되는 문자만 압축합니다.

// function compressString(str) {
//   if (str.length === 0) return "";
//   const arr = [...str];
//   let count = 1;
//   let result = [];
//   // string을 배열로 바꾸고 연속되는 문자를 찾는다.
//   // 연속되는 문자의 length가 3 이상이면 문자의 갯수 + 문자로 값을 바꾼다.
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] === arr[i + 1]) {
//       count++;
//     } else if (count >= 3) {
//       result.push(count, arr[i]);
//       count = 1;
//     } else if (count === 2) {
//       result = [...result, ...arr[i], ...arr[i]];
//       count = 1;
//     } else {
//       result = [...result, ...arr[i]];
//       count = 1;
//     }
//   }
//   return result.join("");
// }

function compressString(str) {
  let answer = "";
  let initIndex = 0;
  for (let i = 0; i <= str.length; i++) {
    if (str[initIndex] === str[i]) continue;
    // A문자가 반복되다가 B문자를 만났을때 A문자의 첫번째 인덱스 - B문자가 발견된 인덱스가 3 이상일 때
    else {
      if (i - initIndex >= 3) answer += `${i - initIndex}${str[initIndex]}`;
      else answer += str[initIndex].repeat(i - initIndex);
      initIndex = i;
    }
  }
  return answer;
}
let output = compressString("abc");
console.log(output); // --> abc

output = compressString("wwwggoppopppp");
console.log(output); // --> 3wggoppo4p

output = compressString("");
console.log(output);
