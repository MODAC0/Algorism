function solution(price, money, count) {
  // todo 가격의 배수 구하기
  //   const moneyToPay = [];
  //   for (i = 1; i <= count; i++) {
  //     moneyToPay.push(i * price);
  //   }
  //   const allPay = moneyToPay.reduce((x, y) => x + y);
  //   return allPay > money ? allPay - money : 0;

  // todo 가우스 공식
  const tmp = (price * count * (count + 1)) / 2 - money;
  return tmp > 0 ? tmp : 0;
}

console.log(solution(3, 20, 4));
