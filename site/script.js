'use strict';


// var i; // hoisten

// flexibele, dynamische taal
// PHP, Python

var x = 14;

// const let

let y = 14;
const z = 28;

// scoping

// console.log('i voor for:', i);
for (let i = 0; i < 10; i++) { // lexical scope
	console.log('i:', i);
}
// console.log('i buiten for:', i);

let g = 23;
if (g === '23') {
	console.log('jep');
}
else {
	console.log('nope');
}


let p = 44;
console.log('p / bla', p / 'bla');
console.log('p / bla is dat NaN', p / 'bla' === NaN);
console.log('p / bla is dat NaN', isNaN(p / 'bla'));

let obj = {
	toString() {
		return 'test';
	}
};
if (obj === 'test') {
	console.log('obj is een test blijkbaar');
}
else {
	console.log('nee geen test');
}

function test() {
	console.log(this);
}
test();
test.call({ x: 14 });

// this wijst standaard naar de eigenaar van je functie

let dinges = function() {
	console.log(this);
};
dinges();
dinges.call({ x: 14 });


let hallo = () => {
	console.log(this);
};
hallo();
hallo.call({ x: 14 });



