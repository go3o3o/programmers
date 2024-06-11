// https://school.programmers.co.kr/learn/courses/30/lessons/12901
function solution(a, b) {
  const day = {
    0: "SUN",
    1: "MON",
    2: "TUE",
    3: "WED",
    4: "THU",
    5: "FRI",
    6: "SAT",
  };
  var answer = new Date(`2016-${a}-${b}`).getDay();
  return day[answer];
}

const a = 5;
const b = 24;
const result = solution(a, b);
console.log(result);
