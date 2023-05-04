function solution(array, commands) {
  const result = [];
  for (arr of commands) {
    result.push(
      array.slice(arr[0] - 1, arr[1]).sort((a, b) => a - b)[arr[2] - 1]
    );
  }
  return result;
}

console.log(
  //[5, 6, 3]
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
);
