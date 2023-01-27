function solution(spell, dic) {
  spell = spell.sort().join("");
  console.log(spell);
  return dic.map((e) => e.split("").sort().join("")).find((e) => e === spell)
    ? 1
    : 2;
}
console.log(solution(["p", "o", "s"], ["sod", "eocd", "qixm", "adio", "soo"]));

console.log(solution(["z", "d", "x"], ["def", "dww", "dzx", "loveaw"]));

console.log(
  solution(["s", "o", "m", "d"], ["moos", "dzx", "smm", "sunmmo", "som"])
);
