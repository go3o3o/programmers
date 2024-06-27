// https://school.programmers.co.kr/learn/courses/30/lessons/17684
function solution(msg) {
  var answer = [];
  const dictionary = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"].reduce((cur, acc, i) => {
    cur[acc] = i + 1;
    return cur;
  }, {});

  let dictSize = Object.keys(dictionary).length + 1;
  let w = msg[0];
  for (let i = 1; i <= msg.length; i++) {
    const c = msg[i];
    const wc = w + c;

    if (dictionary[wc]) {
      w = wc;
    } else {
      dictionary[wc] = dictSize++;
      answer.push(dictionary[w]);
      w = c;
    }
    // console.log(w);
  }
  //   console.log(dictionary);

  return answer;
}

const msg = "KAKAO";
// const msg = "TOBEORNOTTOBEORTOBEORNOT";
const result = solution(msg);
console.log(result);
