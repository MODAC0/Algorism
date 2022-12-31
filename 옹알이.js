function solution(babbling) {
  let words = ["aya", "ye", "woo", "ma"];
  let newArr = [];
  babbling.forEach((x) => {
    words.forEach((y) => {
      if (x.includes(y)) {
        x = x.replace(y, 1);
        newArr.push(x);
        console.log(x);
      }
    });
  });
  return newArr.filter((el) => !isNaN(Number(el))).length;
}

console.log(solution(["aya", "yee", "u", "maa", "wyeoo"]));
// console.log(solution(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]));
