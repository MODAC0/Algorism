function solution(sequence) {
  let maxSum = -Infinity;
  const pulse1 = [1, -1, 1];
  const pulse2 = [-1, 1, -1, 1];

  // 모든 연속 부분 수열 찾기
  for (let i = 0; i < sequence.length; i++) {
    for (let j = i + 1; j <= sequence.length; j++) {
      const subseq = sequence.slice(i, j);
      // 연속 부분 수열이 펄스 수열과 같은 길이인 경우에만 처리
      if (subseq.length === 3 || subseq.length === 4) {
        let pulseSubseq = [];
        // 펄스 수열과 연속 부분 수열 곱하기
        for (let k = 0; k < subseq.length; k++) {
          if (k % 2 === 0) {
            if (subseq.length === 3) {
              pulseSubseq.push(subseq[k] * pulse1[k]);
            } else {
              pulseSubseq.push(subseq[k] * pulse2[k]);
            }
          } else {
            if (subseq.length === 3) {
              pulseSubseq.push(subseq[k] * pulse1[k]);
            } else {
              pulseSubseq.push(subseq[k] * pulse2[k]);
            }
          }
        }

        // 연속 펄스 부분 수열의 합 계산
        const sum = pulseSubseq.reduce((acc, val) => acc + val, 0);

        // 최댓값 업데이트
        maxSum = Math.max(maxSum, sum);
      }
    }
  }

  return maxSum;
}

console.log(solution([2, 3, -6, 1, 3, -1, 2, 4]));
