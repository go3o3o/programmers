// https://school.programmers.co.kr/learn/courses/30/lessons/12914
function solution(n) {
  if (n === 1 || n === 2) return n;
  const fibonacci = (number) => {
    let result = 1;
    let a = 1;
    let b = 2;
    for (let i = 3; i <= number; i++) {
      result = (a + b) % 1234567;
      a = b;
      b = result;
    }
    return result;
  };
  return fibonacci(n);
}

const n = 2;

const result = solution(n);
console.log(result);
