// https://school.programmers.co.kr/learn/courses/30/lessons/152996
function solution(weights) {
  var answer = 0;
  const weightCount = new Map();
  weights.forEach((weight) => {
    const count = weightCount.get(weight) || 0;
    weightCount.set(weight, count + 1);
  });

  // 가능한 거리 비율
  const ratio = [
    [2, 3],
    [2, 4],
    [3, 2],
    [3, 4],
    [4, 2],
    [4, 3],
    [1, 1],
  ];
  weights.forEach((weight) => {
    // 현재 weight의 빈도수 감소
    weightCount.set(weight, weightCount.get(weight) - 1);

    ratio.forEach(([num, denom]) => {
      const targetWeight = (weight * denom) / num;

      if (Number.isInteger(targetWeight) && weightCount.has(targetWeight)) {
        answer += weightCount.get(targetWeight);
      }
    });
  });

  return answer;
}

const weights = [100, 180, 360, 100, 270];
const result = solution(weights);
console.log(result);
