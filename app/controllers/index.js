
$.outerWrapper.addEventListener('click', function (_evt) {
	console.log('log from outerWrapper');
});

$.innerWrapper1.addEventListener('click', function (_evt) {
	console.log('log from innerWrapper');
});

$.win.open();