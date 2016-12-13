
const LOG_TAG = '\x1b[31m' + '[index.js]' + '\x1b[39;49m ';

function init() {
	$.container.open();
}

function doClick(e) {
    alert($.label.text);
    // It won't print doClick()!
    console.log(LOG_TAG, 'doClick()');

}

function placeholder(_evt) {
	console.log('nothing');
}

function handleShowAlertButton(_evt) {
	alert('This is an alert with a very loooooooooooooooooooooooooong message /%·%!/·)"·=($&!&$');
}

function handleShowAlertDialogButton(_evt) {
	var dialog = Ti.UI.createAlertDialog({
	    message: 'The file has been deleted',
	    ok: 'Okay',
	    title: 'File Deleted'
	  });
	  dialog.show();
}


$.showLoadingIndicatorButton.addEventListener('click', placeholder);
$.showRefreshingLoadingIndicatorButton.addEventListener('click', placeholder);

$.showAlertButton.addEventListener('click', handleShowAlertButton);
$.showAlertDialogButton.addEventListener('click', handleShowAlertDialogButton);

init();