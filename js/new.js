const navbar = document.querySelector('.navbar');
const navbarMenu = document.querySelector('.navbar__menu');
const mainMenuList = document.querySelectorAll('.navbar__menu > li');
const subMenuList = document.querySelectorAll('.submenu');
const navbarIcons = document.querySelector('.navbar__icons');
const toogleBtn = document.querySelector('.navbar__toogleBtn')
let navbarHeight = navbar.offsetHeight;


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





///////////////////////////////////////////////////////////////////////////////

// var mql = window.matchMedia("screen and (max-width: 768px)");

// mql.addListener(function(e) {
// 	if(e.matches) {
// 		console.log('모바일 화면 입니다.');

//     for(let i=0; i < mainMenuList.length; i++ ){
//       mainMenuList[i].removeEventListener('mouseover',()=>{
//         navbar.style.height = '80px';
//       })

//       mainMenuList[i].removeEventListener('mouseout',()=>{
//         navbar.style.height = '80px';
//       })  
//     }




// 	} else {
// 		console.log('데스크탑 화면 입니다.');
//     navbarHeight = 80;

//     for(let i=0; i < mainMenuList.length; i++ ){
//       mainMenuList[i].addEventListener('mouseover',()=>{
//         navbar.style.height = navbarHeight + subMenuList[i].offsetHeight + 20 + 'px';
//       })

//       mainMenuList[i].addEventListener('mouseout',()=>{
//         navbar.style.height = navbarHeight + 'px';
//       })  

//     }

// 	}
// });

// toogleBtn.addEventListener('click', function(){
//   navbarMenu.classList.toggle('active');
//   navbarIcons.classList.toggle('active');
//   navbar.classList.toggle('active');
// })

// toogleBtn.removeEventListener('click', arguments.callee);



// //이하 테스트
function move() {
  navbarMenu.classList.toggle('active');
  navbarIcons.classList.toggle('active');
  navbar.classList.toggle('active');
}

function mover() {
  navbar.style.height = '250px';
  
}

function mout() {
  navbar.style.height = '80px';
}


for(let i = 0;  i < mainMenuList.length; i++){
  mainMenuList[i].addEventListener('mouseover', mover)
}

for(let i = 0;  i < mainMenuList.length; i++){
  mainMenuList[i].addEventListener('mouseout', mout)
}



var mql = window.matchMedia("screen and (max-width: 768px)");

mql.addListener(function (e) {
      if (e.matches) {
        console.log('모바일 화면 입니다.');

        for (let i = 0; i < mainMenuList.length; i++) {
        mainMenuList[i].removeEventListener('mouseover', mover)

        mainMenuList[i].removeEventListener('mouseout', mout)
        }


      } else {
        console.log('데스크탑 화면 입니다.');

        for(let i = 0;  i < mainMenuList.length; i++){
          mainMenuList[i].addEventListener('mouseover', mover)
        }
        
        for(let i = 0;  i < mainMenuList.length; i++){
          mainMenuList[i].addEventListener('mouseout', mout)
        }


      }
    }
)




    toogleBtn.addEventListener('click', move); 
    // toogleBtn.removeEventListener('click', move);


