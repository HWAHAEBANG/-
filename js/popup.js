const layerPopup = document.querySelector('.layerPopup');
const checkBox = document.querySelector('#chkbox');
const popupClose = document.querySelector('#close > a');

//쿠키 생성
function setCookie(name, value, day) {
  let date = new Date();
  date.setDate(date.getDate() + day);

  let mycookie = '';
  mycookie += name + '=' + value + ';';
  mycookie += 'Expires=' + date.toUTCString();

  console.log(mycookie);

  document.cookie = mycookie;
}


// 쿠키 삭제
function delCookie(name) {
  let date = new Date();
  date.setDate(date.getDate() - 1);

  let mycookie = '';
  mycookie += name + '=visit;';
  mycookie += 'Exprie=' + date.toUTCString;

  document.cookie = mycookie;
}

// 쿠키 확인
function checkCookie(name) {
  let cookies = document.cookie.split(';');
  let visited = false;

  for (i in cookies) {
    if (cookies[i].indexOf(name) > -1) {
      visited = true;
      // alert('다시 방문해주셔서 감사합니다.');
    }
  }

  
  
  
  if (visited) {
    layerPopup.style.display = 'none';
  } else {
    layerPopup.style.display = 'block';
  }
}

checkCookie('SRP.com');

// 체크박스 및 버튼 기능 부여
popupClose.addEventListener('click', ()=>{
  if(checkBox.checked){
    setCookie('SRP.com', 'visit', 1);
    layerPopup.style.display = 'none';
  } else {
    // delCookie ('SRP.com');
    layerPopup.style.display = 'none';
  }
})


