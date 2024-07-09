// https://school.programmers.co.kr/learn/courses/30/lessons/42885
function solution(people, limit) {
  var answer = 0;
  people.sort((a, b) => a - b);

  let left = 0; // 가장 가벼운 사람의 인덱스
  let right = people.length - 1; // 가장 무거운 사람의 인덱스

  while (left <= right) {
    if (people[left] + people[right] <= limit) {
      left++;
    }
    right--;
    answer++;
  }

  return answer;
}

const people = [70, 50, 80, 50];
const limit = 100;
const result = solution(people, limit);
console.log(result);
