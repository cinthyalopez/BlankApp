function doClick(e) {
    alert($.label.text);
}

var ApplicationView = require('Windows.UI.ViewManagement.ApplicationView');
var ApplicationViewWindowingMode = require('Windows.UI.ViewManagement.ApplicationViewWindowingMode');
ApplicationView.PreferredLaunchWindowingMode = ApplicationViewWindowingMode.FullScreen;

$.index.open();
