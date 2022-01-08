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
        if(!this.head){
            this.head = new Node(value);
            return;
        }
        let currentNode = this.head;
        while(currentNode.next !== null){
            currentNode = currentNode.next;
        }
        currentNode.next = new Node(value);
    }

    reverse(){
        if(!this.head){
            return false;
        }
        let prev = null;
        let current = this.head;
        while(current !== null){
            let temp = current.next;
            current.next = prev;
            prev = current;
            current = temp;
        }
        this.head = prev;
    }

    zipLinkedList(other){
        let thisHead = this.head;
        let otherHead = other.head;
        let leaderA = thisHead.next;
        let leaderB = otherHead.next;
        while(leaderA && leaderB){
            thisHead.next = otherHead;
            otherHead.next = leaderA;
            thisHead = leaderA;
            leaderA = leaderA.next;
            thisHead.next = leaderB;
            otherHead = leaderB;
            leaderB = leaderB.next;
        }
    }
}

module.exports = LinkedList;