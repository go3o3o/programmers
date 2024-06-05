// https://school.programmers.co.kr/learn/courses/30/lessons/12903
function solution(s) {
  const index = s.length / 2;

  if (s.length % 2 !== 0) {
    return s[Math.floor(index)];
  }

  return s[index - 1] + s[index];
}

// const s = "abcd";
const s = "ab";
const result = solution(s);
console.log(result);
