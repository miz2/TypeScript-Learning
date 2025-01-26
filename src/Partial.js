;
var updateUser = function (id, updates) {
    console.log("Updating user with ID: ".concat(id));
    console.log('Updates:', updates);
};
var userUpdates = {
    name: 'John Doe',
    email: 'john.doe@example.com',
};
updateUser('123', userUpdates);
// Another example with partial updates
var partialUpdates = {
    age: '30',
};
updateUser('124', partialUpdates);
