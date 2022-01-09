const { tsConstructorType } = require("@babel/types")

class Node{
    constructor(value=null){
        this.value = value;
        this.next = null;
    }
}


class Stack{
    constructor(){
        this.top = null;
    }
    //these are helper methods
    isAnemptyStack(){
        throw new Error('this stack is empty');
    }
    NewNodeIsTheNewTopOfTheStack(value){
        let newNode = new Node(value);
        newNode.next = this.top;
        this.top = newNode;
    }
    isTheRemovedNode(){
        let poppedNode = this.top;
        this.top = this.top.next;
        return poppedNode;
    }
    isTheNodeValue(){
        return this.top.value;
    }

    //these are the actaul normal methods in a stack;
    push(value){
        (!this.top) ? this.top = new Node(value) : this.NewNodeIsTheNewTopOfTheStack(value);
    }
    pop(){
        return (this.isEmpty()) ? this.isAnemptyStack() : this.isTheRemovedNode(); 
    }
    peek(){
        return (this.isEmpty()) ? this.isAnemptyStack() : this.isTheNodeValue();
    }
    isEmpty(){
        return (this.top) ? false : true;
    }
}

module.exports = Stack;