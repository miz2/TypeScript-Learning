// The Record<K, T> utility type is used to construct a type with a set of properties K of a given type T.
var allUsers = {
    'abc123': { id: 'abc123', name: 'John Doe' },
    'xyz789': { id: 'xyz789', name: 'Jane Doe' },
};
console.log(allUsers);
console.log(allUsers['abc123']);
