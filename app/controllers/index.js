var search = Titanium.UI.createSearchBar({
    barColor:'#000', 
    showCancel: true,
    width: 350,
    height: 143,
    top: 0
});


search.addEventListener('blur', function (_evt) {
	console.log('blur event fired!');
});
search.addEventListener('bookmark', function (_evt) {
	console.log('bookmark event fired!');
});
search.addEventListener('cancel', function (_evt) {
	console.log('cancel event fired!');
});
search.addEventListener('change', function (_evt) {
	console.log('change event fired!');
});
search.addEventListener('focus', function (_evt) {
	console.log('focus event fired!');
});
search.addEventListener('return', function (_evt) {
	console.log('return event fired!');
});

$.container.add(search);
$.container.open();
