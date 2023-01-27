const powerSet = function (str) {
  // TODO: 여기에 코드를 작성합니다.
  const answer = [];
  const set = new Set(str);
  const arr = [...set];
  console.log(arr);
  for (i = 0; i < arr.length; i++) {
    for (k = 0; k < arr.length; k++) {
      if (arr[i] !== arr[k] && !answer.includes(arr[i] + arr[k])) {
        answer.push(arr[i] + arr[k]);
      }
    }
  }
  answer.unshift("");
  console.log(answer);
  return answer.sort();
};

let output1 = powerSet("abc");
console.log(output1); // ['', 'a', 'ab', 'abc', 'ac', 'b', 'bc', 'c']

let output2 = powerSet("jjump");
console.log(output2); // ['', 'j', 'jm', 'jmp', 'jmpu', 'jmu', 'jp', 'jpu', 'ju', 'm', 'mp', 'mpu', 'mu', 'p', 'pu', 'u']
