// https://school.programmers.co.kr/learn/courses/30/lessons/133502
function solution(ingredient) {
  var answer = 0;
  const stack = [];
  for (let i = 0; i < ingredient.length; i++) {
    stack.push(ingredient[i]);
    if (stack.length >= 4) {
      const burger = stack.slice(-4).join("");
      console.log(burger);

      if (burger === "1231") {
        stack.splice(-4);
        answer += 1;
      }
    }
  }

  return answer;
}

// const ingredient = [2, 1, 1, 2, 3, 1, 2, 3, 1, 1, 2, 3, 1];
// const ingredient = [1, 3, 2, 1, 2, 1, 3, 1, 2];
const ingredient = [1, 1, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1];

const result = solution(ingredient);
console.log(result);
