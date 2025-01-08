/*
* Step 1: Declare a variable named 'age' of type 'number' and assign a value to it.

Step 2: Write a 'for' loop that outputs the numbers from 1 to 'age'.

Step 3: Use an 'if-else' statement to check if 'age' is greater than 18.
Display appropriate messages depending on whether the condition is met or not.

Step 4: Declare a variable named 'score' of type 'number' and assign it the value 0.

Step 5: Use an 'if' statement to check if 'score' has a value.
Display 'Score is available.' if 'score' has a value other than 0.

Step 6: Use an 'if-else' statement to check if 'score' is evaluated as a 'truthy' value.
Display 'Score is evaluated as truthy.' if 'score' is considered 'truthy'.

Step 7: Declare a variable named 'username' of type 'string' and assign it the value '' (empty string).

Step 8: Use an 'if' statement to check if 'username' has a value.
Display 'Username is available.' if 'username' has a value.

Step 9: Use an 'if-else' statement to check if 'username' is evaluated as a 'falsy' value.
Display 'Username is evaluated as falsy.' if 'username' is considered 'falsy'.

Step 10: Declare a variable named 'isAdmin' of type 'boolean' and assign it the value 'false'.

Step 11: Use an 'if-else' statement to check if 'isAdmin' is evaluated as a 'truthy' value.
Display 'isAdmin is evaluated as truthy.' if 'isAdmin' is considered 'truthy'.

Step 12: Use an 'if' statement to check if 'isAdmin' is 'false'.
Display 'isAdmin is false.' if 'isAdmin' has the value 'false'.*/

let age: number = 10;

for (let i = 1; i <= age; i++) {
  console.log(i);
}

if (age > 18) {
    console.log("You are old enough.")
}

let score: number = 0;

if (score !== 0) {
    console.log("Score is available.")
}

if (score) {
    console.log("Score is evaluated as truthy.")
}

let username: string = "";

if (username) {
    console.log("Username is available.")
} else {
    console.log("Username is evaluated as falsy.")
}

let isAdmin: boolean = false;

if (isAdmin) {
    console.log("isAdmin is evaluated as truthy.")
} else {
    console.log("isAdmin is false.")
}

function drawChristmasTree(n: number): void {
  const tree =
      `             *
            ***
           *****
          *******
         *********
             *
             *
             *
             *
             *`
    if (n === 5) {
        console.log(tree);
    }
}

drawChristmasTree(5);