// https://school.programmers.co.kr/learn/courses/30/lessons/147355
function solution(t, p) {
  var answer = 0;

  for (let i = 0; i <= t.length - p.length; i++) {
    const word = t.slice(i, i + p.length);
    if (+p >= +word) answer += 1;
  }

  return answer;
}

const t = "3141592";
const p = "271";
const result = solution(t, p);
console.log(result);
