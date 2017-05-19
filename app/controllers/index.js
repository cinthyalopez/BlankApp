// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

// var items = [
// 	{ 
// 		properties: {
// 			height: 40,
// 			title: 'First',
// 			accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_DISCLOSURE	
// 		}
// 	}, 
// 	{
// 		properties: {
// 			height: 40,
// 			title: 'Second',
// 			accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_DISCLOSURE
// 		}
// 	},
// 	{
// 		properties: {
// 			height: 40,
// 			title: 'Third',
// 			accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_DISCLOSURE
// 		}
// 	}
// ];

$.container.open();

var url = 'https://randomuser.me/api/?results=3&nat=us';
 var client = Ti.Network.createHTTPClient({
     // function called when the response data is available
     onload : onUsersLoaded,
     // function called when an error occurs, including a timeout
     onerror : function(e) {
         Ti.API.debug(e.error);
         alert('error');
     },
     timeout : 5000  // in milliseconds
 });
 // Prepare the connection.
 client.open("GET", url);
 // Send the request.
 client.send();

// var _response = {
//   "results": [
//     {
//       "gender": "male",
//       "name": {
//         "title": "mr",
//         "first": "ruben",
//         "last": "wright"
//       },
//       "location": {
//         "street ": "3433 white oak dr",
//         "city": "chandler",
//         "state": "texas",
//         "postcode": 26564
//       },
//       "email": "ruben.wright@example.com",
//       "login": {
//         "usernam e": "greenbird517",
//         "password": "marilyn",
//         "salt": "ikJ66XeD",
//         "md5": "6fe3cb73d31b4ae1df69c99e94cb62ce",
//         "sha1": "7718952f2536563bd12f 1be9a347ba109e1ac447",
//         "sha256": "a5ec32bf452e9d766730bfa472ea780e7f906993dca7591ca3d2223260387c4b"
//       },
//       "dob": "1945-06-13 01:11:21",
//       "registered": "2004-04-22 07:10:16",
//       "phone": "(230)-981-0749",
//       "cell": "(230)-881-4541",
//       "id": {
//         "name": "SSN",
//         "value": "364-43-2021"
//       },
//       "picture": {
//         "large": "https://randomuser.me/api/portraits/men/78.jpg",
//         "medium": "https://randomuser.me/api/portraits/med/men/78. jpg",
//         "thumbnail": "https://randomuser.me/api/portraits/thumb/men/78.jpg"
//       },
//       "nat": "US"
//     },
//     {
//       "gender": "female",
//       "name": {
//         "title": "mrs",
//         "first": "kaylee",
//         "last": "palmer"
//       },
//       "location": {
//         "street": "8065 hunters creek dr",
//         "city": "plano",
//         "state": "rhode island",
//         "postcode ": 61733
//       },
//       "email": "kaylee.palmer@example.com",
//       "login": {
//         "username": "lazyfrog297",
//         "password": "sinister",
//         "salt": "wVijSEJH",
//         "md5": " adfab7b324873a6473974cd83be24640",
//         "sha1": "334ef1b4ba337260bf9c1049486562c3282f612d",
//         "sha256": "5b58253f372c0a673378d3ad22e8126a 91f2c03ebafe081bee0de53bffd450ad"
//       },
//       "dob": "1981-03-10 11:07:00",
//       "registered": "2010-06-22 14:56:15",
//       "phone": "(550)-225-5190",
//       "ce ll": "(989)-299-5924",
//       "id": {
//         "name": "SSN",
//         "value": "146-19-0884"
//       },
//       "picture": {
//         "large": "https://randomuser.me/api/portraits/women/6 5.jpg",
//         "medium": "https://randomuser.me/api/portraits/med/women/65.jpg",
//         "thumbnail": "https://randomuser.me/api/portraits/thumb/ women/65.jpg"
//       },
//       "nat": "US"
//     },
//     {
//       "gender": "female",
//       "name": {
//         "title": "miss",
//         "first": "bella",
//         "last": "woods"
//       },
//       "location": {
//         "street": "665 7 e north st",
//         "city": "bellevue",
//         "state": "arkansas",
//         "postcode": 35609
//       },
//       "email": "bella.woods@example.com",
//       "login": {
//         "username": "go ldenleopard239",
//         "password": "playboy1",
//         "salt": "7NpRA8XX",
//         "md5": "aa565a2bf02d9e0862000ff09042a56e",
//         "sha1": "59be0331df17d40709815 3c08f87363df9b5c1a1",
//         "sha256": "9565414492d3de84a15a0277837365d7079dc9ea293fb86bcb60ff7d1fb05d04"
//       },
//       "dob": "1992-05-25 18:26:52",
//       "registered": "2015-11-19 03:08:11",
//       "phone": "(287)-851-8479",
//       "cell": "(661)-966-1985",
//       "id": {
//         "name": "SSN",
//         "value": "701-10-0115"
//       },
//       "picture": {
//         "large": "https://randomuser.me/api/portraits/women/27.jpg",
//         "medium": "https://randomuser.me/api/portraits/med/women/ 27.jpg",
//         "thumbnail": "https://randomuser.me/api/portraits/thumb/women/27.jpg"
//       },
//       "nat": "US"
//     },
//     {
//       "gender": "male",
//       "name": {
//         "title": "mr ",
//         "first": "alfredo",
//         "last": "diaz"
//       },
//       "location": {
//         "street": "3041 lovers ln",
//         "city": "flint",
//         "state": "arizona",
//         "postcode": 21643
//       },
//       "e mail": "alfredo.diaz@example.com",
//       "login": {
//         "username": "smallcat406",
//         "password": "harper",
//         "salt": "CtEoutQF",
//         "md5": "f7a7a6f86926af 23b2073ff460a1a532",
//         "sha1": "222bc4842e5678d5550d18800ad87b07c18c4689",
//         "sha256": "4794fbeb24c49d8ed7c213036e9f03de535dd4498fa5a1 4a96762d1f34155d88"
//       },
//       "dob": "1953-11-30 02:42:46",
//       "registered": "2016-06-10 15:21:56",
//       "phone": "(215)-055-3851",
//       "cell": "(651)-195 -6250",
//       "id": {
//         "name": "SSN",
//         "value": "796-63-8734"
//       },
//       "picture": {
//         "large": "https://randomuser.me/api/portraits/men/27.jpg",
//         "medium": "https://randomuser.me/api/portraits/med/men/27.jpg",
//         "thumbnail": "https://randomuser.me/api/portraits/thumb/men/27.jpg"
//       },
//       "nat": "US"
//     },
//     {
//       "gender": "male",
//       "name": {
//         "title": "mr",
//         "first": "tony",
//         "last": "rodriquez"
//       },
//       "location": {
//         "street": "8315 mockingbird hill",
//         " city": "costa mesa",
//         "state": "alabama",
//         "postcode": 62744
//       },
//       "email": "tony.rodriquez@example.com",
//       "login": {
//         "username": "crazymouse579 ",
//         "password": "martha",
//         "salt": "98ec9Lkj",
//         "md5": "4b5677ebf426eb7b250d774676eac615",
//         "sha1": "c1a837a839ebde8c19a07dfbbba6f5e8ebb6b dd4",
//         "sha256": "674c5785b3d1f12ee55d613d206cb227a2b66fb0821ef992825fa30ca7d669b2"
//       },
//       "dob": "1953-11-22 19:52:53",
//       "registered": "20 15-09-20 16:18:43",
//       "phone": "(791)-865-8690",
//       "cell": "(030)-059-3027",
//       "id": {
//         "name": "SSN",
//         "value": "089-08-6846"
//       },
//       "picture": {
//         "larg e": "https://randomuser.me/api/portraits/men/63.jpg",
//         "medium": "https://randomuser.me/api/portraits/med/men/63.jpg",
//         "thumbnail": "https://randomuser.me/api/portraits/thumb/men/63.jpg"
//       },
//       "nat": "US"
//     },
//     {
//       "gender": "male",
//       "name": {
//         "title": "mr",
//         "first": "nelson",
//         "la st": "meyer"
//       },
//       "location": {
//         "street": "8698 ash dr",
//         "city": "broken arrow",
//         "state": "utah",
//         "postcode": 53463
//       },
//       "email": "nelson.meyer@e xample.com",
//       "login": {
//         "username": "purplelion390",
//         "password": "reptile",
//         "salt": "pPL1FZoK",
//         "md5": "f81cb5c5045c6bddfdf2a269dae6bd5f ",
//         "sha1": "083d04b9147dc0b7925da6d180be1f34f7aa454f",
//         "sha256": "6d0b918c259273feca2599d460686d64253709568699234737197a301ffda3d7 "
//       },
//       "dob": "1979-02-01 22:40:49",
//       "registered": "2015-01-19 13:49:50",
//       "phone": "(742)-222-2471",
//       "cell": "(443)-278-9154",
//       "id": {
//         "name ": "SSN",
//         "value": "717-92-7079"
//       },
//       "picture": {
//         "large": "https://randomuser.me/api/portraits/men/86.jpg",
//         "medium": "https://randomuse r.me/api/portraits/med/men/86.jpg",
//         "thumbnail": "https://randomuser.me/api/portraits/thumb/men/86.jpg"
//       },
//       "nat": "US"
//     },
//     {
//       "gender": " male",
//       "name": {
//         "title": "mr",
//         "first": "jeff",
//         "last": "hale"
//       },
//       "location": {
//         "street": "3279 green rd",
//         "city": "the colony",
//         "state": "geo rgia",
//         "postcode": 85199
//       },
//       "email": "jeff.hale@example.com",
//       "login": {
//         "username": "blackmeercat276",
//         "password": "kenny1",
//         "salt": "ayFJ yFZF",
//         "md5": "b3ea902ef9271565efcf4d024f28f746",
//         "sha1": "d8b113e26ee8df62affa21c352e509591f486c0b",
//         "sha256": "518a8468344a154f6e0 088dedeb9d1add8a5df402644c4265e42e87725c4b93b"
//       },
//       "dob": "1976-04-06 15:56:25",
//       "registered": "2007-10-03 11:23:20",
//       "phone": "(929)- 439-0459",
//       "cell": "(028)-968-9299",
//       "id": {
//         "name": "SSN",
//         "value": "997-51-9838"
//       },
//       "picture": {
//         "large": "https://randomuser.me/api/port raits/men/62.jpg",
//         "medium": "https://randomuser.me/api/portraits/med/men/62.jpg",
//         "thumbnail": "https://randomuser.me/api/portrai ts/thumb/men/62.jpg"
//       },
//       "nat": "US"
//     },
//     {
//       "gender": "male",
//       "name": {
//         "title": "mr",
//         "first": "leslie",
//         "last": "may"
//       },
//       "location": {
//         "street": "2 721 stevens creek blvd",
//         "city": "roseburg",
//         "state": "new hampshire",
//         "postcode": 82008
//       },
//       "email": "leslie.may@example.com",
//       "login": {
//         "username": "beautifultiger578",
//         "password": "toon",
//         "salt": "Khsk6KjK",
//         "md5": "9537ca2648ad982bb1cd807703dd2559",
//         "sha1": "26217e811d 7f79d5a389a7d88df82df5f9c2c17a",
//         "sha256": "4e253e83a96f760c7eb8ddc5ad0ae5379714f0869f91aae51521fe87822e2482"
//       },
//       "dob": "1954-03-18  07:17:32",
//       "registered": "2004-10-02 20:30:55",
//       "phone": "(262)-337-6137",
//       "cell": "(915)-624-2630",
//       "id": {
//         "name": "SSN",
//         "value": "257 -82-0451"
//       },
//       "picture": {
//         "large": "https://randomuser.me/api/portraits/men/6.jpg",
//         "medium": "https://randomuser.me/api/portraits/me d/men/6.jpg",
//         "thumbnail": "https://randomuser.me/api/portraits/thumb/men/6.jpg"
//       },
//       "nat": "US"
//     },
//     {
//       "gender": "male",
//       "name": {
//         "title": " mr",
//         "first": "glen",
//         "last": "mcdonalid"
//       },
//       "location": {
//         "street": "6314 e center st",
//         "city": "west valley city",
//         "state": "nebraska",
//         "p ostcode": 44077
//       },
//       "email": "glen.mcdonalid@example.com",
//       "login": {
//         "username": "crazywolf196",
//         "password": "audrey",
//         "salt": "Dx7ht7rZ",
//         "md5": "58bf4b149654eb80aac795f51f5a0d27",
//         "sha1": "7f3c1ea631390b70adbd012c8d18746e7182e22d",
//         "sha256": "08218e5c949ea9ccf47c599b0 bd6eaa3399b1611f92cefc1be290c00d0f87957"
//       },
//       "dob": "1957-09-10 07:47:03",
//       "registered": "2007-05-29 05:40:43",
//       "phone": "(480)-172-53 82",
//       "cell": "(783)-535-6600",
//       "id": {
//         "name": "SSN",
//         "value": "467-73-1519"
//       },
//       "picture": {
//         "large": "https://randomuser.me/api/portraits/ men/9.jpg",
//         "medium": "https://randomuser.me/api/portraits/med/men/9.jpg",
//         "thumbnail": "https://randomuser.me/api/portraits/thumb /men/9.jpg"
//       },
//       "nat": "US"
//     },
//     {
//       "gender": "female",
//       "name": {
//         "title": "ms",
//         "first": "tracey",
//         "last": "stanley"
//       },
//       "location": {
//         "street": "2008  westheimer rd",
//         "city": "norwalk",
//         "state": "kentucky",
//         "postcode": 50192
//       },
//       "email": "tracey.stanley@example.com",
//       "login": {
//         "username": "beautifulpanda738",
//         "password": "luis",
//         "salt": "G1tZCQTe",
//         "md5": "94f10195ab0acca4e312f5d205ff4bf0",
//         "sha1": "2dee11e99678333b56cd c9ca7f7bca6b6a131d51",
//         "sha256": "2ebeec2aa5607badc58351d6b9e18e4e92ec7d413d6a4525c503d1d66fd37b1b"
//       },
//       "dob": "1947-05-11 03:34:11",
//       "registered": "2011-01-17 15:28:04",
//       "phone": "(949)-886-8306",
//       "cell": "(617)-202-4420",
//       "id": {
//         "name": "SSN",
//         "value": "367-79-2652"
//       },
//       "picture": {
//         "large": "https://randomuser.me/api/portraits/women/22.jpg",
//         "medium": "https://randomuser.me/api/portraits/med/women /22.jpg",
//         "thumbnail": "https://randomuser.me/api/portraits/thumb/women/22.jpg"
//       },
//       "nat": "US"
//     },
//     {
//       "gender": "female",
//       "name": {
//         "title": "ms",
//         "first": "willie",
//         "last": "weaver"
//       },
//       "location": {
//         "street": "2038 mockingbird hill",
//         "city": "grand rapids",
//         "state": "south dakot a",
//         "postcode": 47282
//       },
//       "email": "willie.weaver@example.com",
//       "login": {
//         "username": "ticklishostrich557",
//         "password": "secrets",
//         "salt": "BnSyoC2K",
//         "md5": "a1df933ca94eda3534a55708028a3da9",
//         "sha1": "a63dd7c45631f880abaac573f070f8af4852ce0e",
//         "sha256": "b0396e3e97f918 17f150e12afd182a888f5ff27a56bc349f8e42e4e577a5739f"
//       },
//       "dob": "1982-12-04 04:15:44",
//       "registered": "2015-02-12 09:03:01",
//       "phone": "( 431)-777-9622",
//       "cell": "(349)-512-4623",
//       "id": {
//         "name": "SSN",
//         "value": "898-23-4328"
//       },
//       "picture": {
//         "large": "https://randomuser.me/api /portraits/women/30.jpg",
//         "medium": "https://randomuser.me/api/portraits/med/women/30.jpg",
//         "thumbnail": "https://randomuser.me/ap i/portraits/thumb/women/30.jpg"
//       },
//       "nat": "US"
//     },
//     {
//       "gender": "female",
//       "name": {
//         "title": "ms",
//         "first": "pamela",
//         "last": "arnold"
//       },
//       "locati on": {
//         "street": "2530 w sherman dr",
//         "city": "escondido",
//         "state": "new york",
//         "postcode": 40624
//       },
//       "email": "pamela.arnold@example.com",
//       "login": {
//         "username": "organicmeercat921",
//         "password": "beastie",
//         "salt": "tVpCgjYM",
//         "md5": "2d51af67a6e4b3a0b559e239d43a7f84",
//         "sha1": "6114248867735ef1e7dde248c60b53efe741142f",
//         "sha256": "dbacc9a77f67be175a8523b71c919b48160435401bb12f89e92616f35770fe08"
//       },
//       "dob": "1959-05-08 10:29:26",
//       "registered": "2015-07-03 02:12:51",
//       "phone": "(194)-362-9436",
//       "cell": "(979)-414-2309",
//       "id": {
//         "name": "SSN",
//         "value": "486-96-0900"
//       },
//       "picture": {
//         "large": "https://randomuser.me/api/portraits/women/3.jpg",
//         "medium": "https://randomuser.me/ap i/portraits/med/women/3.jpg",
//         "thumbnail": "https://randomuser.me/api/portraits/thumb/women/3.jpg"
//       },
//       "nat": "US"
//     },
//     {
//       "gender": "male",
//       "name": {
//         "title": "mr",
//         "first": "harry",
//         "last": "perry"
//       },
//       "location": {
//         "street": "9801 mcclellan rd",
//         "city": "fort worth",
//         "state": "we st virginia",
//         "postcode": 71267
//       },
//       "email": "harry.perry@example.com",
//       "login": {
//         "username": "crazykoala122",
//         "password": "buzzard",
//         "sal t": "4VtsfOyS",
//         "md5": "7a35086aa970ccffa2f0f0c93b9f6952",
//         "sha1": "6c927fe349da60821f8bba4dac381efbb8794d54",
//         "sha256": "a5e37ba0a23 4401b14ee6e2c6dc3c798bebc1182397c7583dab6a55d8300e677"
//       },
//       "dob": "1989-03-11 07:29:00",
//       "registered": "2013-09-17 22:23:11",
//       "phone": "(420)-130-5389",
//       "cell": "(734)-673-4164",
//       "id": {
//         "name": "SSN",
//         "value": "813-49-7906"
//       },
//       "picture": {
//         "large": "https://randomuser.me/ api/portraits/men/7.jpg",
//         "medium": "https://randomuser.me/api/portraits/med/men/7.jpg",
//         "thumbnail": "https://randomuser.me/api/p ortraits/thumb/men/7.jpg"
//       },
//       "nat": "US"
//     },
//     {
//       "gender": "female",
//       "name": {
//         "title": "ms",
//         "first": "ana",
//         "last": "gutierrez"
//       },
//       "location": {
//         " street": "5323 ranchview dr",
//         "city": "gainesville",
//         "state": "alaska",
//         "postcode": 26709
//       },
//       "email": "ana.gutierrez@example.com",
//       "login ": {
//         "username": "redfrog531",
//         "password": "premium",
//         "salt": "0ihby1bG",
//         "md5": "f0647d5a0566052fd5cb86e73bc092e5",
//         "sha1": "58e39004d2a 9177356a1decfd5a2084433144c1f",
//         "sha256": "9273238e34f1cc5802a37f189d5ad1cf49f8227eeb98e2334d97974977a1e554"
//       },
//       "dob": "1968-12-17 10:22:58",
//       "registered": "2006-02-10 06:20:20",
//       "phone": "(149)-387-2057",
//       "cell": "(227)-263-7253",
//       "id": {
//         "name": "SSN",
//         "value": "124- 25-1212"
//       },
//       "picture": {
//         "large": "https://randomuser.me/api/portraits/women/14.jpg",
//         "medium": "https://randomuser.me/api/portraits/ med/women/14.jpg",
//         "thumbnail": "https://randomuser.me/api/portraits/thumb/women/14.jpg"
//       },
//       "nat": "US"
//     },
//     {
//       "gender": "male",
//       "name": {
//         " title": "mr",
//         "first": "caleb",
//         "last": "robertson"
//       },
//       "location": {
//         "street": "6398 oak ridge ln",
//         "city": "ventura",
//         "state": "utah",
//         "post code": 47687
//       },
//       "email": "caleb.robertson@example.com",
//       "login": {
//         "username": "browngorilla471",
//         "password": "jazzy",
//         "salt": "2HHCFoJK",
//         "md5": "23fe42146261c97674ca65fd52585e5b",
//         "sha1": "fdeb25b605f4d6bc622f542d03b612548f119327",
//         "sha256": "30048d4f22451dffd2ee538f3 9a1392f9c2161fe223252d951545141160911b9"
//       },
//       "dob": "1955-01-31 18:29:56",
//       "registered": "2011-05-02 18:26:51",
//       "phone": "(707)-408-77 19",
//       "cell": "(136)-518-7023",
//       "id": {
//         "name": "SSN",
//         "value": "841-14-4392"
//       },
//       "picture": {
//         "large": "https://randomuser.me/api/portraits/ men/82.jpg",
//         "medium": "https://randomuser.me/api/portraits/med/men/82.jpg",
//         "thumbnail": "https://randomuser.me/api/portraits/thu mb/men/82.jpg"
//       },
//       "nat": "US"
//     }
//   ],
//   "info": {
//     "seed": "660377dd2ebf192b",
//     "results": 15,
//     "page": 1,
//     "version": "1.1"
//   }
// };

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
	

