// https://school.programmers.co.kr/learn/courses/30/lessons/172928
function solution(park, routes) {
  const maxX = park[0].length;
  const maxY = park.length;

  let start;
  for (let i = 0; i < park.length; i++) {
    for (let j = 0; j < park[0].length; j++) {
      if (park[i][j] === "S") start = [i, j];
    }
  }

  let [y, x] = start;
  for (const route of routes) {
    const [op, n] = route.split(" ");
    const move = Number(n);

    let step = 0;
    let flag = false;
    let tempX = x;
    let tempY = y;
    while (step < move) {
      if (op === "E") {
        tempX += 1;
      } else if (op === "W") {
        tempX -= 1;
      } else if (op === "S") {
        tempY += 1;
      } else if (op === "N") {
        tempY -= 1;
      }

      //   console.log(op, [tempY, tempX], park[tempY][tempX]);

      if (tempX >= maxX || tempX < 0 || tempY >= maxY || tempY < 0) {
        flag = false;
        break;
      } else if (park[tempY][tempX] === "X") {
        flag = false;
        break;
      } else {
        flag = true;
      }
      step += 1;
    }
    if (flag) {
      x = tempX;
      y = tempY;
    }
  }

  return [y, x];
}

// [0,0] -> [0,2] -> [2,2] -> [2,1]
// const park = ["SOO", "OOO", "OOO"];
// const routes = ["E 2", "S 2", "W 1"];

// [0,0] -> [0,2] -> [2, 2] -> [0,1]
// const park = ["SOO", "OXX", "OOO"];
// const routes = ["E 2", "S 2", "W 1"];

const park = ["OSO", "OOO", "OXO", "OOO"];
const routes = ["E 2", "S 3", "W 1"];

const result = solution(park, routes);
console.log(result);
