// https://school.programmers.co.kr/learn/courses/30/lessons/12981
function solution(n, words) {
  var answer = [0, 0];
  const relay = [words[0]];

  for (let i = 1; i < words.length; i++) {
    const priorWord = relay[relay.length - 1];

    // console.log(i, priorWord, words[i]);
    const round = Math.ceil((i + 1) / n);
    const loser = (i + 1) % n || n;
    if (relay.includes(words[i])) {
      answer = [loser, round];
      break;
    }

    if (words[i][0] !== priorWord[priorWord.length - 1]) {
      answer = [loser, round];
      break;
    }
    relay.push(words[i]);
  }

  return answer;
}

const n = 3;
const words = [
  "tank",
  "kick",
  "know",
  "wheel",
  "land",
  "dream",
  "mother",
  "robot",
  "tank",
];

// const n = 5;
// const words = [
//   "hello",
//   "observe",
//   "effect",
//   "take",
//   "either",
//   "recognize",
//   "encourage",
//   "ensure",
//   "establish",
//   "hang",
//   "gather",
//   "refer",
//   "reference",
//   "estimate",
//   "executive",
// ];

// const n = 2;
// const words = ["hello", "one", "even", "never", "now", "world", "draw"];

const result = solution(n, words);
console.log(result);
