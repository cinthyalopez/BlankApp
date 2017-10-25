

var smallerView = Alloy.createController('smallerViewController', {});
$.win.add(smallerView.getView());


$.siteTab.addEventListener('click', function (_evt) {
	console.log('_evt=' + JSON.stringify(_evt));
});

$.win.open();