// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

var items = [
	{ 
		properties: {
			height: 40,
			title: 'First',
			accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_DISCLOSURE	
		}
	}, 
	{
		properties: {
			height: 40,
			title: 'Second',
			accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_DISCLOSURE
		}
	},
	{
		properties: {
			height: 40,
			title: 'Third',
			accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_DISCLOSURE
		}
	}
];

$.section.setItems(items);

$.container.open();
