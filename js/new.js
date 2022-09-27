const navbar = document.querySelector('.navbar');
const navbarMenu = document.querySelector('.navbar__menu');
const mainMenuList = document.querySelectorAll('.navbar__menu > li');
const subMenuList = document.querySelectorAll('.submenu');
const navbarIcons = document.querySelector('.navbar__icons');
const toogleBtn = document.querySelector('.navbar__toogleBtn')
let navbarHeight = navbar.offsetHeight;
let screenSize;


/* 양식!!! 화면 사이즈 변경체크 & 사이즈별 동작 수행! */
// var mql = window.matchMedia("screen and (max-width: 768px)");

// mql.addListener(function(e) {
// 	if(e.matches) {
// 		console.log('모바일 화면 입니다.');
// 	} else {
// 		console.log('데스크탑 화면 입니다.');
// 	}
// });
// 출처: https://offbyone.tistory.com/122 [쉬고 싶은 개발자:티스토리]

var mql = window.matchMedia("screen and (max-width: 768px)");

mql.addListener(function(e) {
	if(e.matches) {
		console.log('모바일 화면 입니다.');
    
	} else {
		console.log('데스크탑 화면 입니다.');
    navbar.style.height = '80px';
    for(let i=0; i < mainMenuList.length; i++ ){
      mainMenuList[i].addEventListener('mouseover',()=>{
        navbar.style.height = navbarHeight + subMenuList[i].offsetHeight + 20 + 'px';
      })
      
      mainMenuList[i].addEventListener('mouseout',()=>{
        navbar.style.height = navbarHeight + 'px';
      })  
    }
	}
});

toogleBtn.addEventListener('click', ()=>{
  navbarMenu.classList.toggle('active');
  navbarIcons.classList.toggle('active');
})