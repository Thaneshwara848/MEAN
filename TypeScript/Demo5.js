var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Ramesh = /** @class */ (function () {
    function Ramesh() {
        this.money = 50000;
        this.car = "BMW";
    }
    return Ramesh;
}());
var Demo5 = /** @class */ (function (_super) {
    __extends(Demo5, _super);
    function Demo5() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.money = 50000;
        return _this;
    }
    Demo5.prototype.display = function () {
        console.log("Modey :" + this.money);
        console.log("CAR  :" + this.car);
    };
    return Demo5;
}(Ramesh));
var d5 = new Demo5();
d5.display();
