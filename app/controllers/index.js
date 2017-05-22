// $.window.open();

var win = Ti.UI.createWindow({
	backgroundColor: 'white'
});

var searchBar = Ti.UI.createSearchBar({
	backgroundColor: 'red'
});

var usersListView = Ti.UI.createListView({
	height: Ti.UI.FILL,
	width: Ti.UI.FILL,
	backgroundColor: 'purple',
	// searchView: searchBar
});

var sections = [];
var userSection = Ti.UI.createListSection();
sections.push(userSection);
usersListView.sections = sections;

var wrapper = Ti.UI.createView({
	top: 0,
	left: 0,
	height: Ti.UI.FILL,
	width: Ti.UI.FILL
});

wrapper.add(usersListView);
win.add(wrapper);

var url = 'https://randomuser.me/api/?results=150&nat=us';
var client = Ti.Network.createHTTPClient({
	// function called when the response data is available
	onload : function(e) {
		var response = JSON.parse(this.responseText);
		var userItems = _.map(response.results, function (_userObject) {
			return {
				properties: {
					height: 40,
					title: _userObject.name.first + ' ' + _userObject.name.last,
					accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_DISCLOSURE,
					color: 'black',
					font: {
						fontSize: 16
					}
				}
			};
		});

		userSection.setItems(userItems);
		// $.section.setItems(userItems);
	},
	// function called when an error occurs, including a timeout
	onerror : function(e) {
		alert('error');
	},
	timeout : 15000  // in milliseconds
});
// Prepare the connection.
client.open("GET", url);
// Send the request.
client.send();

win.open();
