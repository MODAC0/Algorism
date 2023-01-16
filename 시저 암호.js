function solution(s, n) {
  const Arr = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 65));
  const arr = Array.from({ length: 26 }, (v, i) =>
    String.fromCharCode(i + 65)
  ).map((el) => el.toLowerCase());

  let result = "";

  s.split("").forEach((x, y) => {
    if (Arr.includes(x)) {
      let index = Arr.indexOf(x) + n;
      index = index > 25 ? index - 26 : index;
      result += Arr[index];
    } else if (arr.includes(x)) {
      let index = arr.indexOf(x) + n;
      index = index > 25 ? index - 26 : index;
      result += arr[index];
    } else if (x === " ") {
      result += " ";
    }
  });
  return result;
}

console.log(solution("AB", 1));
console.log(solution("z", 1));
console.log(solution("a B z", 4));
console.log(solution("d e F", 2));
