// https://school.programmers.co.kr/learn/courses/30/lessons/72411
function solution(orders, course) {
  var answer = [];

  for (const num of course) {
    const map = new Map();
    for (const order of orders) {
      const combination = getCombinations([...order].sort(), num);

      for (const com of combination) {
        const count = map.get(com.join("")) || 0;
        map.set(com.join(""), count + 1);
      }
    }
    map.forEach((value, key, _) => {
      if (value == Math.max(...map.values()) && value >= 2) {
        answer.push(key);
      }
    });
  }

  return answer.sort();
}

const getCombinations = (arr, num) => {
  const result = [];
  if (num === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combination = getCombinations(rest, num - 1);
    const attach = combination.map((comb) => [fixed, ...comb]);
    result.push(...attach);
  });

  return result;
};

// const orders = ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"];
// const course = [2, 3, 4];

// const orders = ["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"];
// const course = [2, 3, 5];

const orders = ["XYZ", "XWY", "WXA"];
const course = [2, 3, 4];

const result = solution(orders, course);
console.log(result);
