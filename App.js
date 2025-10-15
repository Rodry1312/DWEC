import StudentCollection from './StudentCollection.js';

// Students
const students = [
    { name: "John Doe", age: 18, grades: [88, 92, 76], isEnrolled: true },
    { name: "Rodrigo", age: 18, grades: [90, 92, 80], isEnrolled: true },
    { name: "Alejandro", age: 18, grades: [85, 96, 82], isEnrolled: false },
    { name: "Steven", age: 18, grades: [75, 99, 98], isEnrolled: true },
];

// New collection students 
const studentCollection = new StudentCollection(students);

// find by name 
console.log("Find Rodrigo:", studentCollection.getStudentByName("Rodrigo"));

// Add new student 
studentCollection.addStudent("Alejandro Vazquez", 20, [90, 72, 90], true);

// Delete Student
studentCollection.removeStudentByName("Steven");

// Update students grades
studentCollection.updateStudentsGrades("Alejandro", [90, 99, 85]);

console.log("Media John:", studentCollection.calculateAverageGrade("John Doe"));
console.log("enrolled students:", studentCollection.getEnrolledStudents());
console.log("Students over 19:", studentCollection.getStudentsAboveAge(19));
console.log("Best student :", studentCollection.getTopStudent());
console.log("Students Summary:", studentCollection.getStudentSummaries());
console.log("Students with average >= 90:", studentCollection.getTopStudents(90));
console.log("Enrroled students name :", studentCollection.getEnrolledStudentName());
console.log("Format grades:", studentCollection.formatGrades());
console.log("Honor students(>=90):", studentCollection.getHonorRollStudents());


const serialized = studentCollection.serializeStudents();
console.log("Serializado:", serialized);

// ✅ Deserializar (restaurar desde el texto)
studentCollection.deserializeStudents(serialized);
console.log("Deserializado:", studentCollection.students);

