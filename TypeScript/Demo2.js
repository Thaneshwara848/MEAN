var Demo2 = /** @class */ (function () {
    function Demo2() {
        var speed = 200;
        console.log('HI COnstructor');
        // for(let i=0;i<=10;i++){ local scopt or block scope
        for (var i = 0; i <= 10; i++) {
            console.log("I :" + i);
        }
        console.log("      I :" + i);
        console.log("Speed =" + this.speed);
        // this.speed=2000;
        console.log("Speed =" + this.speed);
    }
    return Demo2;
}());
var d2 = new Demo2();
// let and var 
// const : we cant modify the code 
