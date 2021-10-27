class Circle{
 /* constructor(radius){
    this.radius=radius;
  }*/
  constructor(radius,color){
    this.radius=radius;
    this.color=color
  }
  getRadius(){
    return this.radius;
  }
  setRadius(radius){
    this.radius=radius;
  }
  getColor(){
    return this.color;
  }

  setColor(color){
    this.color=color;
  }
  toString(){
    return `radius: ${this.radius} colour: ${this.color}`
  }
  area(){
    return 3.142*this.radius*this.radius;
  }
  circumferance(){
    return 2*3.142*this.radius;
  }
  
}

let myCircle=new Circle(10,'green');
console.log(myCircle.getRadius());
myCircle.setRadius(20);
console.log(myCircle.getRadius());
console.log(myCircle.getColor());
myCircle.setColor("blue");
console.log(myCircle.getColor());
console.log(myCircle.toString());
console.log(myCircle.area());
console.log(myCircle.circumferance());
// added