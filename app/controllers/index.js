var words = ['Bananas', 'Strawberries', 'Mangos', 'Electrocardiographically', 
'October', 'November', 'September', 'Wednesday', 'Trinitrophenylmethylnitramine', 
'Humor', 'Weekday', 'Balloon', 'Ornament', 'Strange', 'Disestablishmentarianism',
'Aeroplane', 'Aeroplane', 'Chess board', 'Floodlight', 'Rocket', 'Space Shuttle',
'Thermometer', ' Umbrella', 'Water', 'Tunnel', 'Treadmill', 'Lips', 'Brush', 
'Subconstellation', 'Typewriter', 'Room', 'Money', 'Hieroglyph', 'Flower', 'Monument', 
'Egg', 'Explosive', 'Family', 'Festival', 'Gloves', 'Horoscope', 'Kaleidoscope', 
'Microscope', 'Pendulum', 'Restaurant', 'Apples', 'Cycle', 'Miraculousness', 
'Overprovocation', 'Kyphoscoliotic', 'Disillusionizing', 'Prince'];

// Add TiClassic picker - 1 column, width = Ti.UI.SIZE, height = Ti.UI.SIZE, backgroundColor = #EDEDED
var classicPicker = Ti.UI.createPicker({
	top: 20,
	left: 0,
	height: Ti.UI.SIZE,
	width: Ti.UI.SIZE,
	backgroundColor: '#EDEDED'
});

var classicPickerRows = [];
for (var i = 0; i < words.length; i++) {
	var wordIndex = Math.round(Math.random() * 50);
	classicPickerRows[i] = Ti.UI.createPickerRow({ title: words[wordIndex] });
}
classicPicker.add(classicPickerRows);
$.container.add(classicPicker);

// Add TiClassic picker - 1 column, width = 350, height = Ti.UI.SIZE, backgroundColor = #EDEDED
var classicPicker2 = Ti.UI.createPicker({
	top: 200,
	left: 0,
	height: Ti.UI.SIZE,
	width: 350,
	backgroundColor: '#EDEDED'
});

var classicPickerRows2 = [];
for (var i = 0; i < words.length; i++) {
	var wordIndex = Math.round(Math.random() * 50);
	classicPickerRows2[i] = Ti.UI.createPickerRow({ title: words[wordIndex] });
}
classicPicker2.add(classicPickerRows2);
$.container.add(classicPicker2);

$.container.open();
