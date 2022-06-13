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

