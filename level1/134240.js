// https://school.programmers.co.kr/learn/courses/30/lessons/134240
function solution(food) {
  var answer = "";
  for (let i = 1; i < food.length; i++) {
    answer += String(i).repeat(Math.floor(food[i] / 2));
  }
  return answer + "0" + [...answer].reverse().join("");
}

// const food = [1, 3, 4, 6];
const food = [1, 7, 1, 2];
const result = solution(food);
console.log(result);
