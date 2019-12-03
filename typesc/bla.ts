
class Whatever {}

interface Hallo extends Whatever {

}

function Bladiebla {

}

class Hihi extends Bladiebla {

}









let x: number = 42;

// ducktyping
class Human {
	nrOfEyes: number;

	talk?() {}
}

let humans: Human[] = [{ nrOfEyes: 4 }, { nrOfEyes: 2}];
humans[0].talk();
(humans as any)[0] = {};


let func = function() {};
let lambda = () => {
	console.log("this:", this);
};
// enum Direction {
//     Up = 1,
//     Down,
//     Left,
//     Right,
// }

// interface Bla {
// 	hoi();
// }

// class Ding implements Bla { hoi() { } }

// class Hoi extends Ding {
// 	constructor() {
// 		super();
// 		console.log('hallooo');
// 	}
// }
// let hoi = new Hoi();

// async function test() {

// }
