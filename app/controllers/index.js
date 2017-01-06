
function init() {
	$.index.open();

	var url = 'https://randomuser.me/api/?results=2500&nat=us';
	var client = Ti.Network.createHTTPClient({
	    // function called when the response data is available
	    onload : function(e) {
	    	var _response = JSON.parse(this.responseText);
	        console.log(JSON.stringify(_response));

			var userItems = [];

			for (var i = 0; i < _response.results.length; i++) {
				userItems.push({
					properties: {
						height: 40,
						title: _response.results[i].name.first + ' ' + _response.results[i].name.last,
						accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_DISCLOSURE,
						color: '#000',
						font: {
							fontSize: 16
						}
					}
				});
			}

			console.log('mapped users');

			var searchBar = Ti.UI.createSearchBar({
			    width: Ti.UI.FILL,
			    height: '6%',
			    backgroundColor: 'red'
			});
			var listView = Ti.UI.createListView({
			    searchView: searchBar,
			    width: Ti.UI.FILL, 
			    height: '94%'
			});
			var sections = [];

			var userSection = Ti.UI.createListSection();
			userSection.setItems(userItems);
			sections.push(userSection);
			console.log('created list view, list section and search bar')

			listView.sections = sections;
			$.dummyView2.add(searchBar);
			$.dummyView2.add(listView);
			console.log('added search bar and list view');

			//console.log('userItems == ' + JSON.stringify(userItems));
	    },
	    // function called when an error occurs, including a timeout
	    onerror : function(e) {
	        Ti.API.debug(e.error);
	        alert('error');
	    },
	    timeout : 5000  // in milliseconds
	});
	// Prepare the connection.
	client.open('GET', url);
	// Send the request.
	client.send();
}

init();
