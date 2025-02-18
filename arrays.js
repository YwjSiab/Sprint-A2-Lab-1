// Array Declaration and Initialization
// Declaring an array with five different animal names
const animals = ['Dog', 'Cat', 'Elephant', 'Lion', 'Giraffe'];
console.log('Initial array:', animals);

// Using Array Methods

// This method is used to append a new element to the end of the array.
animals.push('Tiger');
console.log('After push:', [...animals]);

// This method removes the last element from the array and returns it.
animals.pop();
console.log('After pop:', [...animals]);

// This method removes the first element from the array and shifts all other elements to a lower index.
animals.shift();
console.log('After shift:', [...animals]);

// This method adds a new element to the start of the array and shifts existing elements to a higher index.
animals.unshift('Zebra');
console.log('After unshift:', [...animals]);

// This method creates a shallow copy of a portion of the array without modifying the original array.
const slicedAnimals = animals.slice(1, 3); // Copies elements from index 1 to 2 (end index not included)
console.log('After slice:', [...slicedAnimals]);
