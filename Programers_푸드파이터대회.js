function solution(food) {
  let answer = "";
  food.forEach((e, i) => (answer += `${i}`.repeat(~~e / 2)));
  return `${answer}0${[...answer].reverse().join("")}`;
}

console.log(solution([1, 3, 4, 6]));
console.log(solution([1, 7, 1, 2]));
