// https://school.programmers.co.kr/learn/courses/30/lessons/67257
function solution(expression) {
  var answer = 0;
  let operators = new Set(
    expression.split("").filter((c) => "+-*".includes(c))
  );

  let opsPermutations = permutations([...operators]);

  for (let ops of opsPermutations) {
    let value = evaluate(expression, ops);
    if (value > answer) {
      answer = value;
    }
  }

  return answer;
}

function* permutations(arr) {
  if (arr.length === 1) {
    yield arr;
  } else {
    let [first, ...rest] = arr;
    for (let perm of permutations(rest)) {
      for (let i = 0; i <= perm.length; i++) {
        yield [...perm.slice(0, i), first, ...perm.slice(i)];
      }
    }
  }
}

function calculate(a, b, op) {
  if (op === "+") return a + b;
  if (op === "-") return a - b;
  if (op === "*") return a * b;
}

function evaluate(expression, ops) {
  let tokens = [];
  let num = "";

  for (let char of expression) {
    if (ops.includes(char)) {
      tokens.push(parseInt(num));
      tokens.push(char);
      num = "";
    } else {
      num += char;
    }
  }
  tokens.push(parseInt(num));

  for (let op of ops) {
    let stack = [];
    let i = 0;
    while (i < tokens.length) {
      if (tokens[i] === op) {
        let prev = stack.pop();
        let next = tokens[i + 1];
        stack.push(calculate(prev, next, op));
        i += 2;
      } else {
        stack.push(tokens[i]);
        i += 1;
      }
    }
    tokens = stack;
  }

  return Math.abs(tokens[0]);
}

const expression = "100-200*300-500+20";
const result = solution(expression);
console.log(result);
