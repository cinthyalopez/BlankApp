$.label.text = Ti.Network.online;

$.index.open();

Ti.Network.addEventListener('change', function (_evt) {
	alert('Network online?' + _evt.online);
	$.label.text = _evt.online;
	console.log('_evt=' + JSON.stringify(_evt));
});