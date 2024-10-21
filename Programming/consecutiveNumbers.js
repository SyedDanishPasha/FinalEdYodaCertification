function consecutiveNumbers(N, marks) {
    // Sort the marks
    marks.sort((a, b) => a - b);
    
    // Check for consecutive marks
    for (let i = 1; i < N; i++) {
        if (marks[i] !== marks[i - 1] + 1) {
            return 0; 
        }
    }
    return 1; 
}

// Function to handle user input
function getUserInput() {
    const N = parseInt(prompt("Enter the number of students:"));
    const marks = [];
    for (let i = 0; i < N; i++) {
        const mark = parseInt(prompt(`Enter mark for student ${i + 1}:`));
        marks.push(mark);
    }
    const result = consecutiveNumbers(N, marks);
    console.log(`Result for the given marks: ${result}`); // Output: 1 or 0
}
getUserInput();
