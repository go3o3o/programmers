// https://school.programmers.co.kr/learn/courses/30/lessons/17682
function solution(dartResult) {
  const darts = dartResult
    .replace(/([0-9]{0,2}(D|S|T|\*|\#))/g, `$1 `)
    .split(" ")
    .filter((el) => el)
    .map((dart) => {
      if (dart.includes("S")) {
        const score = dart.replace(/[^0-9]/, "");
        return Number(score);
      }
      if (dart.includes("D")) {
        const score = dart.replace(/[^0-9]/, "");
        return Number(score) ** 2;
      }
      if (dart.includes("T")) {
        const score = dart.replace(/[^0-9]/, "");
        return Number(score) ** 3;
      }
      return dart;
    });

  const result = [];
  for (let i = 0; i < darts.length; i++) {
    const score = darts[i];
    if (score === "#") {
      const length = result.length;
      const oneAgo = result[length - 1];

      result[length - 1] = oneAgo * -1;
    } else if (score === "*") {
      const length = result.length;
      const oneAgo = result[length - 1];
      const twoAgo = result[length - 2] || 0;

      result[length - 1] = oneAgo * 2;
      if (twoAgo) result[length - 2] = twoAgo * 2;
    } else {
      result.push(score);
    }
  }

  console.log(result);

  return result.reduce((acc, cur) => acc + cur, 0);
}
// const dartResult = "1S2D*3T";
// const dartResult = "1D2S#10S";
// const dartResult = "1D2S3T*";
// const dartResult = "1D#2S*3S";
const result = solution(dartResult);
console.log(result);
