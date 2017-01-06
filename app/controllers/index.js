var dateTimePicker = Ti.UI.createPicker({
	  type:Ti.UI.PICKER_TYPE_DATE_AND_TIME,
	  left: 0,
	  height: 20,
	  width: 300, 
	  top:250,
	  backgroundColor: 'green'
	});
	$.container.add(dateTimePicker);

$.container.open();
