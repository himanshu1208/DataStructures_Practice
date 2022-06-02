class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null
        this.bottom = null
        this.length = 0;
    }

    push(value) {    
        const newEl = new Node(value);
        if(this.length === 0) this.bottom = newEl;
        newEl.next = this.top;
        this.top  = newEl;
        ++this.length;   
    }

    pop() {
        if(!this.top) return "Stack Underflow";
        else if(this.bottom === this.top) this.bottom = null;
        const poppedValue = this.top;
        this.top = this.top.next;
        this.length--;
        return poppedValue;
    }

    peak() {
        if(this.length == 0) return "Stack is Empty"
        return this.top;
    }
}

//---------------MAIN-----------------

const stack = new Stack();
console.log(stack.peak());
stack.push(9);
stack.push(11);
stack.push(16);
console.log(stack.peak());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack);
