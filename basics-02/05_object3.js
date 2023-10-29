//Objects destructuring =>
const course = {
   name: "mohit",
   courseName: "Js in hind",
   price: "free",
   courseInstructor: "hitesh",
};

//course.courseInstructor

const { courseInstructor } = course;
const { courseInstructor: instructor } = course;

console.log(courseInstructor);

// JSON API =>
/* {
   name: "mohit",
   courseName: "Js in hind",
   price: "free",
   courseInstructor: "hitesh",
}


[{}, {}, {}];
*/
