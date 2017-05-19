// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

$.container.open();

var url = 'https://randomuser.me/api/?results=3&nat=us';
var client = Ti.Network.createHTTPClient({
	// function called when the response data is available
	onload : onUsersLoaded,
	// function called when an error occurs, including a timeout
	onerror : function(e) {
		console.error(e.error);
		alert('error');
	},
	timeout : 5000  // in milliseconds
});

// Prepare the connection.
client.open("GET", url);

// Send the request.
client.send();

function onUsersLoaded(_response) {
	_response = JSON.parse(this.responseText);

	doLog && console.log('_response: ' + JSON.stringify(_response, null, '\t'));
	var items = [];
	for (var i = 0; i < _response.results.length; i++) {
		var singleItem = {
			properties: {
				height: 40,
				title: _response.results[i].name.first + ' ' + _response.results[i].name.last,
				accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_DISCLOSURE
			}
		};
		items.push(singleItem);
	}

	$.section.setItems(items);
}
	

