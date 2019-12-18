// This is the code for a Singly Linked List

class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        var node = new Node(val);
        if (this.head === null){
            this.tail = node;
            this.head = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    pop(){
        if (!this.head) return undefined;
        let current = this.head
        let newTail = current
        while (current.next){
            console.log(this.currentNode);
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null 
        console.log(`Popped: `, current);
        console.log(`New Tail: `, this.tail);
        return current;
    }
}

let sLL = new SinglyLinkedList()
sLL.push(1)
sLL.push(2)
sLL.push(3)
sLL.pop()