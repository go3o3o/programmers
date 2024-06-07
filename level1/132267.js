// https://school.programmers.co.kr/learn/courses/30/lessons/132267
function solution(a, b, n) {
  var answer = 0;

  while (true) {
    let given = Math.floor(n / a) * b;
    n = n - Math.floor(n / a) * a + given;
    answer += given;
    if (n < a) break;
  }
  return answer;
}

const a = 4;
// const a = 3;

const b = 2;
const n = 40;
const result = solution(a, b, n);
console.log(result);
