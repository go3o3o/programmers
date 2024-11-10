// https://school.programmers.co.kr/learn/courses/30/lessons/12987?language=javascript
function solution(A, B) {
  var answer = 0;
  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);

  while (A.length > 0 && B.length > 0) {
    const aNumber = A.pop();
    const bNumber = B.pop();

    if (bNumber > aNumber) {
      answer++;
    } else {
      B.push(bNumber);
    }
  }

  return answer;
}

const A = [5, 1, 3, 7];
const B = [2, 2, 6, 8];
const result = solution(A, B);
console.log(result);
