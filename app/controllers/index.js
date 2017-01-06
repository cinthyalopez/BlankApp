var dateTimePicker = Ti.UI.createPicker({
	  type:Ti.UI.PICKER_TYPE_DATE_AND_TIME,
	  left: 0,
	  top:250,
	  minDate:new Date(2009,0,1),
	  maxDate:new Date(2014,11,31),
	  value:new Date(2014,3,12),
	  backgroundColor: 'green'
	});
	$.container.add(dateTimePicker);

$.container.open();
