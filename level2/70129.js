// https://school.programmers.co.kr/learn/courses/30/lessons/70129
function solution(s) {
  let round = 0;
  let count = 0;
  while (true) {
    const length = [...s].reduce((acc, cur) => {
      if (cur === "1") {
        acc += 1;
      } else {
        count += 1;
      }
      return acc;
    }, 0);
    const result = length.toString(2);
    round += 1;
    if (result == "1") break;
    s = result;
  }
  return [round, count];
}

function solution(s) {
  let round = 0;
  let count = 0;
  while (s.length > 1) {
    round += 1;
    count += (s.match(/0/g) || []).length;
    s = s.replace(/0/g, "").length.toString(2);
  }
  return [round, count];
}

// const s = "110010101001";
const s = "1111111";

const result = solution(s);
console.log(result);
