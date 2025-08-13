// Function to print current date using built-in method
function printCurrentDate() {
    const today = new Date();
    console.log("Current Date:", today.toDateString());
}

// Function to generate and print a random set of numbers
function printRandomNumbers(count) {
    console.log(`\n${count} Random Numbers:`);
    for (let i = 0; i < count; i++) {
        let randomNum = Math.random() * 100; // between 0 and 100
        console.log(`Random #${i + 1}: ${randomNum.toFixed(2)}`);
    }
}

// Function to generate a random number and round it using switch statement
function printRoundedRandomNumber() {
    let randomNum = Math.random() * 10; // between 0 and 10
    let rounded = Math.round(randomNum);

    console.log(`\nOriginal Random Number: ${randomNum}`);
    console.log(`Rounded Number: ${rounded}`);

    switch (rounded) {
        case 0:
        case 1:
        case 2:
            console.log("Low number");
            break;
        case 3:
        case 4:
        case 5:
            console.log("Medium number");
            break;
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
            console.log("High number");
            break;
        default:
            console.log("Unexpected value");
    }
}

// Run the functions
printCurrentDate();
printRandomNumbers(5);
printRoundedRandomNumber();
