// https://school.programmers.co.kr/learn/courses/30/lessons/77484
function solution(lottos, win_nums) {
  const score = { 6: 1, 5: 2, 4: 3, 3: 4, 2: 5 };
  const matchLowest = win_nums.filter((el) => lottos.includes(el)).length;
  const matchBest = matchLowest + lottos.filter((el) => el === 0).length;
  const lowest = score[matchLowest] || 6;
  const best = score[matchBest] || 6;
  return [best, lowest];
}

// const lottos = [44, 1, 0, 0, 31, 25];
// const win_nums = [31, 10, 45, 1, 6, 19];

const lottos = [0, 0, 0, 0, 0, 0];
const win_nums = [38, 19, 20, 40, 15, 25];

const result = solution(lottos, win_nums);
console.log(result);
