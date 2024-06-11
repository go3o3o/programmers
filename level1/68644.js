// https://school.programmers.co.kr/learn/courses/30/lessons/68644
function solution(numbers) {
  var answer = new Set();
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      answer.add(numbers[i] + numbers[j]);
    }
  }
  return [...answer].sort((a, b) => a - b);
}

const numbers = [2, 1, 3, 4, 1];
const result = solution(numbers);
console.log(result);
