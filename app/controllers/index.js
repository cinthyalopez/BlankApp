var search = Titanium.UI.createSearchBar({
    barColor:'#000', 
    showCancel: true,
    width: 350,
    height: 143,
    top: 0
});

search.addEventListener('cancel', function (_evt) {
	console.log('cancel event fired!');
});

$.container.add(search);
$.container.open();
