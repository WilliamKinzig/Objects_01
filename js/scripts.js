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

/*************/

student["speak"]();//allows use of properties with special characters.
                  //also allows us to select properties using values.
