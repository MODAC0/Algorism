// todo: 문제: z 는 빼기이다 문자열에 있는 숫자들의 값을 구하자
// * 입력: "10 Z 20 Z 1"
// * 출력: 1
// ! 주의사항:

function solution(id_pw, db) {
  for (v of id_pw) {
    if (v[0] === db[0] && v[1] === db[1]) {
      return "login";
    }
  }
}

console.log(
  solution(
    ["meosseugi", "1234"],
    [
      ["rardss", "123"],
      ["yyoom", "1234"],
      ["meosseugi", "1234"],
    ]
  )
);
