// https://school.programmers.co.kr/learn/courses/30/lessons/161989

function solution(n, m, section) {
  var answer = 0;
  const wall = new Array(n).fill(true);
  section.forEach((e) => (wall[e - 1] = false));

  for (let i = 0; i < wall.length; i++) {
    if (!wall[i]) {
      answer += 1;
      i += m - 1;
    }
  }

  return answer;
}

const n = 8;
const m = 4;
const section = [2, 3, 6];
const result = solution(n, m, section);
console.log(result);
