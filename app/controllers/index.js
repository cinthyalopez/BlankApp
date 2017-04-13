function doClick(e) {
    alert($.label.text);
}

$.index.addEventListener('touchmove', function(_evt){
	console.log('_evt.x=' + _evt.x);
	//console.log('_evt.y=' + _evt.y);
});

$.index.open();
