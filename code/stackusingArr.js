class Stack {
    constructor(size) {
        this.size = size;
        this.array = new Array(size);
        this.length = 0;
    }

    push(value) {
        if(this.length === this.size) return "Stack OverFlow";
        this.array[this.length] = value;
        this.length++
    }

    pop() {
        if(this.length === 0) return "Stack UnderFlow";
        const poppedValue = this.array[this.length-1];
        this.array[this.length-1] = null;
        this.length--;
        return poppedValue;
    }

    peak() {
        if(this.length === 0) return "Satck is Empty";
        return this.array[this.length-1];
    }
}

//-------------MAIN----------------

const stack = new Stack(4);
console.log(stack.peak());
stack.push(4);
stack.push(5);
stack.push(9);
stack.push(10);
console.log(stack.push(11));
console.log(stack);
console.log(stack.peak());
stack.pop();
console.log(stack.peak());
