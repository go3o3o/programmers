// https://school.programmers.co.kr/learn/courses/30/lessons/138477
function solution(k, score) {
  var answer = [];
  const fame = [];
  score.forEach((s) => {
    fame.push(s);
    fame.sort((a, b) => b - a);
    fame.splice(k);
    answer.push(Math.min(...fame));
  });
  return answer;
}

// [10, 10, 10, 20, 20, 100, 100]
// const k = 3;
// const score = [10, 100, 20, 150, 1, 100, 200];

// [0, 0, 0, 0, 20, 40, 70, 70, 150, 300]
const k = 4;
const score = [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000];

const result = solution(k, score);
console.log(result);
