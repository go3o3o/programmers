// https://school.programmers.co.kr/learn/courses/30/lessons/72410
function solution(new_id) {
  const answer = new_id
    .toLowerCase() // 1
    .replace(/([^a-z|0-9|.\-|\_])/g, "") // 2
    .replace(/[.]{2,}/g, ".") // 3
    .replace(/^\.|\.$/g, "") // 4
    .replace(/^$/, "a") // 5
    .substr(0, 15) // 6
    .replace(/\.$/, "");

  return answer.padEnd(3, answer[answer.length - 1]);
}

// const new_id = "...!@BaT#*..y.abcdefghijklm.";
const new_id = "abcdefghijklmn.p";
const result = solution(new_id);
console.log(result);
