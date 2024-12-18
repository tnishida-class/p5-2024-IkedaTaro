// テキスト「関数を使う」
// 練習問題：このプログラムを改造してEUの旗を描いてみよう
function setup(){
  createCanvas(300, 200);
  background(53,64,235);
  }
  
  function draw(){
    fill(235, 222, 52);
    noStroke();
    for(let i = 0; i < 12; i++){
    let theta = TWO_PI * i / 12;
    let x = 150 + cos(theta) * 50;
    let y = 100 + sin(theta) * 50;
    star(x, y, 10);
  }
 }
  
  function star(cx,cy,r){
  
  beginShape();
    for (let i=0; i<5; i++){
      const theta = TWO_PI * i * 2 / 5 - HALF_PI
      const x = cx + cos(theta) * r ;
      const y = cy + sin(theta) * r ;
      vertex(x,y);
    }
    endShape(CLOSE);  
   }
  
  // for(let i = 0; i < 12; i++){
  //   let theta = TWO_PI * i / 12;
  //   let x = 100 + cos(theta) * 50;
  //   let y = 100 + sin(theta) * 50;
  //   ellipse(x, y, 10);
  // }

// ヒント：section5-2 にある star 関数をここにコピーして、 draw 内で ellipse の代わりに使おう
