// https://school.programmers.co.kr/learn/courses/30/lessons/12980
function solution(n) {
  var answer = 1;
  while (true) {
    const log2 = Math.floor(Math.log2(n));
    const result = n - 2 ** log2;

    if (result > 0) {
      answer += 1;
    } else {
      break;
    }
    n = result;
  }
  return answer;
}

const n = 6;
// const n = 5000;

const result = solution(n);
console.log(result);
