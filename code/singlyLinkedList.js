class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value); // {value: value, next: null}
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

    while (count != index - 1) {
      currentNode = currentNode.next;
      count++;
    }

    const newNode = new Node(value);
    const nextHold = currentNode.next;
    newNode.next = nextHold;
    currentNode.next = newNode;
    this.length++;
  }

  printList() {
    const list = [];
    var currentNode = this.head;
    while (currentNode !== null) {
      list.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(list);
  }

  reverse() {
    var currentNode = this.head;
    var prevNewNode = {};
    var count = 0;
    while (currentNode != null) {
      const newNode = new Node(currentNode.value);
      if (count > 0) {
        newNode.next = prevNewNode;
      }
      prevNewNode = newNode;
      if (!currentNode.next) this.tail = currentNode;
      currentNode = currentNode.next;
      count++; //3
    }
    this.head = prevNewNode;
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
myList.reverse();
myList.printList();

//14->10->46->5->7
