// https://school.programmers.co.kr/learn/courses/30/lessons/12899
function solution(n) {
  const answer = [];
  const generateNumbers = (number) => {
    if (number === 1) {
      answer.push(1);
      return;
    } else if (number === 2) {
      answer.push(2);
      return;
    } else if (number === 3 || number === 0) {
      answer.push(4);
      return;
    } else {
      generateNumbers(Math.floor((number - 1) / 3));
      generateNumbers(number % 3);
    }
  };

  generateNumbers(Number(n));

  return answer.join("");
}

const n = 11;
const result = solution(n);
console.log(result);
