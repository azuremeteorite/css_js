const tog = document.querySelector('.n_tog');
const menu = document.querySelector('.n_menu');
const icons = document.querySelector('.n_icons');

tog.addEventListener('click', ()=> {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
}); 
// 토글버튼이 클릭될 때마다 이벤트를 처리해달라 - 
//사용자가 입력한 함수를 호출할 것을 정의하는 것
//액티브 리스트를 토글링 마우스를 클릭했을 때 메뉴와 아이콘의 
//클래스가 비활성화 >> 액티브 추가 or 활성화 >> 액티브 뺌