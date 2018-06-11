var epicodusStudent = {
    firstName: "William",
    lastName: "Kinzig",
	level: 1,
	track: ["PHP", "JavaScript","Drupal"],
	enrollmentStatus: true
};

epicodusStudent.firstName;
epicodusStudent["firstName"];

/*************/

var student = {
	name: "billy",
	speak: function(){
		console.log("hello");
    	}
};

student.speak();//easy to read and rightß

/************* create dog using LITERAL NOTATION *********/

student["speak"]();//allows use of properties with special characters.
                  //also allows us to select properties using values.

var dog = {};
dog.name = "benny";
dog.age = 3;
dog.colors = ["black","brown"];
dog.colors[0];
dog.colors.push()"white");
dog.age + 4;
dog.name = "BNE";
dog.howl = function(){
  console.log("aaaaaoooooooooo")
};
dog.humanYears = function(){
  return this.age * 7
};

/************* CONSTRUCTORS ********************/

var testGreeting = new String;

var testGreeting2 = new String("Hello!");

//constructor function
function Dog(name, colors, age){
  this.name = name;
  this.colors = colors;
  this.age = age;
}
//create an INSTANCE of the Dog type
var myPuppy = new Dog("Ernie", ["brown", "black"], 3);
myPuppy.name;

/************* PROTOTYPE ********************/
//A prototype is just an object from which other objects inherit methods
//We can run any of the String.prototype methods
var testGreeting2 = new String("Hello!");
testGreeting2.toUpperCase();

// add a custom method to String.prototype:
String.prototype.addExcitement = function(){
  return this + "!!!!!!!!"
};
testGreeting2.addExcitement();

/************* PROTOTYPE_02 ********************/
//EVEREY NEW DOG WILL ALSO HAVE THESE METHODS
Dog.prototype.speak = function(){
  console.log("Woof!");
};
Dog.prototype.humanYears = function(){
  return this.age * 7;
}
///// myPuppy con now speak
myPuppy.speak();
/////  and have its age calculated in human years:
myPuppy.humanYears();
