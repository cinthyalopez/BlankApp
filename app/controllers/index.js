function clickAlert(_evt) {
    alert(_evt.source.id);
}

$.container.addEventListener('click', clickAlert);

$.container.open();
