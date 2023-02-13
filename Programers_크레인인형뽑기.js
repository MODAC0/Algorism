/** 스택 문제 */

function solution(board, moves) {
  // 0은 제외해야 함
  // board[0]이 상단,
  const basket = [];
  let result = 0;
  moves.forEach((num) => {
    const doll = pickUp(board, num - 1);
    if (doll) {
      if (basket[basket.length - 1] === doll) {
        basket.pop();
        result += 2;
      } else {
        basket.push(doll);
      }
    }
  });
  return result;
}

function pickUp(board, num) {
  for (let i = 0; i < board.length; i++) {
    if (board[i][num] !== 0) {
      const doll = board[i][num];
      board[i][num] = 0;
      return doll;
    }
  }
}

let board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
let moves = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(board, moves)); // 4
