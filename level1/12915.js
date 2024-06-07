// https://school.programmers.co.kr/learn/courses/30/lessons/12915
function solution(strings, n) {
  var answer = strings.sort().sort((a, b) => {
    if ([...a][n] < [...b][n]) return -1;
    if ([...a][n] > [...b][n]) return 1;
    return 0;
  });

  return answer;
}

// const strings = ["sun", "bed", "car"];
// const n = 1;
const strings = ["abce", "abcd", "cdx"];
const n = 2;

const result = solution(strings, n);
console.log(result);
