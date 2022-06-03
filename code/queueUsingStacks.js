class MyQueue {
    constructor() {
        this.stack = [];
        this.length = 0;
    }
        
    pop() {
        const front = this.stack[this.length-1];
        this.stack.pop();
        this.length--;
        return front;
        
    }
    
    empty() {
        this.length === 0? true:false;
    }
    
    peek() {
        return this.stack[this.length-1];
    }

    push(value) {
        const dummy = [];
        if(this.length === 0) {
            this.stack.push(value);
        }
        else {
            while(this.stack.length != 0) {
                const a = this.stack.pop();
                dummy.push(a);
            }
            this.stack.push(value);

            while(dummy.length != 0) {
                const a = dummy.pop();
                this.stack.push(a);
            }
        }
        this.length++;    
    }
}


const q = new MyQueue();
q.push(2);
q.push(7);
q.push("Himanshu");
q.pop();

console.log(q.peek())