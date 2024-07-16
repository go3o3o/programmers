// https://school.programmers.co.kr/learn/courses/30/lessons/49993
function solution(skill, skill_trees) {
  const regex = new RegExp(`[^${skill}]`, "g");
  const trees = skill_trees.map((tree) => tree.replace(regex, ""));

  return trees.filter((el) => skill.startsWith(el)).length;
}

const skill = "ABCDEFG";
const skill_trees = ["ABS", "AD", "A"];
// const skill = "ABCD";
// const skill_trees = ["ABCD", "AC", "BC", "CAB", "C", "B"];
const result = solution(skill, skill_trees);
console.log(result);
