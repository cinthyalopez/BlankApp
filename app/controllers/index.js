function doClick(e) {
    alert($.label.text);
}

function init() {
	$.index.open();
	if (OS_ANDROID) {
		var intent = Ti.Android.createIntent({
		    action : Ti.Android.ACTION_VIEW,
		    data : 'http://net.educause.edu/ir/library/pdf/erm0342.pdf'
		});
		intent.addCategory(Ti.Android.CATEGORY_DEFAULT);
		Ti.Android.currentActivity.startActivity(intent);
	}
	
}

init();
