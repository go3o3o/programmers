// https://school.programmers.co.kr/learn/courses/30/lessons/118666
function solution(survey, choices) {
  const personality = new Map();
  const scores = { 1: 3, 2: 2, 3: 1, 4: 0, 5: 1, 6: 2, 7: 3 };

  for (let i = 0; i < survey.length; i++) {
    const [disagree, agree] = survey[i].split("");

    let choice = choices[i];
    let score = scores[choice];
    let type;
    if (choice > 4) {
      type = agree;
      if (personality.has(agree)) {
        score += personality.get(agree);
      }
    } else {
      type = disagree;
      if (personality.has(disagree)) {
        score += personality.get(disagree);
      }
    }
    personality.set(type, score);
  }

  console.log(personality);
  var answer = [];
  const R = personality.get("R") || 0;
  const T = personality.get("T") || 0;
  const C = personality.get("C") || 0;
  const F = personality.get("F") || 0;
  const J = personality.get("J") || 0;
  const M = personality.get("M") || 0;
  const A = personality.get("A") || 0;
  const N = personality.get("N") || 0;
  answer[0] = R >= T ? "R" : "T";
  answer[1] = C >= F ? "C" : "F";
  answer[2] = J >= M ? "J" : "M";
  answer[3] = A >= N ? "A" : "N";

  return answer.join("");
}

// const survey = ["AN", "CF", "MJ", "RT", "NA"];
// const choices = [5, 3, 2, 7, 5];

const survey = ["TR", "RT", "TR"];
const choices = [7, 1, 3];

const result = solution(survey, choices);
console.log(result);
