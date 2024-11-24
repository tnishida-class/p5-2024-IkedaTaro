// テキスト「キーボード操作に反応する」
let x, y, vy;
let increment =0; // スピードアップのための変数
const g = 1; //重力

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height/2;
  vy = 0;
}

function draw(){
  background(160, 192, 255);
  if (keyIsDown("A".charCodeAt(0))) { //Aが押されたときにスピードアップ
    increment = 10;
  } else {
    increment = 0;
    }
  ellipse(x, y, 50);

  if(keyIsDown(LEFT_ARROW)){ x -= (5 + increment) };
  if(keyIsDown(RIGHT_ARROW)){ x += (5 + increment) };

  y += vy; //y座標にvyを足す ＝ ジャンプ
  if(y >= height/2){ y = height/2, vy = 0; } //地面にいるならそこで固定
  else{ vy += g; } //地面にいないなら重力をかける
  }

  function keyPressed(){
    if(key == " "){
      if (keyIsDown("A".charCodeAt(0))) { //Aが押されたときにジャンプ力アップ
        increment = 10;
      } else {
        increment = 0;
        }
      if(y >= height/2){ vy = -(20 + increment); } //地面にいるならジャンプ
    }
  }

  function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
  }





  /* function keyPressed(){
  if(key == " "){
     
  }
}

function jump() {
  if (y < height) {
    y += -5;
  } else {
    y = height / 2;
  }
} */

  //  if(keyIsDown(UP_ARROW)){ y -= (5 + increment) };
//  if(keyIsDown(DOWN_ARROW)){ y += (5 + increment) };
//  if(keyIsDown("A".charCodeAt(0))){ x+= 10; }
/*   if(keyIsDown(" ".charCodeAt(0))){
    y += vy;
    vy += g;
    vy = constrain(vy, -20 , 20);
  }
  if(y > height){ y = height, vy = -20; };
    y = constrain(y, 0 , height/2); 
} */





// イベントハンドラを使用するパターン
// function keyPressed(){
//   if(keyCode == LEFT_ARROW){ x -= 5; }
//   else if(keyCode == RIGHT_ARROW){ x+= 5; }
//   else if(keyCode == DOWN_ARROW){ y += 5; }
//   else if(keyCode == UP_ARROW){ y -= 5; }
//   else if(key == "A"){ x += 10; }
// }

