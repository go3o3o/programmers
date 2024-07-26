// https://school.programmers.co.kr/learn/courses/30/lessons/131127
function solution(want, number, discount) {
  var answer = [];
  let total = 10;
  const wantProduct = {};
  for (let i = 0; i < want.length; i++) {
    wantProduct[want[i]] = number[i];
  }

  let start = 0;
  while (start <= discount.length - total) {
    const end = start + 10;
    const product = discount.slice(start, end).reduce((acc, cur) => {
      if (!acc[cur]) {
        acc[cur] = 0;
      }
      acc[cur] += 1;
      return acc;
    }, {});

    if (compareObject(wantProduct, product)) {
      answer.push(start);
    }
    start++;
  }

  return answer.length;
}

const compareObject = (want, product) => {
  console.log(want);
  for (const w in want) {
    if (product[w]) {
      if (product[w] < want[w]) return false;
    } else {
      return false;
    }
  }
  return true;
};

const want = ["banana", "apple", "rice", "pork", "pot"];
const number = [3, 2, 2, 2, 1];
const discount = [
  "chicken",
  "apple",
  "apple",
  "banana",
  "rice",
  "apple",
  "pork",
  "banana",
  "pork",
  "rice",
  "pot",
  "banana",
  "apple",
  "banana",
];
const result = solution(want, number, discount);
console.log(result);
