var search = Titanium.UI.createSearchBar({
    width: 350,
    height: 143,
    barColor: '#ff0000',
    hintText: 'Search for something!',
    top: 0
});

$.container.add(search);
$.container.open();