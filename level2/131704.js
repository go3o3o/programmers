// https://school.programmers.co.kr/learn/courses/30/lessons/131704
function solution(order) {
  var answer = 0;

  const belt1 = Array.from({ length: order.length }, (v, i) => i + 1).reverse();
  const belt2 = [];

  let move = false;
  for (let i = 0; i < order.length; i++) {
    move = false;
    while (true) {
      console.log(order[i], belt2, belt1);

      if (order[i] === belt2.at(-1)) {
        answer++;
        belt2.pop();
        move = true;
        break;
      }

      const box1 = belt1.pop();
      if (order[i] === box1) {
        answer++;
        move = true;
        break;
      }

      if (!belt1.length) break;
      belt2.push(box1);
    }
    if (!move) break;
  }

  return answer;
}

const order = [4, 3, 1, 2, 5];
// const order = [5, 4, 3, 2, 1];
const result = solution(order);
console.log(result);
