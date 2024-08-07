// https://school.programmers.co.kr/learn/courses/30/lessons/131128
function solution(X, Y) {
  var answer = [];

  // 문자열을 배열로 변환하여 각 숫자의 빈도 계산
  const countDigits = (num) => {
    const count = Array(10).fill(0);
    for (let digit of num) {
      count[parseInt(digit)]++;
    }
    return count;
  };

  const countX = countDigits(X);
  const countY = countDigits(Y);

  // 공통 숫자를 찾고 배열에 추가
  for (let i = 9; i >= 0; i--) {
    const commonCount = Math.min(countX[i], countY[i]);
    for (let j = 0; j < commonCount; j++) {
      answer.push(i);
    }
  }

  // 결과가 없는 경우
  if (answer.length === 0) return "-1";

  // 공통 숫자가 모두 0인 경우
  if (answer[0] === 0) return "0";

  return answer.join("");
}

const X = "2035";
// const Y = "2345";
const Y = "12300";
// const Y = "230450";

// const X = "5525";
// const Y = "1255";
const result = solution(X, Y);
console.log(result);
