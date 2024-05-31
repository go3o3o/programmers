// https://school.programmers.co.kr/learn/courses/30/lessons/159994
function solution(cards1, cards2, goal) {
  for (const word of goal) {
    if (cards1[0] === word) {
      cards1.shift();
    } else if (cards2[0] === word) {
      cards2.shift();
    } else {
      return "No";
    }
  }

  return "Yes";
}

const cards1 = ["i", "drink", "water"];
const cards2 = ["want", "to"];
const goal = ["i", "want", "to", "drink", "water"];

const result = solution(cards1, cards2, goal);
console.log(result);
