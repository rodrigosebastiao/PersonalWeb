window.onload = function(){
  start();
  slider();
}


/******************
**BALLOON SLIDING**
*******************/
addEventListener("wheel",slider);
addEventListener("mousemove",slider);
addEventListener("mouseover",slider);
addEventListener("mouseout",slider);
addEventListener("click",slider);
addEventListener("onmousedown",slider);
addEventListener("onmouseup",slider);
addEventListener("onkeydown",slider);
addEventListener("onkeyup",slider);


function slider() {
  var balloon = document.getElementById("chat");
  var y = 200;    
  var pageSize = document.body.clientHeight;

  if (y < 1500){/*avoid bottom enddless scrolling*/
    y += document.documentElement.scrollTop;
    if( y > 200 ){
      y += (300);//a 4th of page
    }
    balloon.style.top = y+'px';//dynamic var y
  }
}

/*********************
**ARCHTECT EFFECT**
**********************/
(function archtectEffects(){
  var subBar = document.getElementsByClassName("subBar")[0];
  var archtect = document.getElementById("archtect");
  var timeout1;
  var delay = 1000;

    if (!timeout1){
      timeout1 = null;
      timeout1 = window.setTimeout(function () {
        
        subBar.onmouseover = function() {    
          archtect.src = "images/archtectEffectBuild.gif";
        }
        
        archtect.onmouseout = function(){
          archtect.src = "images/archtectEffectUnbuild.gif";
        };

        if (delay <= 14000) {
          delay += 2000; console.log(delay);
        }

      }, delay);

    };

})();

/*****************
**BALLON SPLITER**
******************/
var audio = document.getElementsByTagName("audio")[0];

var chat = document.getElementById("chat");
var chatTXT = chat.getElementsByTagName("b")[0];
var wapp = document.getElementById("wapp");
var lchat = document.getElementById("liveChat");
var email = document.getElementById("email");

chat.onmouseover = function () {
  chatTXT.style.opacity = "0";

  wapp.style.top = "-40%";
    wapp.style.opacity = "1";
  lchat.style.left = "60%";
    lchat.style.opacity = "1";
  email.style.left = "-30%";
    email.style.opacity = "1";
sound();
}

chat.onmouseout = function() {
  chatTXT.style.opacity = "";

  wapp.style.top = "";
    wapp.style.opacity = "";
  lchat.style.left = "";
    lchat.style.opacity = "";
  email.style.left = "";
    email.style.opacity = "";
}

function sound(){
var delay = 5000;
var turn = 2;

  if (delay == 0 && turn%2 != 0){
    setTimeout(function(){
      console.log("sound!");
      turn++;
      delay++;
    },delay);
  }
}



/****************************
**SINUSOIDAL WAVES |CANVAS|**
*****************************/
var cycles = 200;//frequency, cycles/ms. More Slows
var amplitude = 0.5;
//the lower reduce line width and smoth bounce
var phase = 11;//height of wave
var crispy = 0.0005;//the higher line crisper
var stroke = 5; //line width
var alpha = 0.5;
var x = 0;//horizontal
var y = 0;//is Vertical = sin(x)
//var y = Amplitude*Math.Sin*Frequency*(x-Shift)*Math.PI
var isPaused = false;
var control;

function sinusoidal(cvName,color,defW,defH) {
var canvas = document.getElementById(cvName);

if(canvas != null){
var ctx = canvas.getContext('2d');

canvas.width = defW;
canvas.height = defH;

control = setInterval(wave,cycles);
  function wave() {
      if(canvas.onclick == null) {
      isPaused; console.log("Not Running");
      } else {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.beginPath();
  ctx.moveTo(0, canvas.height * 0.5);
    const len = canvas.width;
      for(x = 0; x < len; x++){
        amplitude += 0.0009;//tinier slower
        x += 1.5;//bigger slower
        y = canvas.height * 0.5 - (Math.random()*crispy + Math.sin(amplitude + x * 0.09))*phase;
        ctx.lineTo(x, y);
      }//end of for

        /*
        ctx.shadowColor = 'rgba(0,200,0,0.5)';
        ctx.shadowOffsetX = 3;
        ctx.shadowColor = 'rgba(0,200,0,0.5)';
        ctx.shadowBlur = 16;
        ctx.font = "25px Calibri Light";
        ctx.fillText(txt,sizeX/3,sizeY);
        ctx.fillStyle = 'rgba(255,255,255,1)';*/

        var li = document.getElementById("list").getElementsByTagName("li");      
        var liColor = window.getComputedStyle(li[color], "").getPropertyValue("border-color");
        
    ctx.globalAlpha = alpha;
    ctx.lineWidth = stroke;
    ctx.strokeStyle = liColor || 'grey';
    ctx.stroke();
      }//end of flag
    }// end of wave()
  }//if not null
}// end of sinusoidal()



function start() {
    isPaused = false;
    var sin = new sinusoidal("canvas",0,550*0.3,30);
    var sin2 = new sinusoidal("canvas2",1,550*0.4,30);
    var sin3 = new sinusoidal("canvas3",2,550*0.2,30);
    var sin4 = new sinusoidal("canvas4",3,550*0.05,30);
    var sin5 = new sinusoidal("canvas5",4,550*0.1,30);
    var sin6 = new sinusoidal("canvas6",5,550*0.5,30);
}

function pause() {//flag
  isPaused = true;
}

function mouseOver(){

}

function mouseOut(){

}

