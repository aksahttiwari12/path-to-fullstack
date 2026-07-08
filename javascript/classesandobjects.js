//We will learn about classes and objects today and how they are built in javascript.
//A class is basically a blueprint for an object.
//

class Rectangle {
    constructor(height,width,color){
        this.height = height; // its saying like the width of this this object(say rect) is equal to the height variable we wrote in class
        this.width  = width;
        this.color = color;
    }
//this keyword here is used to refer to an object that is being created with the help of this class 
//this.height means that the height of rect object is equal to the height that we are using in the constructor.
//We can understand it in this way that this is just a placeholder for the created objects
    area(){
        const area = this.width*this.height;
        return area;
    }
 
    color(){
        console.log(`This rectangle is of the color : ${this.color}`);
    }
}

//the code above is representing a class rectangle.What we have done here is that we have prepared a structure that we are going to use again and again to build something
//In this case we are building objects with the use of classes. (Now these objects are different from the other object that we studied in javascript)

//forming objects:
const rect = new Rectangle(4,5,"red");
const area = rect.area();
//the . here basically connects the object with the properties or methods
console.log(area);

//Some important  predefined classes
const now = new Date(); //Current date and time
console.log(now.toISOString());
 //map class

 const map = new map();
 map.set('name' , 'Alice');
 map.set('Age' , '20');
 console.log(map.get('name'));