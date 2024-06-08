// https://school.programmers.co.kr/learn/courses/30/lessons/1845
function solution(nums) {
  var answer = 0;
  const set = new Set(nums);

  if (set.size > nums.length / 2) return nums.length / 2;
  return set.size;
}

// const nums = [3, 3, 3, 2, 2, 2];
const nums = [3, 1, 2, 3];
const result = solution(nums);
console.log(result);
