// https://school.programmers.co.kr/learn/courses/30/lessons/42587
function solution(priorities, location) {
  var answer = 0;

  const processes = priorities.map((process, index) => {
    return { process, index };
  });

  while (processes.length > 0) {
    const { process, index } = processes.shift();
    if (processes.some((el) => el.process > process)) {
      processes.push({ process, index });
    } else {
      answer++;
      if (index === location) break;
    }
  }
  console.log(answer);

  return answer;
}

// const priorities = [2, 1, 3, 2];
// const location = 2;
const priorities = [2, 3, 3, 2, 9, 3, 3];
const location = 3;

// abcd
// acdb
// adbc
// adcb

const result = solution(priorities, location);
console.log(result);
