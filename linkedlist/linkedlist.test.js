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

test('should add last given value to the end of the linked list', ()=>{
    const ll = new LinkedList();
    ll.insert(1);
    ll.insert(2);
    ll.addToEnd(3);
    let actual = ll.show();
    let expected = `{2} -> {1} -> {3} -> null`;
    expect(actual).toBe(expected);
});

test('should work even if it is the first node', ()=>{
    const ll = new LinkedList();
    ll.addToEnd(3);
    let actual = ll.show();
    let expected = `{3} -> null`;
    expect(actual).toBe(expected);
});

test('should reverse Linked list', ()=>{
    const ll = new LinkedList();
    ll.insert(1);
    ll.insert(2);
    ll.insert(3);
    ll.reverse();
    let actual = ll.show();
    let expected = `{1} -> {2} -> {3} -> null`;
    expect(actual).toBe(expected);
});

test('should zip two linked lists of equal length together', ()=>{
    const lx = new LinkedList();
    const lz = new LinkedList();

    // lx == C -> B -> A -> null
    lx.insert('a');
    lx.insert('b');
    lx.insert('c');

    // lz == F -> E -> D -> null
    lz.insert('d');
    lz.insert('e');
    lz.insert('f');

    // lxz  == c -> f -> b -> e -> a -> d -> null
    lx.zipLinkedList(lz);

    let actual = lx.show()
    let expected = '{c} -> {f} -> {b} -> {e} -> {a} -> {d} -> null';
    expect(actual).toBe(expected);
});


test('should zip two linked lists of unequal length together', ()=>{
    const lx = new LinkedList();
    const lz = new LinkedList();

    // lx == C -> B -> A -> Y -> Z ->null
    lx.insert('z');
    lx.insert('y');
    lx.insert('a');
    lx.insert('b');
    lx.insert('c');

    // lz == F -> E -> D -> null
    lz.insert('d');
    lz.insert('e');
    lz.insert('f');

    // lxz  == c -> f -> b -> e -> a -> d -> null
    lx.zipLinkedList(lz);

    let actual = lx.show();
    let expected = '{c} -> {f} -> {b} -> {e} -> {a} -> {d} -> {a} -> {d} -> null';
    expect(actual).toBe(expected);
});