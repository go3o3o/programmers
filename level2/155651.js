// https://school.programmers.co.kr/learn/courses/30/lessons/155651

// const book_time = [
//   ["15:00", "17:00"],
//   ["16:40", "18:20"],
//   ["14:20", "15:20"],
//   ["14:10", "19:20"],
//   ["18:20", "21:20"],
// ];
const book_time = [
  ["10:20", "12:30"],
  ["10:20", "12:30"],
  ["10:20", "12:30"],
];

const parseTime = (time) => {
  return time.split(":").reduce((acc, cur) => 60 * acc + +cur);
};

function solution(book_time) {
  let answer = [];
  book_time.sort().forEach((time) => {
    const checkIn = parseTime(time[0]);
    const checkOut = parseTime(time[1]);

    if (answer.length == 0) {
      answer.push(checkOut + 10);
    } else {
      answer = answer.sort();
      let flag = false;
      for (let i = 0; i < answer.length; i++) {
        if (answer[i] <= checkIn) {
          answer[i] = checkOut + 10;
          flag = true;
          break;
        }
      }
      if (!flag) answer.push(checkOut + 10);
    }
  });

  return answer.length;
}

solution(book_time);
