// https://school.programmers.co.kr/learn/courses/30/lessons/92341
function solution(fees, records) {
  // HH:mm -> minutes 변환하는 함수
  const toMinutes = (time) => {
    const t = time.split(":");
    return (+t[0] * 60 * 60 + +t[1] * 60) / 60;
  };

  // 금액 계산하는 함수
  const calculate = (time) => {
    const [defaultTime, defaultFee, unitTime, unitFee] = fees;
    if (time <= defaultTime) return defaultFee;
    const addFee = Math.ceil((time - defaultTime) / unitTime) * unitFee;
    console.log(time, defaultTime, unitTime, unitFee, addFee);
    return defaultFee + (addFee < unitFee ? unitFee : addFee);
  };

  // return { `${차량번호}`: [ `${입차분}`, `${출차분}` ] }
  const parking = records.reduce((acc, cur) => {
    const [time, car, inOut] = cur.split(" ");
    const minutes = toMinutes(time);
    if (!acc[car]) {
      acc[car] = [];
    }

    acc[car].push(minutes);
    return acc;
  }, {});

  const defaultOut = toMinutes("23:59");
  Object.keys(parking).map((key) => {
    // 출차분이 없을 경우 홀수로 떨어지기 때문에, 23:59 출차분 강제 추가
    if (parking[key].length % 2 > 0) {
      parking[key].push(defaultOut);
    }

    // 누적시간(출차분 - 입차분의 모든 합)
    const accTime = [];
    for (let i = parking[key].length - 1; i >= 0; i -= 2) {
      accTime.push(parking[key][i] - parking[key][i - 1]);
    }
    const fee = accTime.reduce((acc, cur) => acc + cur, 0);
    parking[key] = calculate(fee);
  });

  return Object.keys(parking)
    .sort()
    .map((key) => parking[key]);
}

const fees = [180, 5000, 10, 600];
const records = [
  "05:34 5961 IN",
  "06:34 5961 OUT",
  "07:34 5961 IN",
  "08:34 5961 OUT",
  "09:34 5961 IN",
  "10:34 5961 OUT",
  "11:34 5961 IN",
  "12:34 5961 OUT",
];

// const fees = [120, 0, 60, 591];
// const records = [
//   "16:00 3961 IN",
//   "16:00 0202 IN",
//   "18:00 3961 OUT",
//   "18:00 0202 OUT",
//   "23:58 3961 IN",
// ];
const result = solution(fees, records);
console.log(result);
