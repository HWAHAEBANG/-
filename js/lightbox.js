document.addEventListener('click', lightbox);

function lightbox(ev){
  let elem = ev.target;
  // console.log(elem);
  let elemId = elem.getAttribute('id');
  // console.log(elemId);
  let lightbox = document.getElementById('lightbox-overlay');
  let lightboxImg = document.getElementById('lightbox-image');
  let newImg = new Image();

if(elem.hasAttribute('data-lightbox')){
  ev.preventDefault();

  newImg.onload = function(){
    lightboxImg.src = this.src;
    // console.log(this.src);
  }

  newImg.src = elem.getAttribute('data-lightbox');
  lightbox.classList.add('visible');
}
if(elemId == 'lightbox-overlay' || elemId == 'lightbox-image'){
  lightbox.classList.remove('visible');
}


}
