// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

$.siteTab.addEventListener('click', function (_evt) {
	console.log('_evt=' + JSON.stringify(_evt));
});

// $.moreButton.addEventListener('click', function (_evt) {
// 	console.log('_evt=' + JSON.stringify(_evt));
// });