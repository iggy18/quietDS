const { nullableTypeAnnotation } = require("@babel/types");

class Node{
    constructor(value=null){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(value){
        this.top = null;
    }
    push(value){
        if(this.isEmpty()){ 
            this.top = new Node(value);
        } else {
            let newNode = new Node(value);
            newNode.next = this.top;
            this.top = newNode;
        }
    }
    pop(){
        if(this.isEmpty()){
            throw new Error('this stack is empty');
        } else {
            let popedVal = this.top.value;
            this.top = this.top.next;
            return popedVal;
        }
    }
    peek(){
        if(this.isEmpty()) {
            throw new Error('this stack is empty');
        } else {
            return this.top.value;
        }
    }
    isEmpty(){
        if (this.top === null){
            return true;
        } else {
            return false;
        }
    }
}

module.exports = Stack;