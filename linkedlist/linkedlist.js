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
        //make a bucket to collect values
        //move down the list and get the value of each node and push it into the list
        //join all values in array to return as a string
        let valueArr = [];

        while(currentNode !== null){
            valueArr.push(`{${currentNode.value}} ->`);
            currentNode = currentNode.next;
        }
        let prettyList = valueArr.join(' ').toString();

        return `${prettyList} null`;
    }
}

const ll = new LinkedList();
ll.insert(1);
ll.insert(2);
ll.insert(3);
ll.show();

module.exports = LinkedList;