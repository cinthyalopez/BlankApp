// Create buttons on top
var upperButtons = Ti.UI.createView({
	top: 0,
	left: 0,
	height: 65,
	width: Ti.UI.FILL,
	layout: 'horizontal'
});
var section1Button = Ti.UI.createButton({
	height: 45,
	width: 200,
	title: 'Go to Section 1'
});
var section2Button = Ti.UI.createButton({
	height: 45,
	width: 200,
	title: 'Go to Section 2'
});
var section3Button = Ti.UI.createButton({
	height: 45,
	width: 200,
	title: 'Go to Section 3'
});
upperButtons.add(section1Button);
upperButtons.add(section2Button);
upperButtons.add(section3Button);

// Create buttons on the bottom
var lowerButtons = Ti.UI.createView({
	bottom: 0,
	left: 0,
	height: 65,
	width: Ti.UI.FILL,
	layout: 'horizontal'
});
var section1Button2 = Ti.UI.createButton({
	height: 45,
	width: 200,
	title: 'Go to Section 1'
});
var section2Button2 = Ti.UI.createButton({
	height: 45,
	width: 200,
	title: 'Go to Section 2'
});
var section3Button2 = Ti.UI.createButton({
	height: 45,
	width: 200,
	title: 'Go to Section 3'
});
lowerButtons.add(section1Button2);
lowerButtons.add(section2Button2);
lowerButtons.add(section3Button2);

// Create the list view
var firstSectionData = [
	{
		firstName: 'Jessica',
		lastName: 'Jenkins',
		gender: 'F',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Jessica',
		lastName: 'Jenkins',
		gender: 'F',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Karla',
		lastName: 'Kao',
		gender: 'F',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Jessica',
		lastName: 'Jenkins',
		gender: 'F',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Jessica',
		lastName: 'Jenkins',
		gender: 'F',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Jessica',
		lastName: 'Jenkins',
		gender: 'F',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Jessica',
		lastName: 'Jenkins',
		gender: 'F',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Jessica',
		lastName: 'Jenkins',
		gender: 'F',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Jessica',
		lastName: 'Jenkins',
		gender: 'F',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Lisa',
		lastName: 'Lafontaine',
		gender: 'F',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Lisa',
		lastName: 'Lafontaine',
		gender: 'F',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Lisa',
		lastName: 'Lafontaine',
		gender: 'F',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Lisa',
		lastName: 'Lafontaine',
		gender: 'F',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Lisa',
		lastName: 'Lafontaine',
		gender: 'F',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Lisa',
		lastName: 'Lafontaine',
		gender: 'F',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Lisa',
		lastName: 'Lafontaine',
		gender: 'F',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Lisa',
		lastName: 'Lafontaine',
		gender: 'F',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Marge',
		lastName: 'MacDonald',
		gender: 'F',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Marge',
		lastName: 'MacDonald',
		gender: 'F',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Marge',
		lastName: 'MacDonald',
		gender: 'F',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Marge',
		lastName: 'MacDonald',
		gender: 'F',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Marge',
		lastName: 'MacDonald',
		gender: 'F',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Marge',
		lastName: 'MacDonald',
		gender: 'F',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Marge',
		lastName: 'MacDonald',
		gender: 'F',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Nadine',
		lastName: 'Nabors',
		gender: 'F',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Nadine',
		lastName: 'Nabors',
		gender: 'F',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Nadine',
		lastName: 'Nabors',
		gender: 'F',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Nadine',
		lastName: 'Nabors',
		gender: 'F',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Nadine',
		lastName: 'Nabors',
		gender: 'F',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Nadine',
		lastName: 'Nabors',
		gender: 'F',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Nadine',
		lastName: 'Nabors',
		gender: 'F',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Nadine',
		lastName: 'Nabors',
		gender: 'F',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Oscar',
		lastName: 'O\'Connor',
		gender: 'M',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	}
];

var secondSectionData = [
	{
		firstName: 'Oscar',
		lastName: 'O\'Connor',
		gender: 'M',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Oscar',
		lastName: 'O\'Connor',
		gender: 'M',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Oscar',
		lastName: 'O\'Connor',
		gender: 'M',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Oscar',
		lastName: 'O\'Connor',
		gender: 'M',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Petter',
		lastName: 'Padfield',
		gender: 'M',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Petter',
		lastName: 'Padfield',
		gender: 'M',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Petter',
		lastName: 'Padfield',
		gender: 'M',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Petter',
		lastName: 'Padfield',
		gender: 'M',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Petter',
		lastName: 'Padfield',
		gender: 'M',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Petter',
		lastName: 'Padfield',
		gender: 'M',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Quincy',
		lastName: 'Quintana',
		gender: 'M',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Quincy',
		lastName: 'Quintana',
		gender: 'M',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Quincy',
		lastName: 'Quintana',
		gender: 'M',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Quincy',
		lastName: 'Quintana',
		gender: 'M',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Quincy',
		lastName: 'Quintana',
		gender: 'M',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Rose',
		lastName: 'Rogers',
		gender: 'F',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Sandra',
		lastName: 'Sanders',
		gender: 'F',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Tommy',
		lastName: 'Tate',
		gender: 'M',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Ursula',
		lastName: 'Ulrich',
		gender: 'F',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Valentina',
		lastName: 'Vainowski',
		gender: 'F',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'William',
		lastName: 'Wilson',
		gender: 'M',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Xamara',
		lastName: 'Ximenez',
		gender: 'F',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Yolanda',
		lastName: 'Yagher',
		gender: 'F',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Zelda',
		lastName: 'Zabala',
		gender: 'F',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	}
];

