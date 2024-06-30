// https://school.programmers.co.kr/learn/courses/30/lessons/42888
function solution(record) {
  var answer = [];

  const nicknames = {};
  const actions = [];
  record.forEach((message) => {
    const [action, uid, nickname] = message.split(" ");

    if (nickname) {
      nicknames[uid] = nickname;
    }
    actions.push([uid, action]);
  });

  actions.forEach((action) => {
    const [uid, act] = action;
    if (act === "Enter") {
      answer.push(`${nicknames[uid]}님이 들어왔습니다.`);
    }
    if (act === "Leave") {
      answer.push(`${nicknames[uid]}님이 나갔습니다.`);
    }
    if (act === "Change") {
    }
  });

  return answer;
}

const record = [
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
  "Leave uid4567",
];

const result = solution(record);
console.log(result);
