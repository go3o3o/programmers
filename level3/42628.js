// https://school.programmers.co.kr/learn/courses/30/lessons/42628
function solution(operations) {
  const heap = [];
  for (let operation of operations) {
    const [command, num] = operation.split(" ");
    if (command === "I") {
      heap.push(num);
      continue;
    }
    if (!heap.length) continue;
    if (heap.length === 1) {
      heap.pop();
      continue;
    }
    if (command === "D") {
      let target = -1;
      // 최대값 삭제
      if (num === "1") {
        target = Math.max(...heap);
      }
      // 최소값 삭제
      if (num === "-1") {
        target = Math.min(...heap);
      }
      const index = heap.indexOf(String(target));
      //   console.log(heap, target, index);
      heap.splice(index, 1);
    }
  }
  return heap.length ? [Math.max(...heap), Math.min(...heap)] : [0, 0];
}

// const operations = ["I 16", "I -5643", "D -1", "D 1", "D 1", "I 123", "D -1"];
const operations = [
  "I -45",
  "I 653",
  "D 1",
  "I -642",
  "I 45",
  "I 97",
  "D 1",
  "D -1",
  "I 333",
];
const result = solution(operations);
console.log(result);
