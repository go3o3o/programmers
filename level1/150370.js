// https://school.programmers.co.kr/learn/courses/30/lessons/150370
function solution(today, terms, privacies) {
  var answer = [];
  const expiration = new Map();
  terms.forEach((term) => {
    const [el, month] = term.split(" ");
    expiration.set(el, Number(month));
  });

  privacies.forEach((privacy, index) => {
    const [date, el] = privacy.split(" ");

    if (expiration.has(el)) {
      const expiryDay = addMonth(date, expiration.get(el));
      const isDestroy = expiryDay <= new Date(today);
      if (isDestroy) answer.push(index + 1);
    }
  });

  return answer;
}

const addMonth = (date, month) => {
  const now = new Date(date);
  return new Date(now.setMonth(now.getMonth() + month));
};

const today = "2022.05.19";
const terms = ["A 6", "B 12", "C 3"];
const privacies = [
  "2021.05.02 A",
  "2021.07.01 B",
  "2022.02.19 C",
  "2022.02.20 C",
];
const result = solution(today, terms, privacies);
console.log(result);
