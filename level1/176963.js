// https://school.programmers.co.kr/learn/courses/30/lessons/176963

function solution(name, yearning, photo) {
  var answer = [];
  const yearningMap = new Map();
  for (let i = 0; i < name.length; i++) {
    yearningMap.set(name[i], yearning[i]);
  }

  photo.map((photoNames) => {
    let count = 0;
    photoNames.map((n) => {
      if (yearningMap.has(n)) {
        count += yearningMap.get(n);
      }
    });
    answer.push(count);
  });
  return answer;
}

const name = ["may", "kein", "kain", "radi"];
const yearning = [5, 10, 1, 3];
const photo = [
  ["may", "kein", "kain", "radi"],
  ["may", "kein", "brin", "deny"],
  ["kon", "kain", "may", "coni"],
];
const result = solution(name, yearning, photo);
console.log(result);
