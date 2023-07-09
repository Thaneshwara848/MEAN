var Demo1 = /** @class */ (function () {
    function Demo1() {
        console.log(" Hellow World constructor ");
    }
    Demo1.prototype.abc = function () {
        console.log("Hi hello world method  ");
    };
    return Demo1;
}());
var da = new Demo1();
da.abc();
da.abc();
da.abc();
