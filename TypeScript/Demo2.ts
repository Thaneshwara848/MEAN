class Demo2
{ 
    //const speed=200;
    speed=200;
    constructor(){
       
        console.log('HI COnstructor');
        // for(let i=0;i<=10;i++){ 
        for(var i=0;i<=10;i++){
       
            console.log("I :"+i)
        }

       // console.log("      I :"+ i )
        console.log("Speed ="+this.speed)
        this.speed=2000;
        console.log("Speed ="+this.speed)
        
    }
}
var d2= new Demo2();


// let  : local or block scope
// var : globle scope  
// const : we cant modify the code 
