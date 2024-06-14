// https://school.programmers.co.kr/learn/courses/30/lessons/12911
function solution(n) {
  const binary = n.toString(2).match(/1/g);

  while (true) {
    n += 1;
    const next = n.toString(2).match(/1/g);
    console.log(binary, next);
    if (binary.length == next.length) {
      answer = parseInt(n, 2);
      break;
    }
  }
  return n;
}

const n = 78;

const result = solution(n);
console.log(result);
