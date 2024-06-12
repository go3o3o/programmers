// https://school.programmers.co.kr/learn/courses/30/lessons/12921
function solution(n) {
  const set = new Set();
  for (let i = 2; i <= n; i++) {
    set.add(i);
  }

  for (let j = 2; j < Math.sqrt(n); j++) {
    if (set.has(j)) {
      for (let z = j * 2; z <= n; z += j) {
        set.delete(z);
      }
    }
  }

  return set.size;
}

const n = 10;
const result = solution(n);
console.log(result);
