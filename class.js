// // function Automobile(wheels){
// //     this.wheels = wheels;
// //     this.setColor = (color)=>{
// //         this.color = color
// //     }
// //     this.getColor = () =>{
// //         return this.color
// //     }
// // }
class Automobile{
    constructor(wheels){
        this.wheels = wheels
        this.color = "Black"
    }
    setColor(color){
        this.color = color
    }
    getColor(){
        return this.color
    }
 }
 // function Motorcycle(make, model, year){
 //     this.make = make;
 //     this.model = model;
 //     this.year = year;
 // }
 // Motorcycle.prototype = new Automobile(2)
 
 
 class Motorcycle extends Automobile {
    constructor(make, model, year) {
        super(4)
        this.make = make;
        this.year = year;
        this.model = model;
    }
 }
 
 // function Sedan(make, model, year) {
 //     this.make = make;
 //     this.model = model;
 //     this.year = year;
 //     this.doors = 4;
 // }
 // Sedan.prototype = new Automobile(4);
 
 // function Camry() {
 
 // }
 // Camry.prototype = new Sedan('Toyota', 'Camry', 2018)
 // //the instance of the class
 // const camry = new Camry()
 
 
 // console.dir(camry)
 // console.log(camry.wheels, camry.doors)
 
 // camry.year = 2010
 // console.log(camry.year)
 
 class Sedan extends Automobile{
    constructor(make, model, year){
        super(4);
    }
 
 }
 
 
 class Maybach extends Sedan{
    constructor(make, model, year) {
        super('Mercedez', 'Maybach', 2012);
        this.make = make;
        this.year = year;
        this.model = model;
        this.umbrella = 'umbrella_sutter';
    }
    setUmrella(umbrella_sutter){
        this.umbrella = umbrella_sutter
    }
    getUmbrella(){
        return this.umbrella
    }
 }
 
 const maybach = new Maybach('Mercedez', 'Maybach', 2012)
 
 
 
 console.dir(maybach)
 console.log(maybach.umbrella)