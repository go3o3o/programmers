// https://school.programmers.co.kr/learn/courses/30/lessons/12909
function solution(s) {
  var answer = true;
  if (s[0] === ")") return false;
  const stack = [s[0]];

  for (let i = 1; i < s.length; i++) {
    if (s[i] === ")") {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  if (stack.length > 0) return false;

  return answer;
}

// const s = "()()";
const s = "(()(";
const result = solution(s);
console.log(result);
