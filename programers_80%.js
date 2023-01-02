// function solution(n) {
//   return Math.pow(Math.floor(Math.sqrt(n)), 2) === n ? 1 : 2;
// }

// console.log(solution(144));
// console.log(solution(976));

// const solution = (my_string) => {
//   return my_string.replace(/e|i|o|u|a/g, "");
// };
// console.log(solution("nice to meet you"));

// function solution(my_string) {
// let result = 0
// for (el of my_string) {
//   isNaN(el) ? null : result+=Number(el)
// }
// return result
// }
// console.log(solution("aAb1B2cC34oOp"));

// function solution(array) {
//   return [
//     Math.max.apply(null, array),
//     array.indexOf(Math.max.apply(null, array)),
//   ];
// }
// console.log(solution([9, 10, 11, 8]));

// function solution(n) {
//   var answer = [];
//   for (i=1; i<=n; i++) {
//     if (n%i===0)
//     answer.push(i)
//   }
//   return answer;
// }

// console.log(solution(24));

// function solution(numbers) {
//   const arr = numbers.sort((a, b) => b - a);
//   return Math.max(arr[0] * arr[1], arr[arr.length - 1] * arr[arr.length - 2]);
// }
// console.log(solution([1, 2, -3, 4, -5]));
// console.log(solution([0, -31, 24, 10, 1, 9]));

function solution(numbers, direction) {
  return direction === "right"
    ? [numbers.pop(), ...numbers]
    : [...numbers.slice(1), numbers.shift()];
}

let numbers = [1, 2, 3];
let direction = "right";
console.log(solution(numbers, direction)); //[3, 1, 2]
numbers = [4, 455, 6, 4, -1, 45, 6];
direction = "left";
console.log(solution(numbers, direction)); //[455, 6, 4, -1, 45, 6, 4]
