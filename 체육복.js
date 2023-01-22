function solution(n, lost, reserve) {
  const arr = new Array(n).fill(1);
  // 잃어버린 학생의 1은 0으로 바꾼다.
  lost.forEach((el) => (arr[el - 1] = 0));
  // 가지고 있는 학생에 1을 더한다
  reserve.forEach((el) => (arr[el - 1] += 1));
  // 인덱스 앞뒤가 0이고 본인이 2면 인덱스에 1을 추가하고 본인은 1을 뺀다
  arr.map((e, i) => {
    if (e === 2) {
      if (arr[i - 1] === 0) {
        arr[i - 1] += 1;
      } else if (arr[i + 1] === 0) {
        arr[i + 1] += 1;
      }
    }
  });
  return arr.filter((e) => e !== 0).length;
}

console.log(solution(5, [2, 4], [1, 3, 5])); // 5
console.log(solution(5, [2, 4], [3])); // 4
console.log(solution(3, [3], [1])); // 2
