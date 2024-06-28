// https://school.programmers.co.kr/learn/courses/30/lessons/42584
function solution(prices) {
  var answer = [];
  const temp = prices.reverse();
  while (temp.length) {
    let second = 0;
    const price = temp.pop();
    for (let i = temp.length - 1; i >= 0; i--) {
      second += 1;
      if (price > temp[i]) {
        break;
      }
    }
    answer.push(second);
  }
  return answer;
}

const prices = [1, 2, 3, 2, 3];
const result = solution(prices);
console.log(result);
