// Define the User interface
interface User2 {
    firstName: string;
    lastName: string;
    age: number;
}

// Function to filter users who are 18 or older
function filterAdultUsers(users: User2[]): User2[] {
    return users.filter(user => user.age >= 18);
}

// Example usage
const users: User2[] = [
    {
        firstName: "Harkirat",
        lastName: "Singh",
        age: 21,
    },
    {
        firstName: "Raman",
        lastName: "Singh",
        age: 16,
    },
    {
        firstName: "Aman",
        lastName: "Verma",
        age: 25,
    }
];

// Filter and log the adult users
const adultUsers = filterAdultUsers(users);
console.log("Adult Users:");
adultUsers.forEach(user =>
    console.log(`${user.firstName} ${user.lastName}, Age: ${user.age}`)
);
