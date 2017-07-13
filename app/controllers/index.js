var search = Titanium.UI.createSearchBar({
    width: 350,
    height: 143,
    hintText: 'Search for something!',
    top: 0
});

search.addEventListener('return', function (_evt) {
	console.log('return event fired!');
});

$.container.add(search);
$.container.open();
