const btt = document.querySelector('#back-to-top');
const docElem = document.documentElement;
let offset;
let scrollPos;
let docHeight;


docHeight = Math.max(docElem.offsetHeight, docElem.scrollHeight);

if(docHeight != 'undefined'){
  offset = docHeight / 4;
}

window.addEventListener('scroll',()=>{
  scrollPos = docElem.scrollTop;
  console.log(scrollPos);

  btt.className = (scrollPos > offset) ? 'visible':'';

})

btt.addEventListener('click', (ev)=>{
  ev.preventDefault();
  scrollTop();
})

function scrollTop(){
  let scrollInterval = setInterval(()=>{
    if(scrollPos != 0){
      window.scrollBy(0,-25);
    } else {
      clearInterval(scrollInterval);
    }
  })
}