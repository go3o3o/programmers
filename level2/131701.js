// https://school.programmers.co.kr/learn/courses/30/lessons/131701
function solution(elements) {
  var answer = new Set();
  const all = [...elements, ...elements];

  for (let i = 0; i < elements.length; i++) {
    let sum = 0;
    for (let j = 0; j < elements.length; j++) {
      sum += all[i + j];
      answer.add(sum);
    }
  }

  return answer.size;
}

const elements = [7, 9, 1, 1, 4];
const result = solution(elements);
console.log(result);
