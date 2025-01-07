interface User{
    firstName: string;
	lastName: string;
	email: string;
	age: number;
}
function isLegal2(user: User) {
    if (user.age > 18) {
        return true
    } else {
        return false;
    }
}

const user1: User = {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    age: 20,
};

const user2: User = {
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    age: 17,
};

// Use the isLegal2 function
console.log(`${user1.firstName} is legal: ${isLegal2(user1)}`); 
console.log(`${user2.firstName} is legal: ${isLegal2(user2)}`); 
