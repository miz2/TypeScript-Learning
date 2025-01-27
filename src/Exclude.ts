// Define the original union type
type EventAllowed = 'click' | 'scroll' | 'mousemove';

// Create a new type excluding 'click'
type EventExcluded = Exclude<EventAllowed, 'click'>;

// Function that handles events, restricted to the new type
const handleEvent = (event: EventExcluded) => {
  console.log(`Handling event: ${event}`);
};

// Valid calls
handleEvent('scroll');    // OK
handleEvent('mousemove'); // OK

// Invalid call (uncommenting will cause an error)
// handleEvent('click'); // Error: 'click' is not assignable to type 'EventExcluded'
