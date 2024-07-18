// https://school.programmers.co.kr/learn/courses/30/lessons/76502
function solution(s) {
  var answer = 0;
  const temp = [...s];
  const array = [];

  while (array.length < s.length) {
    array.push(temp.join(""));
    const first = temp.shift();
    temp.push(first);
  }

  array.forEach((el) => {
    if (isBracket([...el])) answer++;
  });

  return answer;
}

const isBracket = (arr) => {
  if (["]", "}", ")"].includes(arr[0])) return false;
  if (["[", "{", "("].includes(arr[arr.length - 1])) return false;
  // console.log("###", arr);

  const stack = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === "]") {
      if (stack[stack.length - 1] === "[") {
        stack.pop();
      } else {
        stack.push(arr[i]);
      }
    } else if (arr[i] === "}") {
      if (stack[stack.length - 1] === "{") {
        stack.pop();
      } else {
        stack.push(arr[i]);
      }
    } else if (arr[i] === ")") {
      if (stack[stack.length - 1] === "(") {
        stack.pop();
      } else {
        stack.push(arr[i]);
      }
    } else {
      stack.push(arr[i]);
    }
  }

  if (stack.length > 0) return false;
  return true;
};

// const s = "[](){}";
const s = "}]()[{";
const result = solution(s);
console.log(result);

// isBracket(["[", "{", "}", "]", "(", ")"]);
