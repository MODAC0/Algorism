function solution(dartResult) {
  const result = [];
  let arr = dartResult.split("");
  for (let i = 0; i < dartResult.length; i++) {
    if (typeof +dartResult[i] === "number") {
      let num = +dartResult[i];
      if (arr[i + 1] === "S") {
        result.push(num ** 1);
      }
      if (arr[i + 1] === "D") {
        result.push(num ** 2);
      }
      if (arr[i + 1] === "T") {
        result.push(num ** 3);
      }
      arr = arr.slice(i, arr.length);
    }
  }
  return arr;
}

console.log(solution("1S2D*3T"));
console.log(solution("1D2S#10S"));
console.log(solution("1D2S0T"));
console.log(solution("1S*2T*3S"));
console.log(solution("1D#2S*3S"));
console.log(solution("1D2S3T*"));
