class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{

    constructor(head=null){
        this.head = head;
    }

    insert(value){
        if(!this.head){
            this.head = new Node(value);
            return;
        } else {
            let previousHead = this.head;
            this.head = new Node(value);
            this.head.next = previousHead;
        }
    }

    show(){
        let currentNode = this.head;
        let valueArr = [];

        while(currentNode){
            valueArr.push(`{${currentNode.value}} ->`);
            currentNode = currentNode.next;
        }
        let prettyList = valueArr.join(' ').toString();

        return `${prettyList} null`;
    }

    addToEnd(value){
        let currentNode = this.head;
        while(currentNode.next !== null){
            currentNode = currentNode.next;
        }
        currentNode.next = new Node(value);
    }
}

module.exports = LinkedList;