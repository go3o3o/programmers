// https://school.programmers.co.kr/learn/courses/30/lessons/258712
function solution(friends, gifts) {
  const length = friends.length;
  const nameMap = new Map();
  const giftTable = new Array(length)
    .fill(0)
    .map((_) => new Array(length).fill(0));
  const rankInfo = new Array(length).fill(0);
  const nextMonth = new Array(length).fill(0);

  friends.forEach((name, idx) => {
    nameMap.set(name, idx);
  });

  gifts.forEach((gift) => {
    const [from, to] = gift.split(" ");
    giftTable[nameMap.get(from)][nameMap.get(to)]++;
  });

  for (let i = 0; i < length; i++) {
    rankInfo[i] = giftTable[i].reduce((acc, cur) => (acc += cur), 0);

    for (let j = 0; j < length; j++) {
      rankInfo[i] -= giftTable[j][i];
    }
  }

  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if (i === j) continue;
      if (giftTable[i][j] > giftTable[j][i]) nextMonth[i]++;
      if (giftTable[i][j] < giftTable[j][i]) nextMonth[j]++;
      if (giftTable[i][j] === giftTable[j][i]) {
        if (rankInfo[i] > rankInfo[j]) nextMonth[i]++;
        if (rankInfo[i] < rankInfo[j]) nextMonth[j]++;
      }
    }
  }

  return Math.max(...nextMonth);
}

const friends = ["muzi", "ryan", "frodo", "neo"];
const gifts = [
  "muzi frodo",
  "muzi frodo",
  "ryan muzi",
  "ryan muzi",
  "ryan muzi",
  "frodo muzi",
  "frodo ryan",
  "neo muzi",
];
const result = solution(friends, gifts);
console.log(result);
