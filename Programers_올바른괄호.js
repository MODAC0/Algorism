function rotate(s, n) {
  return s.slice(n) + s.slice(0, n);
}

function isCorrectBrackets(s) {
  const stack = [];
  for (c of s) {
    if (c === "(" || c === "[" || c === "{") stack.push(c);
    else {
      const top = stack.pop();
      if (
        (c === ")" && top !== "(") ||
        (c == "]" && top !== "[") ||
        (c == "}" && top !== "{")
      )
        return false;
    }
  }
  return stack.length === 0;
}

function solution(s) {
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    const rotated = rotate(s, i);
    if (isCorrectBrackets(rotated)) answer++;
  }
  return answer;
}

console.log(solution("()()"));
console.log(solution("(())()"));
console.log(solution("[)(]"));
console.log(solution("(()("));
