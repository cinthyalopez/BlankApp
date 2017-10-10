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

$.scrollView.add(view1);
$.scrollView.add(view2);

$.removeAllChildrenButton.addEventListener('click', function (_evt) {
    $.container1.removeAllChildren();
    
});

$.addScrollButton.addEventListener('click', function (_evt) {
    $.container1.add($.scrollView);
});

$.addViewButton.addEventListener('click', function (_evt) {
    var view = Ti.UI.createView({
        height: 200,
        width: 200,
        backgroundColor: 'pink'
    });
    $.scrollView.add(view);
});
