// https://school.programmers.co.kr/learn/courses/30/lessons/12953
function solution(arr) {
  var answer = 1;

  const gcd = (a, b) => (b ? gcd(b, a % b) : a);
  const lcm = (a, b) => (a * b) / gcd(a, b);

  for (let i = 0; i < arr.length; i++) {
    const test = lcm(answer, arr[i]);
    answer = test;
  }
  return answer;
}

const arr = [2, 6, 8, 14];
const result = solution(arr);
console.log(result);
