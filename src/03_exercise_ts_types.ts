// Step 1: Write a function that outputs a student with their grades, where a student
// should be output with first name, last name, age, and a list of grades.

type Grade = {
    subject: string;
    value: "1" | "2" | "3" | "4" | "5" | "6" | "A" | "B" | "C" | "D" | "E" | "F" | undefined;
}

type Student = {
    firstName: string,
    lastName: string,
    age: number,
    grades: Grade[]
}

function stringGrade(grade: Grade): string {
    return `${grade.subject}: ${grade.value === undefined ? "*" : grade.value}`;
}

function printStudent(student: Student): void {
    // console.log(`Student: ${student.firstName} ${student.lastName}, Age: ${student.age}, Grades: ${student.grades}`);
    const headline = `${student.firstName} ${student.lastName} (${student.age})`;
    console.log(headline);
    console.log(`=`.repeat(headline.length));
    for (const grade of student.grades) {
        console.log(stringGrade(grade));
    }
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
            value: "1",
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
            value: "2",
        },
        {
            subject: "English",
            value: "1",
        },
        {
            subject: "Science",
            value: undefined,
        }]
};

printAllStudents([john, mary, james]);
