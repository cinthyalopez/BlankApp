function doClick(e) {
    var win = Ti.UI.createWindow({ backgroundColor: 'gray' });
    win.addEventListener('open', function (e) {
        win.add(null);
    });
    win.open();
}

$.index.open();
