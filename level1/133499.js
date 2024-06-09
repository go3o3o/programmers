// https://school.programmers.co.kr/learn/courses/30/lessons/133499
function solution(babbling) {
  var answer = 0;

  //   const re = /(aya|ye|woo|ma)(?!.*\1)/g;
  for (let i = 0; i < babbling.length; i++) {
    const baby = babbling[i];
    if (baby.match(/(aya|ye|woo|ma)\1+/g)) continue;
    const matched = baby.replace(/(aya|ye|woo|ma)/g, "");

    if (!matched) answer++;
  }
  return answer;
}

// const babbling = ["aya", "yee", "u", "maa"];
const babbling = ["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"];
const result = solution(babbling);
console.log(result);