var thirdSectionData = [
	{
		firstName: 'Ann',
		lastName: 'Armstrong',
		gender: 'F',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Ann',
		lastName: 'Armstrong',
		gender: 'F',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Ann',
		lastName: 'Armstrong',
		gender: 'F',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Ann',
		lastName: 'Armstrong',
		gender: 'F',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Ann',
		lastName: 'Armstrong',
		gender: 'F',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Bill',
		lastName: 'Bailey',
		gender: 'M',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Bill',
		lastName: 'Bailey',
		gender: 'M',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Bill',
		lastName: 'Bailey',
		gender: 'M',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Bill',
		lastName: 'Bailey',
		gender: 'M',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Bill',
		lastName: 'Bailey',
		gender: 'M',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Carl',
		lastName: 'Caldwell',
		gender: 'M',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'David',
		lastName: 'Dowell',
		gender: 'M',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Edward',
		lastName: 'Ellis',
		gender: 'M',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Edward',
		lastName: 'Ellis',
		gender: 'M',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Edward',
		lastName: 'Ellis',
		gender: 'M',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Edward',
		lastName: 'Ellis',
		gender: 'M',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Edward',
		lastName: 'Ellis',
		gender: 'M',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Edward',
		lastName: 'Ellis',
		gender: 'M',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Felicia',
		lastName: 'Fonda',
		gender: 'F',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Felicia',
		lastName: 'Fonda',
		gender: 'F',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Felicia',
		lastName: 'Fonda',
		gender: 'F',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Felicia',
		lastName: 'Fonda',
		gender: 'F',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Felicia',
		lastName: 'Fonda',
		gender: 'F',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Felicia',
		lastName: 'Fonda',
		gender: 'F',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Felicia',
		lastName: 'Fonda',
		gender: 'F',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Gary',
		lastName: 'Gallagher',
		gender: 'M',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Gary',
		lastName: 'Gallagher',
		gender: 'M',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Gary',
		lastName: 'Gallagher',
		gender: 'M',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Gary',
		lastName: 'Gallagher',
		gender: 'M',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Gary',
		lastName: 'Gallagher',
		gender: 'M',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Gary',
		lastName: 'Gallagher',
		gender: 'M',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Gary',
		lastName: 'Gallagher',
		gender: 'M',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Hilda',
		lastName: 'Haggard',
		gender: 'F',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Hilda',
		lastName: 'Haggard',
		gender: 'F',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Hilda',
		lastName: 'Haggard',
		gender: 'F',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Hilda',
		lastName: 'Haggard',
		gender: 'F',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Hilda',
		lastName: 'Haggard',
		gender: 'F',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Hilda',
		lastName: 'Haggard',
		gender: 'F',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Hilda',
		lastName: 'Haggard',
		gender: 'F',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Hilda',
		lastName: 'Haggard',
		gender: 'F',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Isabel',
		lastName: 'Iglesias',
		gender: 'F',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Isabel',
		lastName: 'Iglesias',
		gender: 'F',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Isabel',
		lastName: 'Iglesias',
		gender: 'F',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Isabel',
		lastName: 'Iglesias',
		gender: 'F',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Isabel',
		lastName: 'Iglesias',
		gender: 'F',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Isabel',
		lastName: 'Iglesias',
		gender: 'F',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Jessica',
		lastName: 'Jenkins',
		gender: 'F',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Jessica',
		lastName: 'Jenkins',
		gender: 'F',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Jessica',
		lastName: 'Jenkins',
		gender: 'F',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	},
	{
		firstName: 'Jessica',
		lastName: 'Jenkins',
		gender: 'F',
		street: '123 Fake St',
		city: 'Fake City',
		state: 'Fake State',
		zipCode: '553434',
		email: 'fake@fake.com'
	}
];

var usersListView = Ti.UI.createListView({
	top: 66,
	bottom: 66,
	width: Ti.UI.FILL,
	backgroundColor: 'purple' 
});

var sections = [];
var firstSection = Ti.UI.createListSection({ headerTitle: 'A' });
var secondSection = Ti.UI.createListSection({ headerTitle: 'B' });
var thirdSection = Ti.UI.createListSection({ headerTitle: 'C' });

var firstSectionItems = _.map(firstSectionData, function (_user) {
	return {
		properties: {
			title: _user.firstName + ' ' + _user.lastName
		}
	};
});
firstSection.items = firstSectionItems;
sections.push(firstSection);

var secondSectionItems = _.map(secondSectionData, function (_user) {
	return {
		properties: {
			title: _user.firstName + ' ' + _user.lastName
		}
	};
});
secondSection.items = secondSectionItems;
sections.push(secondSection);

var thirdSectionItems = _.map(thirdSectionData, function (_user) {
	return {
		properties: {
			title: _user.firstName + ' ' + _user.lastName
		}
	};
});
thirdSection.items = thirdSectionItems;
sections.push(thirdSection);

usersListView.sections = sections;

// Add event handlers & listeners
function goToSection1(_evt) {
	console.log('- goToSection1');
	usersListView.scrollToItem(0, 0);
}

function goToSection2(_evt) {
	console.log('- goToSection2');
	usersListView.scrollToItem(1, 0);
}

function goToSection3(_evt) {
	console.log('- goToSection3');
	usersListView.scrollToItem(2, 0);
}

section1Button.addEventListener('click', goToSection1);
section2Button.addEventListener('click', goToSection2);
section3Button.addEventListener('click', goToSection3);

section1Button2.addEventListener('click', goToSection1);
section2Button2.addEventListener('click', goToSection2);
section3Button2.addEventListener('click', goToSection3);

var container = Ti.UI.createWindow();
container.add(upperButtons);
container.add(usersListView);
container.add(lowerButtons);
container.open();
