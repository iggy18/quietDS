const { S } = require('xmlchars/xml/1.0/ed5');
const Stack = require('./stack');


test('STACK: can instantiate an empty stack', ()=>{
    let s = new Stack();
    let actual = s.top;
    let expected = null;
    expect(actual).toBe(expected);
});

test('PUSH: can push node into stack', ()=>{
    const s = new Stack();
    s.push('a');
    let actual = s.top.value;
    let expected = 'a'
    expect(actual).toBe(expected);
});

test('PUSH: can push multiple nodes into stack', ()=>{
    const s = new Stack();
    s.push('a');
    s.push('b');
    s.push('c');
    let actual = s.top.value;
    let expected = 'c'
    expect(actual).toBe(expected);
});

test('POP: should throw error when poping an empty stack', ()=>{
    const s = new Stack();
    s.push('a');
    s.push('b');
    s.push('c');
    s.pop();
    s.pop();
    s.pop();
    expect(() => {
        s.pop();
    }).toThrow('this stack is empty');
});

test('POP: can push multiple values into stack, and pop one to get the second to last entered value', ()=>{
    const s = new Stack();
    s.push('a');
    s.push('b');
    s.push('c');
    s.pop();
    let actual = s.top.value;
    let expected = 'b';
    expect(actual).toBe(expected);
});

test('POP: can push multiple values into stack, and pop one and get the value of the popped node', ()=>{
    const s = new Stack();
    s.push('a');
    s.push('b');
    s.push('c');
    let actual = s.pop().value;
    let expected = 'c';
    expect(actual).toBe(expected);
});

test('ISEMPTY: should be able to push multiple node and pop them all and end up with empty stack', ()=>{
    const s = new Stack();
    s.push('a');
    s.push('c');
    s.push('b');
    s.pop();
    s.pop();
    s.pop();
    let actual = s.isEmpty();
    let expected = true;
    expect(actual).toBe(expected);
});

test('ISEMPTY: should return false if stack is not empty', ()=>{
    const s = new Stack();
    s.push('a');
    s.push('c');
    s.push('b');
    s.pop();
    s.pop();
    let actual = s.isEmpty();
    let expected = false;
    expect(actual).toBe(expected);
});

test('PEEK: should raise exception when called on empty stack', ()=>{
    const s = new Stack();
    expect(() => {
        s.peek();
    }).toThrow('this stack is empty');
});

test('PEEK: should return value of node at top of stack', ()=>{
    const s = new Stack();
    s.push('this is the value');
    let actual = s.peek();
    let expected = 'this is the value';
    expect(actual).toBe(expected);
});

test('PEEK: should not remove the node', ()=>{
    const s = new Stack();
    s.push('this is the value')
    s.peek();
    let actual = s.isEmpty();
    let expected = false;
    expect(actual).toBe(expected);
});