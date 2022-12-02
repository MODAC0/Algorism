// todo 문자열을 입력받아 연속된 한자리 홀수 숫자 사이에 '-'를 추가한 문자열을 리턴해야 합니다.
// 인자 1 str: string 타입의 숫자 문자열
// string 타입을 리턴해야 합니다.
// ! 0은 짝수로 간주합니다.

function insertDash(str) {
  // 1,3,5,7~에 - 붙이기
  let result = "";
  for (i = 0; i < str.length; i++) {
    if (str[i] % 2 === 1 && str[i - 1] % 2 === 1)
      result = result + `-${str[i]}`;
    else result += str[i];
  }
  return result;
}

let output = insertDash("454793");
console.log(output); // --> 4547-9-3
