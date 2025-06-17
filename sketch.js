var img01
var xJogador1 = 0
var t = 0
var v = 0
var z = 0
var r = 600;
var y = 0
var x = 600;
var speed = 0.10;

function setup() {
createCanvas(700, 700);
img01= loadImage('fundo-da-paisagem-do-campo-do-vetor-da-opiniao-do-campo-construcoes-da-cidade-tema-da-agricultura-vila-700-125249498.jpg');

  
  
  
  frameRate(30);

}

function draw() {
  background(img01);

  
  
  
  
  
  //segunda parte
  let deltaX = speed * deltaTime

  t += deltaX
  v += deltaX
  x -= deltaX
  y += deltaX
  r -= deltaX
  z += deltaX
  if (v > 615)  {
    v = 0;
  }  
  
   if (t > 630)  {
    t = 0;
  }
  
  if (x < 1)  {
    x = 600;
  }

  if (y > 600)  {
    y = 0;
  }
  if (r < -30)  {
    r = 600;
  }

  if (z > 650)  {
    z = 0;
  }
    
  textSize(80)
 
  text("🐄",r, 600, 20);
  text("🐄",x, 500, 20); 
  text("🚀",t, 250, 20);
  textSize(50)
  text("🐓",r, 550, 20); 
  textSize(50)
  textSize(70)
  text("🎈",80,xJogador1)
  xJogador1 -= random (2)
  if (xJogador1< 0){
  xJogador1=250
  }
  
}