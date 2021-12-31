const LinkedList = require('./linkedlist');

test('tests the last value == c', ()=>{
    const ll = new LinkedList();
    ll.insert('a');
    ll.insert('b');
    ll.insert('c');
    let actual = ll.head.next.next.value;
    let expected = 'a';
    expect(actual).toBe(expected);
});

test(`expects output like "{3} -> {2} -> {1} -> null"`, ()=>{
    const ll = new LinkedList();
    ll.insert(1);
    ll.insert(2);
    ll.insert(3);
    let actual = ll.show();
    let expected = `{3} -> {2} -> {1} -> null`
    expect(actual).toBe(expected);
});