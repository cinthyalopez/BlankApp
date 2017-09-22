var win = Ti.UI.createWindow({ backgroundColor: 'white' });
var button = Ti.UI.createButton({
    title: 'BUTTON',
    backgroundColor: 'pink'
});

var style = Ti.UI.Windows.createStyle({ source: 'ms-appx:///Styles.xaml' });
style.apply(button, 'ButtonStyle');
win.add(button);
win.open();


// $.container.open();
