console.log('main.js has successfully connected');

// findVideos
window.addEventListener('load', () => {
	findVideos();
 });


// getScript
 document.addEventListener('DOMContentLoaded', () => {
    setTimeout(function(){
    	getScript('https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A0ae32da16f8ace79568cf908e2da5cf40d9dbc0d251da857e09a8b7f8f22202e&amp;width=100%&amp;height=400px&amp;lang=ru_RU&amp;scroll=false', document.getElementById('yandex-map'));
		getScript('https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A0ae32da16f8ace79568cf908e2da5cf40d9dbc0d251da857e09a8b7f8f22202e&amp;width=100%&amp;height=300&amp;lang=ru_RU&amp;scroll=false', document.getElementById('yandex-map--small'));
    }, 1000);
});



/* ===== HAMBURGER MENU ===== */

const hamb = document.querySelector("#hamb");
const exit = document.querySelector("#icon-exit");
const wrap = document.querySelector("#mobile-menu__wrap");
const mobileMenu = document.querySelector("#mobile-menu");
const body = document.body;
 
// При клике на иконку hamb вызываем function hambHandler
hamb.addEventListener("click", hambHandler);
exit.addEventListener("click", closeOnClick);
 
// Выполняем действия при клике
function hambHandler(evt) {
  evt.preventDefault();
  // Переключаем классы элементов при клике
  wrap.classList.toggle("active");
  mobileMenu.classList.toggle("active");
  body.classList.toggle("noscroll");
}
 
// Код для закрытия меню при нажатии на любую ссылку внутри меню
const links = Array.from(mobileMenu.children);
 
// Для каждого элемента меню при клике вызываем ф-ию
links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});
 
// Закрытие попапа при клике на меню
function closeOnClick() {
	mobileMenu.classList.remove("active");
	wrap.classList.remove("active");
	body.classList.remove("noscroll");
}