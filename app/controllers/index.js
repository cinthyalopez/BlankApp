

$.label.addEventListener('click', function (_evt) {
	var url = 'https://randomuser.me/api/?results=1500&nat=us';
	var client = Ti.Network.createHTTPClient({
		// function called when the response data is available
		onload : function(e) {
			console.log('e=' + JSON.stringify(e));

			var response = JSON.parse(this.responseText);

			console.log('response=' + response);

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
			listView.sections = sections;
			$.window.add(searchBar);
			$.window.add(listView);
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
});

$.window.open();
