// Step 1: Write a function that outputs a student with their grades, where a student
// should be output with first name, last name, age, and a list of grades.

type Grade = "1" | "2" | "3" | "4" | "5" | "6" | "A" | "B" | "C" | "D" | "E" | "F" | undefined;

type Student = {
    firstName: string,
    lastName: string,
    age: number,
    grades: Grade[]
}

function printStudent(student: Student): void {
    // console.log(`Student: ${student.firstName} ${student.lastName}, Age: ${student.age}, Grades: ${student.grades}`);
    console.log(`${student.firstName} ${student.lastName} (${student.age})`);
    console.log(`=`.repeat(30));
    console.log(`Grades: ${student.grades.map(grade => grade === undefined ? "*": grade).join(",")}`);
    console.log(``);
}

const john: Student = {
    firstName: "John",
    lastName: "Green",
    age: 25,
    grades: ["1", "2", "3"]
}

const mary: Student = {
    firstName: "Mary",
    lastName: "Red",
    age: 22,
    grades: [undefined, "B", "C"]
}

const james: Student = {
    firstName: "James",
    lastName: "Blue",
    age: 20,
    grades: ["3", "1", undefined]
};

printStudent(john);
printStudent(mary);
printStudent(james);
