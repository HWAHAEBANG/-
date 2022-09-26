const navbar = document.querySelector('.navbar');
const mainMenuList = document.querySelectorAll('.navbar__menu > li');
const subMenuList = document.querySelectorAll('.submenu');
let navbarHeight = navbar.offsetHeight;

// 상단 navbar hover시 배경 늘어나는 효과.
for(let i=0; i < mainMenuList.length; i++ ){
  mainMenuList[i].addEventListener('mouseover',()=>{
    navbar.style.height = navbarHeight + subMenuList[i].offsetHeight + 20 + 'px';
  })
  
  mainMenuList[i].addEventListener('mouseout',()=>{
    navbar.style.height = navbarHeight + 'px';
  })  
}


