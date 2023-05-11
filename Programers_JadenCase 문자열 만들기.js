function solution(s) {
  let words = s.toLowerCase().split(" ");
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.length > 0) {
      let first = word.charAt(0).toUpperCase();
      let rest = word.slice(1).toLowerCase();
      words[i] = first + rest;
    }
  }
  return words.join(" ");
}

console.log(solution("3people unFollowed me"));
