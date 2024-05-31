// https://school.programmers.co.kr/learn/courses/30/lessons/155652
function solution(s, skip, index) {
  const answer = [];
  const alphabet = [..."abcdefghijklmnopqrstuvwxyz"].filter(
    (a) => ![...skip].includes(a)
  );

  s.split("").forEach((word) => {
    realIndex = (alphabet.indexOf(word) + index) % alphabet.length;
    answer.push(alphabet[realIndex]);
  });

  //   s.split("").forEach((word) => {
  //     let realIndex = alphabet.indexOf(word);
  //     const newIndex = (id) => {
  //       return id >= alphabet.length ? newIndex(id - alphabet.length) : id;
  //     };

  //     answer.push(alphabet[newIndex(realIndex + index)]);
  //   });

  return answer.join("");
}

const s = "zzzz";
const skip = "bcdefghijk";
const index = 20;
const result = solution(s, skip, index);
console.log(result);
