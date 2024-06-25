// https://school.programmers.co.kr/learn/courses/30/lessons/12985
function solution(n, a, b) {
  var answer = 0;
  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    answer++;
  }

  return answer;
}

const n = 32;
const a = 4;
const b = 7;
const result = solution(n, a, b);
console.log(result);
