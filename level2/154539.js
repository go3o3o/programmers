// https://school.programmers.co.kr/learn/courses/30/lessons/154539
function solution(numbers) {
  var answer = Array(numbers.length).fill(-1);

  // stack.at(-1) === stack[stack.length - 1]
  const stack = [];
  for (let i = 0; i < numbers.length; i++) {
    while (stack && numbers[stack.at(-1)] < numbers[i]) {
      const el = stack.pop();
      answer[el] = numbers[i];
    }
    stack.push(i);
  }

  return answer;
}

// function solution(numbers) {
//   var answer = [];

//   for (let i = 0; i < numbers.length; i++) {
//     let big = -1;
//     for (let j = i + 1; j < numbers.length; j++) {
//       if (numbers[i] < numbers[j]) {
//         big = numbers[j];
//         break;
//       }
//     }
//     answer.push(big);
//   }

//   return answer;
// }

// const numbers = [2, 3, 3, 5];
const numbers = [1, 1, 1, 1, 1, 9, 10];
const result = solution(numbers);
console.log(result);
