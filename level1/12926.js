// https://school.programmers.co.kr/learn/courses/30/lessons/12926
function solution(a, n) {
  var answer = "";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let i = 0; i < a.length; i++) {
    const lowerIndex = lower.indexOf(a[i]);
    const upperIndex = upper.indexOf(a[i]);
    if (lowerIndex > -1) {
      answer += lower.charAt((lowerIndex + n) % lower.length);
    }
    if (upperIndex > -1) {
      answer += upper.charAt((upperIndex + n) % upper.length);
    }
    if (a[i] === " ") {
      answer += " ";
    }
  }

  return answer;
}

const a = "a B";
const n = 1;
const result = solution(a, n);
console.log(result);
