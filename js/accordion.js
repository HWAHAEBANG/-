const btnCollaps = document.querySelector('#btn-collapse');
const heading = document.querySelectorAll('.panel-heading');
const question = document.querySelectorAll('.panel-question');
const answer = document.querySelectorAll('.panel-body');


for(let i = 0; i < heading.length; i++){
  heading[i].addEventListener('click',(ev)=>{
    for(let j = 0; j < question.length; j++){
      question[j].classList.remove('active');
      ev.target.parentNode.classList.add('active');

      shut();
    }
  })
}

function shut(){
  for(let i = 0; i < answer.length; i++){
    answer[i].style.display = 'none'
  }

let activePanel = document.querySelector('.panel-question.active .panel-body');
activePanel.style.display = 'block';
}

shut();

btnCollaps.addEventListener('click',()=>{
  for(let i = 0; i < answer.length; i++){
    answer[i].style.display = 'none';
  } 
})