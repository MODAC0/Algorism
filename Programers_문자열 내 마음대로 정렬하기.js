function solution(strings, n) {
  let answer = strings.sort((a, b) =>
    a[n] > b[n] ? 1 : a[n] === b[n] && a > b ? 1 : -1
  );

  return answer;
}

let str = ["sun", "bed", "car"];
console.log(solution(str, 1));
str = ["abce", "abcd", "cdx"];
console.log(solution(str, 2));
