function solution(board) {
  let result = 0;
  // 전체 순회
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 1) {
        // 맨 윗줄이 아닌 경우
        if (i !== 0 && board[i - 1][j] !== 1) {
          board[i - 1][j] = 2;
        }
        // 맨 아랫줄이 아닌 경우
        if (i !== board.length - 1 && board[i + 1][j] !== 1) {
          board[i + 1][j] = 2;
        }
        // 맨 왼쪽이 아닌 경우
        if (j !== 0 && board[i][j - 1] !== 1) {
          board[i][j - 1] = 2;
        }
        // 맨 오른쪽이 아닌 경우
        if (j !== board[i].length - 1 && board[i][j + 1] !== 1) {
          board[i][j + 1] = 2;
        }
        // 맨 대각선 윗 왼쪽이 아닌 경우
        if (i !== 0 && j !== 0 && board[i - 1][j - 1] !== 1) {
          board[i - 1][j - 1] = 2;
        }
        // 맨 대각선 윗 오른쪽이 아닌 경우
        if (i !== 0 && j !== board[i].length - 1 && board[i - 1][j + 1] !== 1) {
          board[i - 1][j + 1] = 2;
        }
        // 맨 대각선 아랫 왼쪽이 아닌 경우
        if (i !== board.length - 1 && j !== 0 && board[i + 1][j - 1] !== 1) {
          board[i + 1][j - 1] = 2;
        }
        // 맨 대각선 아랫 오른쪽이 아닌 경우
        if (
          i !== board.length - 1 &&
          j !== board[i].length - 1 &&
          board[i + 1][j + 1] !== 1
        ) {
          board[i + 1][j + 1] = 2;
        }
      }
    }
  }
  board.forEach((a) => a.forEach((b) => (b === 0 ? result++ : result)));
  return result;
}

let map = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
];
console.log(solution(map));
map = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0],
  [0, 0, 0, 0, 0],
];
console.log(solution(map));
map = [
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
];
console.log(solution(map));
