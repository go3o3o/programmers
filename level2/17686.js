// https://school.programmers.co.kr/learn/courses/30/lessons/17686
function solution(files) {
  const fileName = files.reduce((acc, cur) => {
    const match = cur.match(/(^[a-zA-Z\s\.\-]{1,})|([0-9]{1,5})/gi);
    acc[cur] = { head: match[0].toLowerCase(), number: Number(match[1]) };
    return acc;
  }, {});

  console.log(fileName);

  return Object.entries(fileName)
    .sort(([, a], [, b]) => {
      if (a.head < b.head) return -1;
      if (a.head > b.head) return 1;

      if (a.number < b.number) return -1;
      if (a.number > b.number) return 1;
      return 0;
    })
    .map(([k]) => k);
}

const files = [
  "img 12.png",
  "img10.png",
  "img02.png",
  "img1.png",
  "IMG01.GIF",
  "img2.JPG",
];

// const files = [
//   "F-5 Freedom Fighter",
//   "B-50 Superfortress",
//   "A-10 Thunderbolt II",
//   "F-14 Tomcat",
// ];

const result = solution(files);
console.log(result);
