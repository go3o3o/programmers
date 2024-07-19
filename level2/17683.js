// https://school.programmers.co.kr/learn/courses/30/lessons/17683
function solution(m, musicinfos) {
  var answer = "(None)";
  var maxDuration = 0;

  musicinfos.forEach((info) => {
    const [start, end, title, melody] = info.split(",");
    const duration = toMinutes(end) - toMinutes(start);
    let fullMelody = convertMelody(melody);
    let playMelody = "";

    for (let i = 0; i < duration; i++) {
      playMelody += fullMelody[i % fullMelody.length];
    }

    if (playMelody.includes(convertMelody(m)) && duration > maxDuration) {
      answer = title;
      maxDuration = duration;
    }
  });

  return answer;
}

// HH:mm -> minutes 변환하는 함수
const toMinutes = (time) => {
  const t = time.split(":");
  return (+t[0] * 60 * 60 + +t[1] * 60) / 60;
};

// [A-Z]# 변환하는 함수
const convertMelody = (melody) => {
  return melody
    .replace(/(C#)/g, "c")
    .replace(/(D#)/g, "d")
    .replace(/(F#)/g, "f")
    .replace(/(G#)/g, "g")
    .replace(/(A#)/g, "a")
    .replace(/(B#)/g, "b");
};

const m = "ABCDE";
// const musicinfos = ["12:00,12:14,HELLO,CDEFGAB", "13:00,13:15,WORLD,ABCDEF"];
const musicinfos = ["12:00,12:04,HELLO,C#DEFGAB", "13:00,13:05,WORLD,ABCDEF"];
const result = solution(m, musicinfos);
console.log(result);
