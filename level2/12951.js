// https://school.programmers.co.kr/learn/courses/30/lessons/12951
function solution(s) {
  var answer = s
    .split(" ")
    .map((word) => {
      if (word.length > 0) {
        return `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`;
      } else {
        return word;
      }
    })
    .join(" ");
  return answer;
}

// const s = "3people unFollowed me";
const s = "   p";
const result = solution(s);
console.log(result);
