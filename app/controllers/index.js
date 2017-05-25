var win = Ti.UI.createWindow({backgroundColor: 'white'});
var listView = Ti.UI.createListView({
	width: Ti.UI.FILL,
	height: Ti.UI.FILL
});
var sections = [];

var fruitSection = Ti.UI.createListSection({ headerTitle: 'Fruits'});
var fruitDataSet = [
    {properties: { title: 'Apple', color: 'black' }},
    {properties: { title: 'Banana1', color: 'black' }},
    {properties: { title: 'Banana2', color: 'black' }},
    {properties: { title: 'Banana3', color: 'black' }},
    {properties: { title: 'Banana4', color: 'black' }},
    {properties: { title: 'Banana5', color: 'black' }},
    {properties: { title: 'Banana6', color: 'black' }},
    {properties: { title: 'Banana7', color: 'black' }},
    {properties: { title: 'Banana8', color: 'black' }},
    {properties: { title: 'Banana9', color: 'black' }},
    {properties: { title: 'Banana10', color: 'black' }},
    {properties: { title: 'Banana11', color: 'black' }},
    {properties: { title: 'Banana12', color: 'black' }},
    {properties: { title: 'Banana14', color: 'black' }},
    {properties: { title: 'Banana15', color: 'black' }},
    {properties: { title: 'Banana16', color: 'black' }},
    {properties: { title: 'Banana17', color: 'black' }},
    {properties: { title: 'Banana18', color: 'black' }},
    {properties: { title: 'Banana19', color: 'black' }},
    {properties: { title: 'Banana20', color: 'black' }},
    {properties: { title: 'Banana21', color: 'black' }},
    {properties: { title: 'Banana22', color: 'black' }},
    {properties: { title: 'Banana23', color: 'black' }},
    {properties: { title: 'Banana24', color: 'black' }},
    {properties: { title: 'Banana25', color: 'black' }},
    {properties: { title: 'Banana26', color: 'black' }},
    {properties: { title: 'Banana27', color: 'black' }},
    {properties: { title: 'Banana28', color: 'black' }},
    {properties: { title: 'Banana29', color: 'black' }},
    {properties: { title: 'Banana30', color: 'black' }},
    {properties: { title: 'Banana31', color: 'black' }},
    {properties: { title: 'Banana32', color: 'black' }},
    {properties: { title: 'Banana33', color: 'black' }},
    {properties: { title: 'Banana34', color: 'black' }},
    {properties: { title: 'Banana35', color: 'black' }},
    {properties: { title: 'Banana36', color: 'black' }},
    {properties: { title: 'Banana37', color: 'black' }},
    {properties: { title: 'Banana38', color: 'black' }},
    {properties: { title: 'Banana39', color: 'black' }},
    {properties: { title: 'Banana40', color: 'black' }},
    {properties: { title: 'Banana41', color: 'black' }},
    {properties: { title: 'Banana42', color: 'black' }},
    {properties: { title: 'Banana43', color: 'black' }},
    {properties: { title: 'Banana44', color: 'black' }},
    {properties: { title: 'Banana45', color: 'black' }},
    {properties: { title: 'Banana46', color: 'black' }},
    {properties: { title: 'Banana47', color: 'black' }},
    {properties: { title: 'Banana48', color: 'black' }},
    {properties: { title: 'Banana49', color: 'black' }},
    {properties: { title: 'Banana50', color: 'black' }},
    {properties: { title: 'Banana51', color: 'black' }},
    {properties: { title: 'Banana52', color: 'black' }},
    {properties: { title: 'Banana53', color: 'black' }},
    {properties: { title: 'Banana54', color: 'black' }}
];
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

win.add(listView);
win.open();

// $.index.open();
