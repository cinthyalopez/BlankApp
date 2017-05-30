
$.index.open();

var url = 'https://randomuser.me/api/?results=500&nat=us';
var client = Ti.Network.createHTTPClient({
    // function called when the response data is available
    onload : function(e) {
    	var _response = JSON.parse(this.responseText);
        // console.log(JSON.stringify(_response));
        console.log("Server responded!");
		var userItems = [];

		for (var i = 0; i < _response.results.length; i++) {
			var userObject = _response.results[i];
			userItems.push({
				template: 'userListTemplate',
				username: {
					text: userObject.name.title + ' ' + userObject.name.first + ' ' + userObject.name.last
				},
				userPicture: {
					image: userObject.picture.large
				},
				gender: {
					text: userObject.gender
				},
				street: {
					text: userObject.location.street
				},
				city: {
					text: userObject.location.city
				},
				state: {
					text: userObject.location.state
				},
				zipCode: {
					text: userObject.location.postcode
				},
				email: {
					text: userObject.email
				}
			});
		}

		$.section.setItems(userItems);
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

