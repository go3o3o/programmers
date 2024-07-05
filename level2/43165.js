// https://school.programmers.co.kr/learn/courses/30/lessons/43165
function solution(numbers, target) {
  var answer = 0;

  const dfs = (index, sum) => {
    if (index === numbers.length) {
      if (sum === target) answer++;
      return;
    }
    dfs(index + 1, sum + numbers[index]);
    dfs(index + 1, sum - numbers[index]);
  };

  dfs(0, 0);
  return answer;
}

// const numbers = [1, 1, 1, 1, 1];
// const target = 3;

const numbers = [4, 1, 2, 1];
const target = 4;

const result = solution(numbers, target);
console.log(result);
