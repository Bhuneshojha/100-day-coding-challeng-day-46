//          100 days of coding challenge ( DAY 46 )

// Question 01 
// ---Demonstrates using console.log() inside a loop to track variable values
for (let i = 1; i <=5; i++) {
    console.log(`iteration ${i}, i value:, i`); // --Logs the current iteration number and the value of i
}

// Question 02
// --Demonstrates using a try-catch block to handle errors
try {
    // intentionaly cause an error
    throw new Error("Something went wrong");
} catch (error) {
    console.log(error.message);
}
// **This code tries to execute a block that throws an error, and the catch block handles the error gracefully.

// Question 03
// --Sample code snippet for setting a breakpoint
console.log("Before breakupoint");
// --Set a breakpoint on the following line using your browser's developer tools
console.log(
    "This line has a breakpoint set on it in the browser's developer tools"
);
console.log("After breakpoit")  