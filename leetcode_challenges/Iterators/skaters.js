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

const getActiveSkateboarders = (skateboadersArray) => {
  const activeSkateboarders = skateboadersArray.filter(skateboarder => skateboarder.retired === false)
    console.log('getActiveSkateboarders', activeSkateboarders)
  const activeSkaterNames = activeSkateboarders.map(skateboarder => skateboarder.name)
    console.log('activeSkaterNames', activeSkaterNames)
    return activeSkaterNames
}
console.log(getActiveSkateboarders(skateboarders))

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

const getActiveSkateboardersAppend = (skatebordersArray) => {
  const activeSkateboardersAppend = skatebordersArray.filter(skateboarder => skateboarder.retired === false)
    console.log("activeSkateboardersAppend", activeSkateboardersAppend)
  const skateboardersWithAppend = activeSkateboardersAppend.map(skateboarder => skateboarder.tricksLanded < 10 ? `${skateboarder.name}(needs practice)` : skateboarder.name)
    console.log('skateboardersWithAppend', skateboardersWithAppend)
    return skateboardersWithAppend
}
console.log(getActiveSkateboardersAppend(skateboarders))