class Demo4
{
    
    constructor(id:number,name:string,CODE:any,salary?:number,desig="DEVELOPER")
    {
        console.log("ID :"+id)
        console.log("name :"+name)
        console.log("CODE :"+CODE)
        console.log("Salary:"+salary)
        console.log("DESIGNATION :"+desig)
    }
    
}
var d4= new Demo4(100,"Thanesh","ABC",50000,"Developer");
var d4= new Demo4(100,"Thanesh","ABC");