type Input=number|string;
function firstElem(arr:Input[]){
    return arr[0];
}
const val=firstElem(["sanju","samson"])
console.log(val);
// but there is a problem in this way :below method is not allowed 
// console.log(val.toUpperCase());
// ideally we must either have strings or number not both otherwiseit is like js only 
// hence we need generics if we do not want a bad syntax for the same 

// Generics enable you to create components that work with any data type while still providing compile-time type safety
function firstElem1<T>(arr: T[]): T {
    return arr[0];
}

// create multiple versions for same 
// Example 1: With strings
const val1 = firstElem1(["sanju", "samson"]);
console.log(val1); // Output: sanju
console.log(val1.toUpperCase()); // Works because `val1` is inferred as a string

// Example 2: With numbers
const val2 = firstElem1([10, 20, 30]);
console.log(val2); // Output: 10
console.log(val2.toFixed(2)); // Works because `val2` is inferred as a number

// Example 3: Explicitly specify the type (if needed)
const val3 = firstElem1<number>([100, 200, 300]);
console.log(val3); // Output: 100