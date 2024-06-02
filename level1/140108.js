// https://school.programmers.co.kr/learn/courses/30/lessons/140108
function solution(s) {
  let answer = 0;
  let stack = [];

  [...s].map((word) => {
    stack.push(word);
    const same = stack.filter((el) => el == stack[0]);
    const notSame = stack.filter((el) => el !== stack[0]);

    if (same.length === notSame.length) {
      answer += 1;
      stack = [];
    }
  });
  if (stack.length) answer += 1;
  return answer;
}

// aaabbacc - ccab - ba
const s = "aaabbaccccabba";
// const s = "zzaaazbcc";

const result = solution(s);
console.log(result);
