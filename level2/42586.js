// https://school.programmers.co.kr/learn/courses/30/lessons/42586
function solution(progresses, speeds) {
  var answer = [];
  const tasks = [];
  for (let i = 0; i < progresses.length; i++) {
    let day = 0;
    let progress = progresses[i];
    while (progress < 100) {
      progress += speeds[i];
      day++;
    }
    tasks.push(day);
  }

  let deploy = 1;
  let pre = tasks.shift();
  while (true) {
    const task = tasks.shift();

    if (pre >= task) {
      deploy++;
    } else {
      answer.push(deploy);
      deploy = 1;
      pre = task;
    }

    if (tasks.length === 0) {
      answer.push(deploy);
      break;
    }
  }

  return answer;
}

const progresses = [93, 30, 55];
const speeds = [1, 30, 5];

// const progresses = [95, 90, 99, 99, 80, 99];
// const speeds = [1, 1, 1, 1, 1, 1];

const result = solution(progresses, speeds);
console.log(result);
