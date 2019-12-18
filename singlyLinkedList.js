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
}