function solution(arr1, arr2) {
  const result = [];
  for (i = 0; i < arr1.length; i++) {
    result.push(arr1[i].map((x, y) => x + arr2[i][y]));
  }
  return result;
}

console.log(
  solution(
    [
      [1, 2],
      [2, 3],
    ],
    [
      [3, 4],
      [5, 6],
    ]
  )
);
