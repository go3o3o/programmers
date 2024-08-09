// https://school.programmers.co.kr/learn/courses/30/lessons/150368
function solution(users, emoticons) {
  const discounts = [10, 20, 30, 40];

  // 가능한 모든 할인 조합 계산
  const allDiscountCombinations = getCombinations(discounts, emoticons.length);

  let maxPlusSubscribers = 0;
  let maxRevenue = 0;

  allDiscountCombinations.forEach((combination) => {
    let plusSubscribers = 0;
    let revenue = 0;

    users.forEach((user) => {
      const [userDiscount, userSpending] = user;
      let userSpent = 0;

      emoticons.forEach((emoticon, i) => {
        if (combination[i] >= userDiscount) {
          userSpent += emoticon * (1 - combination[i] / 100);
        }
      });

      if (userSpent >= userSpending) {
        plusSubscribers += 1;
      } else {
        revenue += userSpent;
      }
    });
    if (
      plusSubscribers > maxPlusSubscribers ||
      (plusSubscribers === maxPlusSubscribers && revenue > maxRevenue)
    ) {
      maxPlusSubscribers = plusSubscribers;
      maxRevenue = revenue;
    }
  });

  return [maxPlusSubscribers, Math.round(maxRevenue)];
}

const getCombinations = (discounts, length) => {
  const result = [];
  const generate = (current) => {
    if (current.length === length) {
      result.push(current.slice());
      return;
    }
    for (const discount of discounts) {
      current.push(discount);
      generate(current);
      current.pop();
    }
  };
  generate([]);
  return result;
};

const users = [
  [40, 10000],
  [25, 10000],
];
const emoticons = [7000, 9000];
const result = solution(users, emoticons);
console.log(result);
