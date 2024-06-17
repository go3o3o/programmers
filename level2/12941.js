// https://school.programmers.co.kr/learn/courses/30/lessons/12941
function solution(A, B) {
  var answer = 0;
  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);

  while (true) {
    const min = A.shift();
    const max = B.pop();
    answer += min * max;
    if (A.length === 0) break;
  }

  return answer;
}

// const A = [1, 4, 2];
// const B = [5, 4, 4];
const A = [1, 2];
const B = [3, 4];
const result = solution(A, B);
console.log(result);
