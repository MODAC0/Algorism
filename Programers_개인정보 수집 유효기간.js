/**
 * today:"2022.05.19"
 * terms: ["A 6", "B 12", "C 3"]
 * privacies: ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]
 * 결과: [1, 3]
 * a 약관은 6개월, b약관은 12개월, c약관은 3개월 - 규칙
 * 2021.05.02 + 0000.06.00, 2021.07.01 + 0000.12.00 , 2022.02.19 + 0000.03.00 , 2022.02.20 + 0000.03.00 - 보유약관의 만료일
 * 20와 .을 없애면?
 * 210502 + 000600, 210701 + 001200 , 220219 + 000300 , 220220 + 200300 - 보유약관의 만료일
 * 앞의 두 자리는 2,3번째 인덱스의 숫자가 13이 되면 ++됨 -> 2,3 번째는 01로 초기화
 * privacies를 유효기간만 담긴 배열로 치환하고 today도 같은 형태로 변경해준다.
 * 숫자가 더 작거나 같으면 파기해버린다
 */

function solution(today, terms, privacies) {
  let termsObj = {};
  let result = [];
  // 오늘 날짜를
  today = today
    .split("")
    .filter((e) => e !== ".")
    .join("");

  terms.forEach((e) => {
    let num = e.slice(2, e.length);
    termsObj[e[0]] = +num * 100;
  });
  console.log(termsObj);
  // 유효기간 합친 약관
  let pluseTerms = privacies.map((date) => {
    let cate = date.slice(-1, date.length);
    let arr = date
      .split(".")
      .map((str) =>
        str
          .split("")
          .filter((e) => !isNaN(+e))
          .join("")
      )
      .join("");
    arr = +arr + termsObj[cate];
    arr;
    let test = String(arr).slice(4, arr.length);
    test;
    return +test > 1300 ? (date = arr - 1200 + 10000) : (date = arr);
  });
  pluseTerms;
  pluseTerms.map((date, index) => {
    if (date <= today) {
      result.push(index + 1);
    }
  });
  return result;
}

// console.log(
//   solution(
//     "2022.05.19",
//     ["A 6", "B 12", "C 3"],
//     ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]
//   )
// ); // [1, 3]

// console.log(
//   solution(
//     "2020.01.01",
//     ["Z 3", "D 5"],
//     [
//       "2019.01.01 D",
//       "2019.11.15 Z",
//       "2019.08.02 D",
//       "2019.07.01 D",
//       "2018.12.28 Z",
//     ]
//   )
// ); // [1, 4, 5]

console.log(
  solution(
    "2020.03.01",
    ["Z 48", "D 8"],
    [
      "2019.01.01 D",
      "2019.11.15 Z",
      "2019.08.02 D",
      "2019.06.01 D",
      "2018.08.28 Z",
    ]
  )
); // [1, 4, 5]
