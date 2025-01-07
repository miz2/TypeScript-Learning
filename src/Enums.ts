// Enum for directions
// Enums (short for enumerations) in TypeScript are a feature that allows you to define a set of named constants.
// The concept behind an enumeration is to create a human-readable way to represent a set of constant values, which might otherwise be represented as numbers or strings.
enum Direction {
    Up,
    Down,
    Right,
    Left,
}

// Function to move in a specific direction
function move(direction: Direction): void {
    switch (direction) {
        case Direction.Up:
            console.log("Moving Up 🚶‍♂️");
            break;
        case Direction.Down:
            console.log("Moving Down 🚶‍♂️");
            break;
        case Direction.Right:
            console.log("Moving Right ➡️");
            break;
        case Direction.Left:
            console.log("Moving Left ⬅️");
            break;
        default:
            console.log("Invalid direction!");
    }
}

// Example usage
move(Direction.Up);   // Output: Moving Up 🚶‍♂️
move(Direction.Right); // Output: Moving Right ➡️

// Access enum values
console.log(Direction.Up);   // Output: 0
console.log(Direction.Right); // Output: 2

// Reverse mapping of enums
console.log(Direction[0]);   // Output: Up
console.log(Direction[2]);   // Output: Right

// in express we can use it as :
// enum ResponseStatus {
//     Success = 200,
//     NotFound = 404,
//     Error = 500
// }

// app.get("/', (req, res) => {
//     if (!req.query.userId) {
// 			res.status(ResponseStatus.Error).json({})
//     }
//     // and so on...
// 		res.status(ResponseStatus.Success).json({});
// })