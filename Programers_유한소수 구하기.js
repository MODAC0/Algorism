function solution(a, b) {
  let 최대공약수 = 0;
  for (let i = 1; i <= b; i++) {
    if (a % i === 0 && b % i === 0) 최대공약수 = i;
  }
  b = b / 최대공약수;
  console.log(b);
  while (b % 2 === 0) b = b / 2;
  while (b % 5 === 0) b = b / 5;
  console.log(b);
  return b === 1 ? 1 : 2;
}

console.log(solution(7, 20));
console.log(solution(11, 22));
console.log(solution(12, 21));
