// 반응형 웹 기능
const toggleBtn = document.querySelector('.navbar_toggleBtn');
const navbar = document.querySelector('.navbar');
const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.navbar_icons');
const search_box = document.querySelector('.search_box');

toggleBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menu.classList.toggle('active');
    icons.classList.toggle('active');
    search_box.classList.toggle('active');
})

// 투두리스트 기능
let itemList = [];
let inputButton = document.querySelector(".todoInputBtn");

inputButton.addEventListener("click", addItem);

function addItem() {
    let item = document.querySelector(".inputTodoItem").value;
    if (item != null) {
        itemList.push(item);
        document.querySelector(".inputTodoItem").value = "";
        document.querySelector(".inputTodoItem").focus();
    }

    showList();
}

function showList() {
    let list = "<ul>"
    for (let i = 0; i <itemList.length; i++) {
        list += "<li>" + itemList[i] + "<span class='close' id=" + i + ">" + "<i class='fas fa-trash'></i>" + "</span></li>";
    }
    list += "</ul>";
    document.querySelector(".todoItemList").innerHTML = list;


    let deleteButtons = document.querySelectorAll(".close");
    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener("click", deleteItem);
    }
}

let checkList = document.querySelector('.todoItemList');
checkList.addEventListener('click', event => {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
  }
});

function deleteItem() {
    let id = this.getAttribute("id");
    itemList.splice(id, 1);
    showList();
}

let today = new Date();
let year = today.getFullYear();
let month = today.getMonth() + 1;
let date = today.getDate();

let todoDate = year + '년 ' + month + '월 ' + date + '일';
document.querySelector('.todoDay').innerHTML = todoDate;

// 네비게이션 바 단축키 팝업창

function showPopup(num) {
	const popup = document.querySelector('#popup'+num);
  
    popup.classList.remove('hide');
}

function closePopup(num) {
	const popup = document.querySelector('#popup'+num);
    popup.classList.add('hide');
}

// 뉴스 콘텐츠 스와이퍼
const swiper = new Swiper('.swiper-container', {
    loop: false,
    slideToClickedSlide: true,
    centeredSlides: true,
    slidePerView: 'auto',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 10,
      depth: 100,
      slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
  });

  // darkmode 토글
const $darkmodeToggle = document.querySelector('#darkmode_toggle');

$darkmodeToggle.addEventListener('change', ({target}) => {
  document.documentElement.dataset.theme = (target.checked) ? 'dark' : 'light'
  if (target.checked) {
    let darkmodeIcon = "<i class='fas fa-moon'></i>"
    document.querySelector('.darkmodeBtn').innerHTML = darkmodeIcon;
  } else {
    let darkmodeIcon = "<i class='far fa-moon'></i>"
    document.querySelector('.darkmodeBtn').innerHTML = darkmodeIcon;
  }
})

// 날씨 콘텐츠 슬라이드
$(document).ready(function () {
	$(".weatherSlide").not(".active").hide();
	
	setInterval(nextSlide, 4000);
});

//이전 슬라이드
function prevSlide() {
	$(".weatherSlide").hide();
	var allSlide = $(".weatherSlide"); 
	var currentIndex = 0; 
	
	$(".weatherSlide").each(function(index,item){ 
		if($(this).hasClass("active")) {
			currentIndex = index;
		}
        
	});
	
	var newIndex = 0;
    
	if(currentIndex <= 0) {
		newIndex = allSlide.length-1;
	} else {
		newIndex = currentIndex-1;
	}

	$(".weatherSlide").removeClass("active");
	$(".weatherSlide").eq(newIndex).addClass("active");
	$(".weatherSlide").eq(newIndex).show();

}

//다음 슬라이드
function nextSlide() {
	$(".weatherSlide").hide();
	var allSlide = $(".weatherSlide");
	var currentIndex = 0;
	
	$(".weatherSlide").each(function(index,item){
		if($(this).hasClass("active")) {
			currentIndex = index;
		}
        
	});
	
	var newIndex = 0;
	
	if(currentIndex >= allSlide.length-1) {
		newIndex = 0;
	} else {
		newIndex = currentIndex+1;
	}

	$(".weatherSlide").removeClass("active");
	$(".weatherSlide").eq(newIndex).addClass("active");
	$(".weatherSlide").eq(newIndex).show();
	
}

// 네비바 단축키 수정
function EditShortcut() {
  const scEditBtn = document.querySelector('.scEditBtn');
  const scEmailInput = document.querySelector('#sc_email');

  if (scEditBtn.innerText == "수정") {
    scEditBtn.innerHTML = "완료";
    scEmailInput.removeAttribute('readonly');
  } else {
    scEditBtn.innerHTML = "수정";
    scEmailInput.setAttribute('readonly', 'readonly');
  }
}

function printEmail() {
  const scEmailInput = document.querySelector('#sc_email');
  const EmailPopupInput = document.querySelector('.email_addrInput');

  var txt = scEmailInput.value;
  EmailPopupInput.setAttribute('value', txt);
}
