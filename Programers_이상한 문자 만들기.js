function solution(s) {
  let arr = s.split(" ");
  let answer = arr
    .map((a) => {
      let word = a.split("");
      return word
        .map((w, j) => {
          return j % 2 ? w.toLowerCase() : w.toUpperCase();
        })
        .join("");
    })
    .join(" ");
  return answer;
}

console.log(solution("try hello world"));
console.log(solution("try  hello   world"));
