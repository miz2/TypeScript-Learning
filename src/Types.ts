// Define a union type
type StringOrNumber = string | number;

// Function to print an ID that can either be a string or a number
function printId(id: StringOrNumber): void {
    console.log(`ID: ${id}`);
}

// Using the printId function
printId(101); // ID: 101
printId("202"); // ID: 202

// Now demonstrating intersection types

// Define a type for a Person
type Person1 = {
    name: string;
    startDate: Date;
};

// Define a type for a Manager
type Manager = {
    name: string;
    department: string;
};

// Create an intersection type that combines Person1 and Manager
type TeamLead = Person1 & Manager;

// Create an object of type TeamLead
const teamLead: TeamLead = {
    name: "Mizaan",
    startDate: new Date(),
    department: "Software Development",
};

// Log the teamLead object
console.log("Team Lead Details:");
console.log(`Name: ${teamLead.name}`);
console.log(`Start Date: ${teamLead.startDate}`);
console.log(`Department: ${teamLead.department}`);

// Example usage of the TeamLead type
function printTeamLeadDetails(teamLead: TeamLead): void {
    console.log(
        `Team Lead ${teamLead.name} works in the ${teamLead.department} department and started on ${teamLead.startDate.toDateString()}.`
    );
}

// Print team lead details using the function
printTeamLeadDetails(teamLead);
