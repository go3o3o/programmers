// https://school.programmers.co.kr/learn/courses/30/lessons/17677
function solution(str1, str2) {
  function explode(text) {
    const result = [];
    for (let i = 0; i < text.length - 1; i++) {
      const node = text.substr(i, 2);
      if (node.match(/[A-Za-z]{2}/)) {
        result.push(node.toLowerCase());
      }
    }
    return result;
  }

  const arr1 = explode(str1);
  const arr2 = explode(str2);
  const set = new Set([...arr1, ...arr2]);

  let union = 0;
  let intersection = 0;
  set.forEach((item) => {
    const has1 = arr1.filter((x) => x === item).length;
    const has2 = arr2.filter((x) => x === item).length;
    union += Math.max(has1, has2);
    intersection += Math.min(has1, has2);
  });

  return union ? Math.floor((intersection / union) * 65536) : 65536;
}

const str1 = "aa1+aa2";
const str2 = "AAAA12";

// const str1 = "handshake";
// const str2 = "shake hands";

const result = solution(str1, str2);
console.log(result);
