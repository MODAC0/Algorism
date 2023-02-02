const powerSet = function (str) {
  // TODO: 문자열의 멱집합 구하기
  let set = new Set(str);
  let arr = [...set].sort();
  let flag = new Array(arr.length).fill(false);
  const subSetArr = [];
  // 깊이우선탐색으로 인덱스 순으로 자식노드를 추가해야함
  const subSet = (depth) => {
    // 부분 집합 구하는 재귀 함수, DFS 알고리즘
    if (depth === arr.length) {
      // 트리의 끝에 도착하면 재귀 탈출
      const subSet = arr.filter((_, i) => flag[i]); //
      subSetArr.push(subSet);
      return;
    }
    flag[depth] = true;
    subSet(depth + 1);

    flag[depth] = false;
    subSet(depth + 1);
  };

  subSet(0);
  const result = [];
  for (arr of subSetArr) {
    result.push(arr.join(""));
  }
  return result.sort();
};

let output1 = powerSet("abc");
console.log(output1);
// ['', 'a', 'ab', 'abc', 'ac', 'b', 'bc', 'c']

let output2 = powerSet("jjump");
console.log(output2);
// ['', 'j', 'jm', 'jmp', 'jmpu', 'jmu', 'jp', 'jpu', 'ju', 'm', 'mp', 'mpu', 'mu', 'p', 'pu', 'u']
