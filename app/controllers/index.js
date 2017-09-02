

var win = Ti.UI.createWindow({
	backround: 'magenta',
	width: 500,
	height: 500
});

var ApplicationView = require('Windows.UI.ViewManagement.ApplicationView');
var ApplicationViewWindowingMode = require('Windows.UI.ViewManagement.ApplicationViewWindowingMode');
ApplicationView.PreferredLaunchWindowingMode = ApplicationViewWindowingMode.FullScreen;

var label = Ti.UI.createLabel({
	height: Ti.UI.SIZE,
	width: Ti.UI.SIZE,
	text: 'Hellow World!'
});
win.add(label);
win.open();