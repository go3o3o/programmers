// https://school.programmers.co.kr/learn/courses/30/lessons/12924
function solution(n) {
  var answer = 0;
  const re = (cur, sum) => {
    if (sum === n) return true;
    if (sum > n) return false;
    return re(cur + 1, sum + cur);
  };

  for (let i = 1; i <= n; i++) {
    if (re(i, 0)) answer += 1;
  }
  return answer;
}

const n = 1;
const result = solution(n);
console.log(result);
