// https://school.programmers.co.kr/learn/courses/30/lessons/92335
function solution(n, k) {
  var answer = 0;

  const transfer = n.toString(k);
  const matched = transfer.split("0");
  //   const matched = `${transfer}`.match(
  //     /0([1-9]{1,9})0|([1-9]{1,9})0|0([1-9]{1,9})|([1-9]{1,9})/g
  //   );

  for (const match of matched) {
    if (isPrime(Number(match))) {
      answer++;
    }
  }
  return answer;
}

const isPrime = (num) => {
  if (num === 1 || !num) return false;
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const n = 437674;
const k = 3;

// const n = 20110;
// const k = 10;
const result = solution(n, k);
console.log(result);
