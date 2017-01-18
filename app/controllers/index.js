function clickAlert(_evt) {
    alert('click!');
}

$.touchEnabledTrueButton.addEventListener('click', clickAlert);
$.touchEnabledFalseButton.addEventListener('click', clickAlert);


$.index.open();
