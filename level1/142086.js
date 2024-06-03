// https://school.programmers.co.kr/learn/courses/30/lessons/142086
function solution(s) {
  var answer = [];
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], i);
      answer.push(-1);
    } else {
      const index = map.get(s[i]);
      answer.push(i - index);
      map.set(s[i], i);
    }
  }

  return answer;
}

const s = "banana";
const result = solution(s);
console.log(result);
