// https://school.programmers.co.kr/learn/courses/30/lessons/160586

function solution(keymap, targets) {
  var answer = [];

  const map = new Map();
  keymap.forEach((key) => {
    key.split("").forEach((al, index) => {
      if (!map.has(al)) {
        map.set(al, index + 1);
      }
      if (map.get(al) > index) {
        map.set(al, index + 1);
      }
    });
  });

  targets.forEach((target) => {
    let count = 0;
    target.split("").forEach((al) => {
      count += map.get(al);
    });
    answer.push(count || -1);
  });
  return answer;
}

const keymap = ["AA"];
const targets = ["B"];
const result = solution(keymap, targets);
console.log(result);
