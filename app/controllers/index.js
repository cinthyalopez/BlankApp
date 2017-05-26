var win = Ti.UI.createWindow({backgroundColor: 'white'});
var listView = Ti.UI.createListView({
	width: Ti.UI.FILL,
	height: Ti.UI.FILL
});
var sections = [];

var fruitSection = Ti.UI.createListSection({ headerTitle: 'Fruits'});
var fruitDataSet = [];

for (var i = 0; i < 200; i++) {
    fruitDataSet.push({properties: { title: 'Banana' + i, color: 'black' }});
}

fruitSection.setItems(fruitDataSet);
sections.push(fruitSection);

listView.setMarker({
	sectionIndex: 0,
	itemIndex: 20
});

listView.sections = sections;

listView.addEventListener('marker', function (_evt) {
	console.log('Marker is visible!!!!');
});

listView.addEventListener('scrolling', function (_evt) {
    doLog && console.log('scrolling - _evt: ' + JSON.stringify(_evt, null, '\t'));
});

listView.addEventListener('scrollstart', function (_evt) {
    doLog && console.log('scrollstart -  _evt: ' + JSON.stringify(_evt, null, '\t'));
});

listView.addEventListener('scrollend', function (_evt) {
    doLog && console.log('scrollend: - _evt ' + JSON.stringify(_evt, null, '\t'));
});

win.add(listView);
win.open();

// $.index.open();
