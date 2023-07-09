// INHERITANCE , var, methods 
// parent class 
// super class 
// base class 
class Ramesh
{
    money=50000;
    car="BMW";
}
// child class 
// sub class
// derived class 
class Demo5  extends Ramesh
{
    money=50000;
    display()
    {
        console.log("Modey :"+this.money)
        console.log("CAR  :"+this.car) // inheritance 
        // aquring the property from parent to child 
    }    
}
var d5= new Demo5();
d5.display();

