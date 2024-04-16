/* Level One:
// You are managing a list of skateboarders and their retirement status. Given the following data:

// Write a function called getActiveSkateboarders that takes the array of skateboarder objects as input and returns an array containing the names of skateboarders who are still active in the skateboarding scene (not retired).

// Example:
  // returns ['Tony Hawk', 'Rodney Mullen', 'Aori Nishimura', 'Elissa Steamer']
*/ 

let skateboarders = [
  { name: 'Tony Hawk', retired: false, tricksLanded: 15 },
  { name: 'Leticia Bufoni', retired: true, tricksLanded: 8 },
  { name: 'Rodney Mullen', retired: false, tricksLanded: 20 },
  { name: 'Aori Nishimura', retired: false, tricksLanded: 12 },
  { name: 'Nyjah Huston', retired: true, tricksLanded: 10 },
  { name: 'Elissa Steamer', retired: false, tricksLanded: 6 },
  { name: 'Ryan Sheckler', retired: true, tricksLanded: 5 },
];


/* Problem:
Modify the getActiveSkateboarders function from Level One to also include active skateboarders who have landed fewer than 10 tricks. Append (needs practice) to their names.

getActiveSkateboarders(skateboarders) 
  now returns: [
   'Tony Hawk',
   'Rodney Mullen',
   'Aori Nishimura',
   'Elissa Steamer(needs practice)'
 ]
*/ 
