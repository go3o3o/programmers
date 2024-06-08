// https://school.programmers.co.kr/learn/courses/30/lessons/17681
function solution(n, arr1, arr2) {
  var answer = [];
  for (let i = 0; i < arr1.length; i++) {
    answer.push(
      (arr1[i] | arr2[i])
        .toString(2)
        .padStart(n, 0)
        .replace(/1/g, "#")
        .replace(/0/g, " ")
    );
  }
  return answer;
}

const n = 5;
const arr1 = [9, 20, 28, 18, 11];
const arr2 = [30, 1, 21, 17, 28];

const result = solution(n, arr1, arr2);
console.log(result);
