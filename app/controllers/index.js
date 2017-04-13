function doClick(e) {
    alert($.label.text);
}

$.view.addEventListener('touchmove', function(_evt){
	console.log('_evt.x=' + _evt.x);
	//console.log('_evt.y=' + _evt.y);
	$.view.top += _evt.source.top;
	$.view.left += _evt.source.left;
});

$.index.open();
