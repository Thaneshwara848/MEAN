var Demo4 = /** @class */ (function () {
    function Demo4(id, name, CODE, salary, desig) {
        if (desig === void 0) { desig = "DEVELOPER"; }
        console.log("ID :" + id);
        console.log("name :" + name);
        console.log("CODE :" + CODE);
        console.log("Salary:" + salary);
        console.log("DESIGNATION :" + desig);
    }
    return Demo4;
}());
var d4 = new Demo4(100, "Thanesh", "ABC", 50000, "Developer");
var d4 = new Demo4(100, "Thanesh", "ABC");
