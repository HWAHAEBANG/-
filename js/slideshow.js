const sliderWrapper = document.getElementsByClassName('container');
const sliderContainer = document.getElementsByClassName('slider-container');
const slides = document.getElementsByClassName('slide');
let slideCount = slides.length;
let currentIndex = 0;
let topHeight = 0;
const navPrev = document.getElementById('prev');
const navNext = document.getElementById('next');

//슬라이드의 높이 확인하여 부모의 높이로 지정하기 (슬라이드의 높이가 다르게 들어올 수도 있으니까 css 가 아닌 JS에서 작성하는 것)
function calculateTallestSlide(){
  for(let i=0 ; i < slideCount ; i++){
    if(topHeight < slides[i].offsetHeight){
      topHeight = slides[i].offsetHeight;
    }
  }
  sliderWrapper[0].style.height = topHeight + 50 + 'px';
  sliderContainer[0].style.height = topHeight + 50 + 'px';
}

setTimeout(function(){
  calculateTallestSlide();
},100);
 // 사진이 다 로딩되기전에 높이를 재버려서 사진이 잘리는 버그 발생. 급처방으로 로딩할 시간 조금 주기!


// 슬라이드가 있으면 가로로 배열하기
for(let i = 0; i < slideCount; i++){
  slides[i].style.left = i*100 + '%';
}

// 슬라이드 이동 함수 
function goToSlide(idx){
  sliderContainer[0].style.left = idx*-100 + '%';
  sliderContainer[0].classList.add('animated');
  currentIndex = idx;
  // updateNav();
}

// 버튼기능 업데이트 함수(마지막은 버튼 사라지게 하기)
// function updateNav(){
//   if(currentIndex == 0){
//     navPrev.classList.add('disabled');
//   } else {
//     navPrev.classList.remove('disabled');
//   }

//   if(currentIndex == slideCount - 1){
//     navNext.classList.add('disabled');
//   } else {
//     navNext.classList.remove('disabled');
//   }
// }



// 버튼을 클릭하면 슬라이드 이동시키기
navPrev.addEventListener('click', (event)=>{
  event.preventDefault();
  //goToSlide(currentIndex - 1);
  if(currentIndex == 0){
    goToSlide(slideCount-1)
  } else {
    goToSlide(currentIndex - 1);
  }
}
)

navNext.addEventListener('click', (event)=>{
  event.preventDefault();
  //goToSlide(currentIndex + 1);
  if(currentIndex == slideCount-1){
    goToSlide(0);
  }else{
    goToSlide(currentIndex + 1);
  }
})


// 첫번째 슬라이드 먼저 보이도록 하기
goToSlide(0);