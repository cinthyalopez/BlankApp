var view1 = Ti.UI.createView({
    height: 200,
    width: 200,
    backgroundColor: 'orange'
});

var view2 = Ti.UI.createView({
    height: 200,
    width: 200,
    backgroundColor: 'blue'
});

$.scrollView.add(view1);
$.scrollView.add(view2);

$.win.open();

$.scrollView.removeAllChildren();
$.scrollView.add(view1);
$.scrollView.add(view2);
