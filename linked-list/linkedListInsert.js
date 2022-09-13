class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
    }

    appendNode(value) {
        const newNode = new Node(value)

        this.tail.next = newNode;
        this.tail = newNode;
    }

    prependNode(value) {
        const newNode = new Node(value)

        newNode.next = this.head,
            this.head = newNode;
    }

    insertAfter(index, value) {
        const newNode = new Node(value)

        const leader = this.findLeader(index - 1)

        newNode.next = leader.next;
        leader.next = newNode.next;

        // return this;
    }

    deleteAfter(index) {
        const leader = this.findLeader(index - 1);
        leader.next = leader.next.next;

        return this;
    }

    findLeader(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }

        return currentNode;
    }
}

const myLL = new LinkedList(10)
// myLL.appendNode(20)
myLL.appendNode(20)