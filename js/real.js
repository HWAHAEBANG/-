let target = document.querySelector('.sub-title');
let title = document.querySelector('.title'); 
let transparency = document.querySelector('.transparency');
const opening = document.querySelector('.opening');
const start = document.querySelector('.start');
const body = document.querySelector('body');
const menu = document.querySelector('#menu');

let stop = false;
let subtitle = '당신이 부자가 되는 곳'.split('');

function resetTyping(){
  subtitle = '당신이 부자가 되는 곳'.split('');
  target.textContent = "";
  dynamic(subtitle);
}


//function

// 타이핑 효과
function dynamic(str){
  if(stop) return;
  //console.log(randomArr);
    if(subtitle.length > 0){
      target.textContent += subtitle.shift(); // 랜덤한 배열의 맨 앞 요소를 타겟 변수의 내용에 담는다.
      setTimeout(function(){
        dynamic(str) // 재귀함수
      },80);
    }else{
      setTimeout(resetTyping, 3000);
    }
  }

// 커서 깜빡이기
function blink(){
  if(stop) return;
  target.classList.toggle("active");
}
setInterval(blink, 500);


dynamic(subtitle);

function openTransparency(){ 
  gameText.style.display = 'flex' ;
}


// Event
start.addEventListener('click',() => {
  stop = true;
  setTimeout(()=>{
    dynamic();
    blink();
  },0)
  opening.style.height = '0'; 
  title.style.top = '-2%';
  title.style.left = '0%';
  title.style.transform = 'scale(0.4)';
  // title.style.left = '0';
  body.style.overflowY = 'scroll';
  start.style.transform = 'rotateX(90deg)';
  menu.style.opacity = '1';
// 
})


$(window).load(function(){
  var height = window.innerHeight,
  x= 0, y= height/2,
  curveX = 10,
  curveY = 0,
  targetX = 0,
  xitteration = 0,
  yitteration = 0,
  menuExpanded = false;
  
  blob = $('#blob'),
  blobPath = $('#blob-path'),

  hamburger = $('.hamburger');

  $(this).on('mousemove', function(e){
    x = e.pageX;
    
    y = e.pageY;
  });

  $('.hamburger, .menu-inner').on('mouseenter', function(){
    $(this).parent().addClass('expanded');
    menuExpanded = true;
  });

  $('.menu-inner').on('mouseleave', function(){
    menuExpanded = false;
    $(this).parent().removeClass('expanded');
  });

  function easeOutExpo(currentIteration, startValue, changeInValue, totalIterations) {
    return changeInValue * (-Math.pow(2, -10 * currentIteration / totalIterations) + 1) + startValue;
  }

  var hoverZone = 150;
  var expandAmount = 20;
  
  function svgCurve() {
    if ((curveX > x-1) && (curveX < x+1)) {
      xitteration = 0;
    } else {
      if (menuExpanded) {
        targetX = 0;
      } else {
        xitteration = 0;
        if (x > hoverZone) {
          targetX = 0;
        } else {
          targetX = -(((60+expandAmount)/100)*(x-hoverZone));
        }     
      }
      xitteration++;
    }

    if ((curveY > y-1) && (curveY < y+1)) {
      yitteration = 0;
    } else {
      yitteration = 0;
      yitteration++;  
    }

    curveX = easeOutExpo(xitteration, curveX, targetX-curveX, 100);
    curveY = easeOutExpo(yitteration, curveY, y-curveY, 100);

    var anchorDistance = 200;
    var curviness = anchorDistance - 40;

    var newCurve2 = "M60,"+height+"H0V0h60v"+(curveY-anchorDistance)+"c0,"+curviness+","+curveX+","+curviness+","+curveX+","+anchorDistance+"S60,"+(curveY)+",60,"+(curveY+(anchorDistance*2))+"V"+height+"z";

    blobPath.attr('d', newCurve2);

    blob.width(curveX+60);

    hamburger.css('transform', 'translate('+curveX+'px, '+curveY+'px)');
    
    $('h2').css('transform', 'translateY('+curveY+'px)');
    window.requestAnimationFrame(svgCurve);
  }

  window.requestAnimationFrame(svgCurve);
  
});