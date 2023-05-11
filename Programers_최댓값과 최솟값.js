function solution(s) {
  const num = s.split(" ").map((e) => +e);
  const max = Math.max(...num);
  const min = Math.min(...num);
  return `${min} ${max}`;
}

console.log(solution("1 2 3 4"));
