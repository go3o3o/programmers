// https://school.programmers.co.kr/learn/courses/30/lessons/12927
function solution(n, works) {
  // 작업량이 없으면 피로도 0
  if (works.reduce((a, b) => a + b, 0) <= n) return 0;

  // 최대 힙을 구현하기 위해 works 배열 정렬 (내림차순)
  works.sort((a, b) => b - a);

  while (n > 0) {
    // 가장 큰 작업량을 꺼내서 1 줄임
    works[0] -= 1;
    n--;

    // 현재 작업량이 다음 작업량보다 작아지면 위치를 스위칭
    let i = 0;
    while (i < works.length - 1 && works[i] < works[i + 1]) {
      [works[i], works[i + 1]] = [works[i + 1], works[i]];
      i++;
    }
  }

  return works.reduce((total, work) => total + work * work, 0);
}

const works = [4, 3, 3];
const n = 4;
const result = solution(n, works);
console.log(result);
