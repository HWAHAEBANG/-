let target = document.querySelector('.sub-title');
let transparency = document.querySelector('.transparency');

let subtitle = '당신이 부자가 되는 곳'.split('');

function resetTyping(){
  subtitle = '당신이 부자가 되는 곳'.split('');
  target.textContent = "";
  dynamic(subtitle);
}

function dynamic(str){
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


function blink(){
  target.classList.toggle("active");
}
setInterval(blink, 500);


dynamic(subtitle);

function openTransparency(){ 
  gameText.style.display = 'flex' ;
}

// setTimeout(()=>{transparency.style.height = '100vh'},1000)