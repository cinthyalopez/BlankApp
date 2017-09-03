console.log('$.square.backgroundColorChecked=' + $.square.backgroundColorChecked);
console.log('$.square.backgroundColorUnchecked=' + $.square.backgroundColorUnchecked);
	
$.square.backgroundColor = $.square.backgroundColorChecked;
$.square.backgroundImage = $.square.backgroundImageChecked;

$.square.width = 150;
$.square.height = 150;

$.text.color = $.text.colorChecked;

$.button.touchEnabled = false;

$.container.open();
