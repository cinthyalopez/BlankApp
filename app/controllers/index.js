var search = Titanium.UI.createSearchBar({
    width: 350,
    height: 143,
    top: 0
});

search.addEventListener('change', function (_evt) {
	console.log('change event fired!');
});

$.container.add(search);
$.container.open();
