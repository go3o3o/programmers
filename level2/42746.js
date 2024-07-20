// https://school.programmers.co.kr/learn/courses/30/lessons/42746
function solution(numbers) {
  const strNumbers = numbers.map(String);
  strNumbers.sort((a, b) => b + a - (a + b));

  var answer = strNumbers.join("");
  return answer[0] === "0" ? "0" : answer;
}

// const numbers = [6, 10, 2];
const numbers = [3, 30, 34, 5, 9]; // 9534330
const result = solution(numbers);
console.log(result);
