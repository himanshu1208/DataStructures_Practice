const { Console } = require("console");

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.length = 0;
    }
    enqueue(value) {
        const newNode = new Node(value);
        if(this.length === 0) {
            this.front = newNode;
            this.rear = this.front;
        }
        else {
            this.rear.next = newNode;
            this.rear = newNode;
        }      
        return ++this.length;
    }

    dequeue() {
        if(this.length === 0) return "Queue is Empty";
        const dequeueNode = this.front;
        this.front = this.front.next;
        this.length--;
        return dequeueNode;
    }

    peek() {
        if(this.length === 0) return "Queue is Empty";
        return this.front;
    }
}

//--------------------MAIN--------------------

const Q = new Queue();
console.log(Q.enqueue("Google"));
console.log(Q.enqueue("Amazon"));
console.log(Q.enqueue("Apple"));
console.log(Q.peek());
console.log(Q);
console.log(Q.dequeue());
console.log(Q.dequeue());
console.log(Q.peek());
