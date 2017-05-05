$.label.text = Ti.Network.online;

$.index.open();

Ti.Network.addEventListener('change', function (_evt) {
	alert('Network online?' + _evt.online);
	$.label.text = _evt.online;
	console.log('network change event=' + _evt.online);
});