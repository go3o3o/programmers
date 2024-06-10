// https://school.programmers.co.kr/learn/courses/30/lessons/42889
function solution(N, stages) {
  var answer = [];
  for (let i = 1; i <= N; i++) {
    const count = stages.filter((el) => el === i).length;
    const length = stages.filter((el) => el >= i).length;
    answer.push([i, count / length]);
  }
  answer.sort((a, b) => b[1] - a[1]);

  return answer.map((el) => el[0]);
}

// const N = 5;
// const stages = [2, 1, 2, 6, 2, 4, 3, 3];
const N = 4;
const stages = [4, 4, 4, 4, 4];

const result = solution(N, stages);
console.log(result);
