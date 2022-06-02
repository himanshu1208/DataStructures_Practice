class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        };
        this.tail = this.head;
        this.length = 1;

    }
    append(value) {
        const newNode = new Node(value);  // {value: value, next: null}
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    insert(index, value) {
        let count = 0;
        var currentNode = this.head;

        while(count != index) {
            currentNode = currentNode.next;
            count++;
        }

        const newNode = new Node(value);



    }

    printList() {
       const list = [];
       var currentNode = this.head;
       while(currentNode !== null) {
           list.push(currentNode.value);
           currentNode = currentNode.next;
       }
       console.log(list)
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

/*-----------------MAIN---------------------*/

const myList = new LinkedList(10);
myList.append(5);
myList.append(7);
myList.prepend(14);
myList.printList();