const ansList = ["グー", "チョキ", "パー"];

console.log("最初はグー、じゃんけん・・・")
const You = prompt(`${ansList.map(x => `「${x}」`).join("")}の中から選んでください`);
console.log(`あなた:${You}`);
const JavaScript = ansList[Math.floor(Math.random() * ansList.length)];
console.log("あいて：" + JavaScript);

if (You === JavaScript) console.log("あいこです");
else if (You === "グー" && JavaScript === "チョキ") console.log("あなたの勝ちです");
else if (You === "グー" && JavaScript === "パー") console.log("あなたの負けです");
else if (You === "チョキ" && JavaScript === "グー") console.log("あなたの負けです");
else if (You === "チョキ" && JavaScript === "パー") console.log("あなたの勝ちです");
else if (You === "パー" && JavaScript === "グー") console.log("あなたの勝ちです");
else if (You === "パー" && JavaScript === "チョキ") console.log("あなたの負けです");
else console.log("正しいポーズを選んでください");
  
