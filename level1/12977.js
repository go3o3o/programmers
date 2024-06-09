// https://school.programmers.co.kr/learn/courses/30/lessons/12977
function solution(nums) {
  var answer = 0;

  const isPrime = (num) => {
    if (num === 1) return false;
    for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let z = j + 1; z < nums.length; z++) {
        if (isPrime(nums[i] + nums[j] + nums[z])) answer += 1;
      }
    }
  }

  return answer;
}

// const nums = [1, 2, 3, 4];
const nums = [1, 2, 7, 6, 4];
const result = solution(nums);
console.log(result);
