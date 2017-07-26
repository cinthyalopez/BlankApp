function clickAlert(_evt) {
    alert(_evt.source.id);
}

$.someView.addEventListener('click', clickAlert);
$.someView.addEventListener('click', clickAlert);


$.index.open();
