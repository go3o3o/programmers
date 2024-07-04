// https://school.programmers.co.kr/learn/courses/30/lessons/84512
function solution(word) {
  const vowels = ["A", "E", "I", "O", "U"];
  const allWords = [];

  const generateWords = (currentWord) => {
    if (currentWord.length > 5) return;

    if (currentWord.length > 0) {
      allWords.push(currentWord);
    }

    for (const vowel of vowels) {
      generateWords(currentWord + vowel);
    }
  };

  generateWords("");

  allWords.sort();
  return allWords.indexOf(word) + 1;
}

const word = "AAAAE";
const result = solution(word);
console.log(result);
