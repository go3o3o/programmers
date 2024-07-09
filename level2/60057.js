// https://school.programmers.co.kr/learn/courses/30/lessons/60057
function solution(s) {
  var answer = [];
  let round = [];
  let string = [...s];
  let length = 2;

  while (true) {
    if (length - 1 === s.length) break;
    const word = string.splice(0, length);

    round.push(word.join(""));

    if (!string.length) {
      length += 1;
      answer.push(round);
      string = [...s];
      round = [];
    }
  }

  // for ()

  return answer;
}

const s = "ababcdcdababcdcd";
const result = solution(s);
console.log(result);
