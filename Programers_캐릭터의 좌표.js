function solution(keyinput, board) {
  let [x, y] = [0, 0];
  let endpoint = board.map((e) => Math.floor(e / 2));
  keyinput.forEach((direction) => {
    if (direction === "up") y === endpoint[1] ? (y = endpoint[1]) : y++;
    if (direction === "down") y === -endpoint[1] ? (y = -endpoint[1]) : y--;
    if (direction === "right") x === endpoint[0] ? (x = endpoint[0]) : x++;
    if (direction === "left") x === -endpoint[0] ? (x = -endpoint[0]) : x--;
  });
  return [x, y];
}

let keyinput = ["left", "right", "up", "right", "right"];
let board = [11, 11];
console.log(solution(keyinput, board));
keyinput = ["down", "down", "down", "down", "down"];
board = [7, 9];
console.log(solution(keyinput, board));
keyinput = ["down", "down", "up", "up", "up"];
board = [3, 3];
console.log(solution(keyinput, board));
keyinput = ["up", "up", "up", "down"];
board = [3, 3];
console.log(solution(keyinput, board));
