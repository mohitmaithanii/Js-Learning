//Objects destructuring =>
const course = {
   courseName: "Js in hind",
   price: "free",
   courseInstructor: "hitesh",
};

//course.courseInstructor

const { courseInstructor } = course;
console.log(courseInstructor);
