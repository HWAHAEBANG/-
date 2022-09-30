let targetLink = document.querySelectorAll('.tab-menu a');
let tabContent = document.querySelectorAll('#tab-content > div');

for(let i = 0; i < targetLink.length; i++){
  targetLink[i].addEventListener('click',(ev)=>{
    ev.preventDefault();
    let orgTarget = ev.target.getAttribute('href');

    let tabTarget = orgTarget.replace('#','');

    for(let j = 0 ; j < tabContent.length; j++){
      tabContent[j].style.display = 'none';
      document.getElementById(tabTarget).style.display = 'block';
    }
    
    for(let x = 0 ; x < targetLink.length; x++){
      targetLink[x].classList.remove('active');
      ev.target.classList.add('active');

    }

  })
}


tabContent[0].style.display = 'block';