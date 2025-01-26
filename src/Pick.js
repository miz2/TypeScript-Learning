// Function to display user profile
var displayUserProfile = function (user) {
    console.log("Name: ".concat(user.name, ", Email: ").concat(user.email));
};
// Example Usage
var fullUser = {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    createdAt: new Date('2023-01-01'),
};
// Creating a `UserProfile` object by extracting only the required properties
var userProfile = {
    name: fullUser.name,
    email: fullUser.email,
};
// Passing the `UserProfile` object to the function
displayUserProfile(userProfile);
