const Stack = require('./stack');


test('can instantiate an empty stack', ()=>{
    let s = new Stack();
    let actual = s.top;
    let expected = null;
    expect(actual).toBe(expected);
});

test('can push value into stack', ()=>{
    const s = new Stack();
    s.push('a');
    let actual = s.top.value;
    let expected = 'a'
    expect(actual).toBe(expected);
});

test('can push value into stack', ()=>{
    const s = new Stack();
    s.push('a');
    s.push('b');
    s.push('c');
    let actual = s.top.value;
    let expected = 'c'
    expect(actual).toBe(expected);
});