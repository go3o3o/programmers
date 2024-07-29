// https://school.programmers.co.kr/learn/courses/30/lessons/154538
function solution(x, y, n) {
  if (x === y) return 0; // 이미 목표값에 도달한 경우

  const queue = [[x, 0]]; // [현재 값, 연산 횟수]
  const visited = new Set();
  visited.add(x);

  let head = 0; // 큐의 시작점을 나타내는 포인터

  while (head < queue.length) {
    const [current, steps] = queue[head++]; // FIFO 방식

    // 가능한 연산 결과를 배열에 저장
    const nextValues = [current + n, current * 2, current * 3];

    for (const next of nextValues) {
      if (next === y) return steps + 1; // 목표값에 도달한 경우
      if (next < y && !visited.has(next)) {
        // 목표값을 넘지 않고 방문하지 않은 경우
        queue.push([next, steps + 1]);
        visited.add(next);
      }
    }
  }

  return -1; // 목표값에 도달하지 못한 경우
}

const x = 10;
const y = 40;
const n = 5;
const result = solution(x, y, n);
console.log(result);
