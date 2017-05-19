// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

var _response = {
	  "results": [
	    {
	      "gender": "male",
	      "name": {
	        "title": "mr",
	        "first": "ruben",
	        "last": "wright"
	      },
	      "location": {
	        "street ": "3433 white oak dr",
	        "city": "chandler",
	        "state": "texas",
	        "postcode": 26564
	      },
	      "email": "ruben.wright@example.com",
	      "login": {
	        "usernam e": "greenbird517",
	        "password": "marilyn",
	        "salt": "ikJ66XeD",
	        "md5": "6fe3cb73d31b4ae1df69c99e94cb62ce",
	        "sha1": "7718952f2536563bd12f 1be9a347ba109e1ac447",
	        "sha256": "a5ec32bf452e9d766730bfa472ea780e7f906993dca7591ca3d2223260387c4b"
	      },
	      "dob": "1945-06-13 01:11:21",
	      "registered": "2004-04-22 07:10:16",
	      "phone": "(230)-981-0749",
	      "cell": "(230)-881-4541",
	      "id": {
	        "name": "SSN",
	        "value": "364-43-2021"
	      },
	      "picture": {
	        "large": "https://randomuser.me/api/portraits/men/78.jpg",
	        "medium": "https://randomuser.me/api/portraits/med/men/78. jpg",
	        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/78.jpg"
	      },
	      "nat": "US"
	    }
	  ],
	  "info": {
	    "seed": "660377dd2ebf192b",
	    "results": 15,
	    "page": 1,
	    "version": "1.1"
	  }
};

console.log('_response.results.length=' + _response.results.length);

for (var i = 0; i < _response.results.length; i++) {
	console.log(JSON.stringify(_response.results[i].name));
}

var win = Ti.UI.createWindow({
	height: Ti.UI.FILL,
	width: Ti.UI.FILL,
	backgroundColor: 'white'
});

win.open();
