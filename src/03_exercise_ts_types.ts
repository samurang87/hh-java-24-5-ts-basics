// Step 1: Write a function that outputs a student with their grades, where a student
// should be output with first name, last name, age, and a list of grades.

type Grade = {
    subject: string;
    value: 1 | 2 | 3 | 4 | 5 | 6 | "A" | "B" | "C" | "D" | "E" | "F" | undefined;
}

function stringGrade(grade: Grade): string {
    return `${grade.subject}: ${grade.value === undefined ? "*" : grade.value}`;
}

function mapGrade(grade: Grade): number | undefined {
    switch (grade.value) {
        case "A":
            return 1;
        case "B":
            return 2;
        case "C":
            return 3;
        case "D":
            return 4;
        case "E":
            return 5;
        case "F":
            return 6;
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case undefined:
            return grade.value;
        default:
            throw new Error("Grade not allowed");
    }
}

function calculateGradesAverage(grades: Grade[]): number {
    const mappedGrades: (number | undefined)[] = grades.map(mapGrade);
    const validGrades: number[] = mappedGrades.filter(grade => grade !== undefined);
    const sum: number = validGrades.reduce((acc, grade) => acc + grade, 0);
    return parseFloat((sum / validGrades.length).toFixed(2));
}

function calculateAllStudentsAverage(student: Student[]): number {
    const allGrades: Grade[] = student.flatMap(student => student.grades);
    return calculateGradesAverage(allGrades);
}

type Student = {
    firstName: string,
    lastName: string,
    age: number,
    grades: Grade[]
}

function printStudent(student: Student): void {
    // console.log(`Student: ${student.firstName} ${student.lastName}, Age: ${student.age}, Grades: ${student.grades}`);
    const headline = `${student.firstName} ${student.lastName} (${student.age})`;
    console.log(headline);
    console.log(`=`.repeat(headline.length));
    for (const grade of student.grades) {
        console.log(stringGrade(grade));
    }
    console.log(`Average: ${calculateGradesAverage(student.grades)}`);
    console.log(``);
}

function printAllStudents(students: Student[]): void {
    students.forEach(student => printStudent(student));
}

const john: Student = {
    firstName: "John",
    lastName: "Green",
    age: 25,
    grades: [
        {
            subject: "Math",
            value: "A",
        },
        {
            subject: "English",
            value: "B",
        },
        {
            subject: "Science",
            value: "A",
        }]
}

const mary: Student = {
    firstName: "Mary",
    lastName: "Red",
    age: 22,
    grades: [
        {
            subject: "Math",
            value: 1,
        },
        {
            subject: "English",
            value: undefined,
        },
        {
            subject: "Science",
            value: "A",
        }]
}

const james: Student = {
    firstName: "James",
    lastName: "Blue",
    age: 20,
    grades: [
        {
            subject: "Math",
            value: 2,
        },
        {
            subject: "English",
            value: 1,
        },
        {
            subject: "Science",
            value: undefined,
        }]
};

printAllStudents([john, mary, james]);
console.log(`Average of all students: ${calculateAllStudentsAverage([john, mary, james])}`);