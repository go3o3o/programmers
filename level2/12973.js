// https://school.programmers.co.kr/learn/courses/30/lessons/12973
function solution(s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (!stack.length || stack[stack.length - 1] !== s[i]) stack.push(s[i]);
    else stack.pop();
  }
  return stack.length ? 0 : 1;
}

const s = "baabaa";
// const s = "cdcd";
const result = solution(s);
console.log(result);
