class Stack {
    constructor() {
        this.stack = [];
    }

    push(value) {
        this.stack.push(value); // Pushes the value to the stack top
    }

    top() {
        return this.stack[this.stack.length - 1]; // Returns the element at the top of the stack
    }

    pop() {
        return this.stack.pop(); // Removes and returns the top element of the stack
    }

    isEmpty() {
        return this.stack.length === 0; // Checks if the stack is empty
    }
}



const CheckForBalancedBracketsInAnExpression =()=>{
  
}
