// Function that handles events, restricted to the new type
var handleEvent = function (event) {
    console.log("Handling event: ".concat(event));
};
// Valid calls
handleEvent('scroll'); // OK
handleEvent('mousemove'); // OK
// Invalid call (uncommenting will cause an error)
// handleEvent('click'); // Error: 'click' is not assignable to type 'EventExcluded'
