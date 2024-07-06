// https://school.programmers.co.kr/learn/courses/30/lessons/87946
function solution(k, dungeons) {
  var answer = [];
  const visited = Array.from(dungeons.length).fill(false);

  const dfs = (fatigue, raid) => {
    answer.push(raid);
    for (let i = 0; i < dungeons.length; i++) {
      if (!visited[i] && dungeons[i][0] <= fatigue) {
        visited[i] = true;
        dfs(fatigue - dungeons[i][1], raid + 1);
        visited[i] = false;
      }
    }
  };
  dfs(k, 0);

  return Math.max(...answer);
}

const k = 80;
const dungeons = [
  [80, 20],
  [50, 40],
  [30, 10],
];
const result = solution(k, dungeons);
console.log(result);
