// https://school.programmers.co.kr/learn/courses/30/lessons/12945
function solution(n) {
  const fibonacci = (number) => {
    let result = 0;
    let a = 0;
    let b = 1;
    for (let i = 2; i <= number; i++) {
      result = (a + b) % 1234567;
      a = b;
      b = result;
    }
    return result;
  };

  return fibonacci(n);
}

const n = 5;
const result = solution(n);
console.log(result);
