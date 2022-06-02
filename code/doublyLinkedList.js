class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyList {
    constructor(value) {
        const newNode  = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode
        this.length++;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.prev = newNode
        this.head = newNode;
        this.length++;
    }

    insert(index, value) {
        let currentNode = this.head;
        let count = 0;
        if(index == 0) {
            this.prepend(value)
            return;
        }
        else if(index >= this.length) {
            this.append(value)
            return;
        }
        else {
            while(count !== index-1) {
                currentNode = currentNode.next;
                count++;
            }
            const nextHold = currentNode.next;
            const newNode = new Node(value);
            currentNode.next = newNode;
            newNode.prev = currentNode;
            newNode.next = nextHold;
            nextHold.prev = newNode;
            this.length++
        }
    }

    remove(index) {
        if(index == 0) {
            this.head = this.head.next;
            this.head.prev = null;    
        }
        else {
            let count = 0;
            let currentNode = this.head;
            while(count != index-1) {
                currentNode = currentNode.next;
                count++;
            }
            const nextHold = currentNode.next.next;
            currentNode.next = nextHold
            nextHold.prev = currentNode;              
        }
        this.length--; 
    }

    printAllNodes() {
        let currentNode = this.head;
        while(currentNode != null) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    }
}


//--------------------MAIN---------------------

const list = new DoublyList(5);
list.prepend(13);
list.insert(1,10)
list.append(56);
list.insert(1,43);
list.prepend(21)
list.printAllNodes();
