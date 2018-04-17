var url = 'https://randomuser.me/api/?results=500&nat=us';
var ListView = require('ti.xaml.listview');
var win = Ti.UI.createWindow({ backgroundColor: 'green', layout: 'vertical' }),
cmdView = Ti.UI.createView({
    width: Ti.UI.FILL,
    height: Ti.UI.SIZE,
    layout: 'horizontal',
    backgroundColor: 'gray'
}),
goSection0 = Ti.UI.createButton({
    title: 'Section 0'
}),
goSection1 = Ti.UI.createButton({
    title: 'Section 1'
}),
goSection2 = Ti.UI.createButton({
    title: 'Section 2'
});

cmdView.add(goSection0);
cmdView.add(goSection1);
cmdView.add(goSection2);

win.add(cmdView);

win.open();

var client = Ti.Network.createHTTPClient({
    // function called when the response data is available
    onload : function(e) {
    	var _response = JSON.parse(this.responseText);
        // console.log(JSON.stringify(_response));
        console.log("Server responded!");
        
        var items0 = [],
            items1 = [],
            items2 = [];

        for (var i = 0; i < _response.results.length; i++) {
            var userObject = _response.results[i];
            items0.push(
                { 
                    properties: { 
                        title: userObject.name.title + ' ' + userObject.name.first + ' ' + userObject.name.last, 
                        subtitle: userObject.location.street + ' ' + userObject.location.city + ' ' + userObject.location.state + ' ' + userObject.location.postcode, 
                        description: '$1,2345.00',
                        data0: '4/12/17',
                        data1: 'NEW OPPORTUNITY',
                        data2: 'Contact: John Smith',
                        data3: 'Phone: (123) 456-7890',
                        data4: 'Email: ' + userObject.email,
                        data5: 'Days in Stage: 12',
                        image: 'Square150x150Logo.png',
                        data6: userObject.picture.large,
                        data7: 'Square150x150Logo.png'
                    } 
                });
            items1.push(
                { 
                    properties: { 
                        title: 'Vegetable ' + i, 
                        subtitle: 'Subtitle ' + i, 
                        description: 'THis is a very very very loooooooooooooooong description. It might get longer in the future. We do not know.',
                        image: 'Square150x150Logo.png' 
                    } 
                });
            items2.push(
                { 
                    properties: { 
                        title: 'Meat ' + i, 
                        subtitle: 'Subtitle ' + i, 
                        description: 'THis is a very very very loooooooooooooooong description. It might get longer in the future. We do not know.',
                        image: 'Square150x150Logo.png' 
                    } 
                });
        }

        var fruitSection = Ti.UI.createListSection({
            headerTitle: 'Fruits',
            items: items0
        }),
        vegSection = Ti.UI.createListSection({
            headerTitle: 'Vegetables',
            items: items1
        }),
        meatSecion = Ti.UI.createListSection({
            headerTitle: 'Meats',
            items: items2
        });
        
        var listView = new ListView({
            width: Ti.UI.FILL,
            height: '80%',
            sections: [fruitSection, vegSection, meatSecion]
        });

        win.add(listView);

        goSection0.addEventListener('click', function () {
            listView.scrollToItem(0, 0);
        });
        goSection1.addEventListener('click', function () {
            listView.scrollToItem(1, 0);
        });
        goSection2.addEventListener('click', function () {
            listView.scrollToItem(2, 0);
        });
        
        listView.addEventListener('itemclick', function (e) {
            alert(JSON.stringify(e.properties));
        });
    },
    // function called when an error occurs, including a timeout
    onerror : function(e) {
        Ti.API.debug(e.error);
        alert('error');
    },
    timeout : 5000  // in milliseconds
});
// Prepare the connection.
client.open('GET', url);
// Send the request.
client.send();


