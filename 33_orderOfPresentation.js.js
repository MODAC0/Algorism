function orderOfPresentation(N, K) {
  // TODO: 여기에 코드를 작성합니다.
  const factorial = (n) => {
    if (n <= 1) return n;
    return n * factorial(n - 1);
  };
  let order = 0;
  const isUsed = Array(N + 1).fill(false);
  K.map((e, i) => {
    const num = e;
    isUsed[num] = true;
    const sliceArr = isUsed.slice(1, num);
    const validCnt = sliceArr.filter((el) => el === false).length;
    const formerCnt = validCnt * factorial(N - i - 1);
    order += formerCnt;
  });
  return order;
}

let output = orderOfPresentation(3, [2, 3, 1]);
console.log(output); // 3
// 2**가 나오기 전에 123,132, 1*(2!)
// 23*가 나오기 전에 213 1*(1!)
output = orderOfPresentation(5, [1, 3, 2, 4, 5]);
console.log(output); // 6
