export default class StudentCollection {
    constructor(students = []) {
        this.students = students;
    }

    // Add student
    addStudent(name, age, grades, isEnrolled) {
        this.students.push({ name, age, grades, isEnrolled });
    }

    // find By Name 
    getStudentByName(name) {
        return this.students.find(s => s.name === name);
    }

    // Delete by name 
    removeStudentByName(name) {
        this.students = this.students.filter(s => s.name !== name);
    }

    // Update grades by name 
    updateStudentsGrades(name, newGrades) {
        const student = this.getStudentByName(name);
        if (student) {
            student.grades = newGrades;
        }
    }

    // Calculate average
    calculateAverageGrade(name) {
        const student = this.getStudentByName(name);
        if (!student) return null;

        const total = student.grades.reduce((sum, grade) => sum + grade, 0);
        return total / student.grades.length;
    }

    // Show enrolled students 
    getEnrolledStudents() {
        return this.students.filter(s => s.isEnrolled);
    }

    // Show students +19
    getStudentsAboveAge(age) {
        return this.students.filter(s => s.age > age);
    }

    // Get students with better average 
    getTopStudent() {
        if (this.students.length === 0) return null;

        return this.students.reduce((best, current) => {
            const avgBest = this.calculateAverageGrade(best.name);
            const avgCurrent = this.calculateAverageGrade(current.name);
            return avgCurrent > avgBest ? current : best;
        });
    }

    // Get resume 
    getStudentSummaries() {
        return this.students.map(s => ({
            name: s.name,
            average: this.calculateAverageGrade(s.name)
        }));
    }

    // Get student with average (value)
    getTopStudents(threshold) {
        return this.students.filter(s => this.calculateAverageGrade(s.name) >= threshold);
    }

    // Students name enrolled 
    getEnrolledStudentName() {
        return this.getEnrolledStudents().map(s => s.name);
    }

    
    formatGrades() {
        return this.students.map(s => `${s.name}: ${s.grades.join(", ")}`);
    }

    // Show honor students 
    getHonorRollStudents() {
        return this.getTopStudents(90);
    }

    serializeStudents() {
        return JSON.stringify(this.students);
    }

    deserializeStudents(jsonString) {
    this.students = JSON.parse(jsonString);
}


}
