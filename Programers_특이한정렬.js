function solution(numlist, n) {
  return numlist.sort((a, b) => {
    if (0 > Math.abs(a - n) - Math.abs(b - n)) return -1;
    else if (0 < Math.abs(a - n) - Math.abs(b - n)) return 1;
    else return b - a;
    // b-a의 결과 => 더 큰 수가 있을 시엔 바꾸지 않는다.
  });
}

console.log(solution([1, 2, 3, 4, 5, 6], 4)); // [4, 5, 3, 6, 2, 1]
