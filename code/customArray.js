class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    push(value) {
        this.data[this.length] = value;
        this.length++;
        return this.length;
    }

    pop () {
        var lastItem = this.data[this.length-1]
        delete this.data[this.length-1]
        return lastItem
    }

    delete(index) {
        for (var i=index;i<this.length;i++) {
            this.data[i] = this.data[i+1]
        }
        delete this.data[this.length-1]
        this.length--;
        return this.length;
    }

    print() {
        for (let i in this.data) {
            console.log(this.data[i])
        }
    }
}

const myArray = new MyArray();
console.log(myArray.get(0))
myArray.push(7)
myArray.push(8)
myArray.push(11)
console.log(myArray)
myArray.delete(1)
console.log(myArray)
myArray.print()

