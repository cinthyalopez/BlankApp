
var value = true;
console.log('$.square.backgroundColorChecked=' + $.square.backgroundColorChecked);
console.log('$.square.backgroundColorUnchecked=' + $.square.backgroundColorUnchecked);
	
if (value) {
	$.square.backgroundColor = $.square.backgroundColorChecked;
} else {
	$.square.backgroundColor = $.square.backgroundColorUnchecked;
}

$.container.open();
