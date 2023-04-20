function solution(players, callings) {
  // 빈 객체 생성
  const result = {};
  players.map((e, i) => {
    // 기존 배열의 인덱스와 값을 객체의 쌍으로 담는다
    result[e] = i;
  });
  callings.forEach((e) => {
    // 호출된 플레이어의 index
    const index = result[e];
    // 호출된 플레이어는
    const callingPlayer = players[index - 1];
    callingPlayer;
    players[index - 1] = e;
    players[index] = callingPlayer;
    result[e]--;
    result[players[index]]++;
  });
  return Object.entries(result)
    .sort((a, b) => a[1] - b[1])
    .map((e) => e[0]);
}

console.log(
  solution(
    ["mumu", "soe", "poe", "kai", "mine"],
    ["kai", "kai", "mine", "mine"]
  )
);
