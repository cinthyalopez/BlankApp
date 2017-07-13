var search = Titanium.UI.createSearchBar({
    width: 350,
    height: 143,
    top: 0
});

search.addEventListener('return', function (_evt) {
	console.log('return event fired!');
});

$.container.add(search);
$.container.open();
