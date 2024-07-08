// https://school.programmers.co.kr/learn/courses/30/lessons/12949
function solution(arr1, arr2) {
  var answer = [];
  for (let i = 0; i < arr1.length; i++) {
    const row = [];
    for (let j = 0; j < arr2[0].length; j++) {
      let sum = 0;
      for (let z = 0; z < arr2.length; z++) {
        sum += arr1[i][z] * arr2[z][j];
      }
      row.push(sum);
    }
    answer.push(row);
  }
  return answer;
}

const arr1 = [
  [1, 4],
  [3, 2],
  [4, 1],
];
const arr2 = [
  [3, 3],
  [3, 3],
];

const result = solution(arr1, arr2);
console.log(result);
