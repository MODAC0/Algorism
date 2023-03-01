function solution(keymap, targets) {
  let answer = [];
  let keyUp = 0;
  targets.forEach((target) => {
    for (str of target) {
      let count = Infinity;
      keymap.forEach((key) => {
        let index = key.indexOf(str);
        if (index > -1) count = Math.min(count, index + 1);
      });
      keyUp += count;
    }
    answer.push(keyUp);
    keyUp = 0;
  });
  return (answer = answer.map((e) => {
    if (e === Infinity) return (e = -1);
    else return e;
  }));
}

console.log(solution(["ABACD", "BCEFD"], ["ABCD", "AABB"])); //[(9, 4)]
console.log(solution(["AA"], ["B"])); //[-1]
console.log(solution(["AGZ", "BSSS"], ["ASA", "BGZ"])); // [4,6]
