var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _this = this;
var Whatever = /** @class */ (function () {
    function Whatever() {
    }
    return Whatever;
}());
function Bladiebla() {
}
var Hihi = /** @class */ (function (_super) {
    __extends(Hihi, _super);
    function Hihi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Hihi;
}(Bladiebla));
var x = 42;
// ducktyping
var Human = /** @class */ (function () {
    function Human() {
    }
    Human.prototype.talk = function () { };
    return Human;
}());
var humans = [{ nrOfEyes: 4 }, { nrOfEyes: 2 }];
humans[0].talk();
humans[0] = {};
var func = function () { };
var lambda = function () {
    console.log("this:", _this);
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
