const questions = [
  //問題文と選択肢と解答
  {
    text: "「4」は英語で？",
    choices: ["For", "Four"],
    answer: 1
  },
  {
    text: "「作物」は英語で？",
    choices: ["Crop", "Crap"],
    answer: 0
  },
  { 
    text: "「太陽」は英語で？",
    choices: ["Sun", "Son"],
    answer: 0
  },
  { 
    text: "「私」は英語で？",
    choices: ["I", "Eye"],
    answer: 0 
  },
  {
    text: "「赤」は英語で？",
    choices: ["Read", "Red"],
    answer: 1
  },
  {
    text: "「騎士」は英語で？",
    choices: ["Knight", "Night"],
    answer: 0
  },
  {
    text: "「買う」は英語で？",
    choices: ["Buy", "By"],
    answer: 0
  },
  {
    text: "「海」は英語で？",
    choices: ["See", "Sea"],
    answer: 1
  },
  {
    text: "「聞く」は英語で？",
    choices: ["Hear", "Here"],
    answer: 0
  },
  {
    text: "「壊す」は英語で？",
    choices: ["Break", "Brake"],
    answer: 0
  },
  {
    text: "「細胞」は英語で？",
    choices: ["Sell", "Cell"],
    answer: 1
  },
  {
    text:"「書く」は英語で？",
    choices: ["Right", "Write"],
    answer: 1
  },
  {
    text: "「甘い」は英語で？",
    choices: ["Sweet", "Suite"],
    answer: 0
  },
  {
    text: "「2」は英語で？",
    choices: ["Too", "Two"],
    answer: 1
  },
  {
    text: "「列」は英語で？",
    choices: ["Queue", "Cue"],
    answer: 0
  },
  {
    text: "「雨」は英語で？",
    choices: ["Rain", "Rein"],
    answer: 0
  },
];

let current = 0; //現在の問題の数
let score = 0; //現在の点数

//問題文と選択肢と解答を表示
function showQuestion() {
  const q = questions[current];

  document.getElementById("question").textContent = q.text;

  const btnA = document.getElementById("btnA");
  const btnB = document.getElementById("btnB");
  const btnNext = document.getElementById("btnNext");

  btnA.textContent = q.choices[0]; // ボタンに対応する選択肢
  btnB.textContent = q.choices[1];

  btnA.disabled = false; // ABの選択肢を表示
  btnB.disabled = false;
  btnNext.disabled = true; // 次の問題へのボタンを押せなくする
  document.getElementById("result").textContent = "";
  
  //通常モードに直す
  document.getElementById("app").classList.remove("end");
}

// 答え合わせ
function answer(choice) {
  const q = questions[current];

  const btnA = document.getElementById("btnA");
  const btnB = document.getElementById("btnB");
  const btnNext = document.getElementById("btnNext");
  const result = document.getElementById("result");

  // もし選んだのがこれの場合
  if (choice === q.answer) {
    // 1点獲得
    score++; 
    // 正誤判定
    document.getElementById("result").textContent = "Correct!";
    result.style.color = "green"; 
  } else {
    document.getElementById("result").textContent = "Incorrect...";
    result.style.color = "red";
  }
  btnA.disabled = true; // ABのボタンを押せなくする
  btnB.disabled = true;
  btnNext.disabled = false; // 次の問題へのボタンを表示
}

// 次のボタン押した場合
function next() {
  const btnA = document.getElementById("btnA");
  const btnB = document.getElementById("btnB");
  const btnNext = document.getElementById("btnNext");
  
  // 現在の回答数を問題数と比較
  if (current < questions.length - 1) {
    current++;
    // 未回答があるなら問題を表示
    showQuestion();
  } else {
    // 全ての問題に回答した場合
    btnNext.disabled = true;
    btnA.disabled = true;
    btnB.disabled = true;
    // 最終結果を表示
    document.getElementById("question").textContent = "問題はこれで終了です。";
    document.getElementById("result").textContent = score + "問正解しました！";
    document.getElementById("app").classList.add("end");
  }
}

// 最初から問題を表示
window.onload = function () {
  showQuestion();
};
