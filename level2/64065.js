// https://school.programmers.co.kr/learn/courses/30/lessons/64065
function solution(s) {
  var answer = new Set();
  const tuples = eval(s.replace(/\{/g, "[").replace(/\}/g, "]"));
  tuples.sort((a, b) => a.length - b.length);

  for (const tuple of tuples) {
    tuple.forEach((el) => answer.add(el));
  }

  return [...answer];
}

// const s = "{{1,2,3},{2,1},{1,2,4,3},{2}}";
const s = "{{4,2,3},{3},{2,3,4,1},{2,3}}";
const result = solution(s);
console.log(result);
