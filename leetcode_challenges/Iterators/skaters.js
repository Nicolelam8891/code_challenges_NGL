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
  const skateboardersWithAppend = activeSkateboardersAppend.map(skateboarder => skateboarder.tricksLanded < 10 ? `${skateboarder.name}(needs practice)` : skateboarder.name)
    return skateboardersWithAppend
}
console.log(getActiveSkateboardersAppend(skateboarders))

/* Level Three:

 Problem:
 Write a function called categorizeSkateboarders that takes an array of skateboarder objects as input and returns an object with two properties: active and retired. The active property should contain an array of active skateboarders (including those who need practice), and the retired property should contain an array of retired skateboarders.

  returns 
 {
   active: [
   'Tony Hawk',
   'Rodney Mullen',
   'Aori Nishimura',
   'Elissa Steamer(needs practice)'
 ],
   retired: ['Leticia Bufoni', 'Nyjah Huston', 'Ryan Sheckler']
 }
 */

 const categorizeSkateboarders = (skatebordersArray) => {
  return skatebordersArray.reduce((acc, skateboarder) => {
    if (skateboarder.retired === true) {
      acc.retired.push(skateboarder.name)
    } else {
      if (skateboarder.tricksLanded < 10) {
        acc.active.push(`${skateboarder.name} (needs practice)`)
       } else {
          acc.active.push(skateboarder.name)
      }
    }
    return acc;
  }, {active: [], retired: []})
}
 console.log(categorizeSkateboarders(skateboarders))