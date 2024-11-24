function setup() {
  createCanvas(windowWidth, windowHeight);
  word = spawnWord();  // 最初の風船の単語をspawnword関数で選んでwordに代入

  balls = [];  // 複数の玉（風船）を格納する配列
  addBall();   // 最初の玉を追加

  // 初期設定の必要はないため、ボールの動きの設定を各玉のオブジェクト内に含める
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

let size = 170; // 円の大きさ
let typedwords = ""; // 入力された文字列  
let balloonwords = ["apple", "banana", "cherry", "dragonfly", "elephant", "fox", "giraffe", "horizon", "igloo", "jungle"]; // 風船に表示する単語の配列
let word = "";
let count = 0;

let balls = []; // 複数の玉を格納する配列
const g = 1; // 重力加速度
const vyMax = 30;

function draw() {
  background(230, 235, 224);
  fill(237, 106, 90);
  ellipse(width / 2, height / 2, size); //円を描く
  // 風船の文字列とメッセージを表示
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(24, 24, 24);
  text("丸の中に表示される単語を入力してね", width / 2, height / 5 - 30);
  text("大文字のRで入力をリセットできるよ", width / 2, height / 5);
  text(word, width / 2, height / 2); // 風船に表示する文字列を表示
  text(typedwords, width / 2, height * 2 / 3);  // 入力された文字列を表示


  // いいね！の数を表示
  if (count > 0 && count < 10) {
    fill(24, 24, 24);
    text("いいね！" + count, width / 6, height / 3);
  }
  if (count > 9) {
     fill(24, 24, 24);
     text("fantastic!!" + count, width / 6 + 20, height / 3);
  }

  // 風船の玉（ボール）を描画
  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];
    fill(237, 106, 90);
    ellipse(ball.x, ball.y, 20, 20); // 玉を描く

    // 玉の位置を更新
    ball.x += ball.vx;
    ball.y += ball.vy;
    ball.vy = constrain(ball.vy + g, -vyMax, vyMax); // 重力を加える
    if (ball.x < 0 || ball.x > width) { ball.vx = -1 * ball.vx; } // 画面の端で跳ね返る
    if (ball.y > height) { ball.vy = -1 * ball.vy; } // 画面の下で跳ね返る

    // 玉の位置制限
    ball.x = constrain(ball.x, 0, width);
    ball.y = constrain(ball.y, 0, height);
  }
}

function keyTyped() {
  if (key === 'R') {
    typedwords = ""; // 文字列をリセット
  } else {
    typedwords += key; // 入力された文字列を追加
  }

  // 正しい単語が入力されたとき
  if (typedwords === word) {
    word = spawnWord(); // 新しい単語を表示
    typedwords = ""; // 文字列をリセット
    count += 1;
    addBall(); // 新しい玉を追加
  }
}

function keyPressed() {
  if (key === 'Backspace') {
    typedwords = typedwords.slice(0, -1); // 最後の文字を削除
  }
}

// 新しい玉を追加する関数
function addBall() {
  let ball = {
    x: random(width),  // x座標をランダムに設定
    y: random(height), // y座標をランダムに設定
    vx: random(4, 8),  // 初期のx方向速度
    vy: random(4, 8)   // 初期のy方向速度
  };
  balls.push(ball); // 配列に追加
}

function spawnWord() {
  // 新しい単語をランダムに作成
  return random(balloonwords);
}