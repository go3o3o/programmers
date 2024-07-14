// https://school.programmers.co.kr/learn/courses/30/lessons/138476
function solution(k, tangerine) {
  var answer = [];
  let map = new Map();
  for (let i = 0; i < tangerine.length; i++) {
    if (!map.has(tangerine[i])) {
      map.set(tangerine[i], 0);
    }
    const count = map.get(tangerine[i]);
    map.set(tangerine[i], count + 1);
  }

  const sorted = [...map].sort((a, b) => b[1] - a[1]);
  //   console.log(sorted);

  while (k > 0) {
    const [num, count] = sorted.shift();
    answer.push(num);
    k -= count;
  }

  return answer.length;
}

// const k = 6;
// const tangerine = [1, 3, 2, 5, 4, 5, 2, 3];
const k = 4;
const tangerine = [1, 3, 2, 5, 4, 5, 2, 3];

const result = solution(k, tangerine);
console.log(result);
