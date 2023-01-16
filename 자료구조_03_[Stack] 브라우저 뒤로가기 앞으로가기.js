/*  
todo 문제
! 주의사항
**/
function browserStack(actions, start) {
  let prev = [];
  let next = [];
  let current = start;
  for (el of actions) {
    if (typeof el === "string") {
      prev.push(current);
      current = el;
    } else if (el === 1) {
      if (next.length > 0) {
        prev.push(current);
        current = next.pop();
      }
    } else if (el === -1) {
      if (prev.length > 0) {
        next.push(current);
        current = prev.pop();
      }
    }
  }
  return [prev, current, next];
}

const actions = ["B", "C", -1, "D", "A", -1, 1, -1, -1];
const start = "A";
const output = browserStack(actions, start);

console.log(output); // [["A"], "B", ["A", "D"]]

const actions2 = ["B", -1, "B", "A", "C", -1, -1, "D", -1, 1, "E", -1, -1, 1];
const start2 = "A";
const output2 = browserStack(actions2, start2);

console.log(output2); // [["A", "B"], "D", ["E"]]
