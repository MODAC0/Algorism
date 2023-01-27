function solution(polynomial) {
  //   const arr = polynomial.split(" + ");
  //   const x = arr.filter((el) => el.includes("x"));
  //   console.log(x)
  //   const y = arr.filter((el) => !el.includes("x"));
  //   console.log(y)
  //   const xNum = x.map((el) => el.replace("x", ""));
  //   let count = 0;
  //   xNum.forEach((e) => {
  //     if (+e > 0) count += +e;
  //     else count += +1;
  //   });
  //   const constant = y.join("")
  //   count;
  //   const result = constant!=="" ? count+'x'+" "+'+'+" "+ +y.join("") : count+'x'
  //   return result
  const numArr = [];
  const arr = polynomial.split(" + ");
  let count = [];
  console.log(arr);
  arr.map((el) => {
    if (el.includes("x")) {
      console.log(el);
      el.length === 1 ? count.push(1) : count.push(el.slice(0, 0 - 1));
    } else el.length === 0 ? numArr : numArr.push(el);
  });
  const addX = count.reduce((x, y) => +x + +y, 0);
  addX;
  const addNum = numArr.reduce((x, y) => +x + +y, 0);
  addNum;
  if (addNum === 0 && addX === 0) return "0";
  else if (addNum !== 0 && addX !== 0) return `${addX}x + ${addNum}`;
  else if (addNum === 0) return addX === 1 ? `x` : `${addX}x`;
  else if (addX === 0) return `${addNum}`;
  else return addX === 1 ? `x + ${addNum}` : `${addX}x + ${addNum}`;
  //     : addX !== 0
  //     ? `${addNum}`
  //     : `${addX}x`;
}

let polynomial = "3x + 7 + x";
console.log(solution(polynomial)); // "4x + 7"
polynomial = "x + x + x";
console.log(solution(polynomial)); // "3x"
polynomial = "x";
console.log(solution(polynomial)); // "x"
polynomial = "";
console.log(solution(polynomial)); // 0
