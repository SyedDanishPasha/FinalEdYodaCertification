function pairsCounting(points) {
    let count = 0;
    const N = points.length;

    for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
            if (points[i] > points[j]) {
                count++;
            }
        }
    }
    return count;
}

// Function to handle user input
function getUserInput() {
    const N = parseInt(prompt('Enter the number of students (N):'), 10);
    const pointsInput = prompt(`Enter the points scored by the ${N} students (comma-separated):`);
    const points = pointsInput.split(',').map(Number);
    if (points.length !== N) {
        console.error('The number of points provided does not match the number of students.');
        return;
    }
    const result = pairsCounting(points);
    console.log(`The number of pairs put in place: ${result}`);
}

getUserInput();
