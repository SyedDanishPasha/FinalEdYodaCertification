function postfixExpression(expression) {
    const stack = [];

    for (const char of expression) {
        if (!isNaN(char)) {
            // Check if the character is a digit, push it onto the stack
            stack.push(parseInt(char, 10));
        } else {
            // If The character is an operator
            const b = stack.pop(); 
            const a = stack.pop(); 
            let result;
            switch (char) {
                case '+':
                    result = a + b;
                    break;
                case '-':
                    result = a - b;
                    break;
                case '*':
                    result = a * b;
                    break;
                case '/':
                    result = Math.floor(a / b); 
                    break;
                default:
                    throw new Error(`Unknown operator: ${char}`);
            }
            stack.push(result); 
        }
    }
    return stack.pop();
}

// Function to handle user input
function getUserInput() {
    const input = prompt('Enter a postfix expression without spaces:');
    if (input) {
        try {
            const result = postfixExpression(input);
            console.log(`The postfix expression is: ${result}`);
        } catch (error) {
            console.error(error.message);
        }
    }
}

getUserInput();
