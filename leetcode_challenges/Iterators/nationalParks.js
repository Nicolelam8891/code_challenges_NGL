const nationalParks = [
  {
    name: "Rocky Mountain",
    visited: true,
    location: "Colorado",
    activities: [
      "hiking",
      "shoeshoing",
      "camping",
      "fishing"
    ]
  },
  {
    name: "Yellowstone",
    visited: false,
    location: "Wyoming",
     activities: [
      "hiking",
      "boating",
      "watching wildlife",
    ],
  },
  {
    name: "Glacier",
    visited: false,
    location: "Montana",
     activities: [
      "hiking",
      "boating",
      "cross-country skiing",
    ],
  },
  {
    name: "Acadia",
    visited: true,
    location: "Maine",
     activities: [
      "hiking",
      "fishing",
      "swimming",
      "bird watching"
    ],
  },
  {
    name: "Zion",
    visited: true,
    location: "Utah",
     activities: [
      "hiking",
      "canyoneering",
      "backpacking",
      "rock climbing"
    ],
  },
  {
    name: "Everglades",
    visited: false,
    location: "Florida",
     activities: [
      "hiking",
      "boating",
      "fishing",
      "bird watching"
    ],
  }
];

/* EXAMPLE 1 
Return an object containing the names of which parks I need to visit and the ones I have already visited eg:
     {
       parksToVisit: ["Yellowstone", "Glacier", "Everglades"],
       parksVisited: ["Rocky Mountain", "Acadia", "Zion"]
    }*/ 

/* Example 2
Return an array of objects where the key is the state and the value is its National Park
 eg: [ { Colorado: 'Rocky Mountain' },
 { Wyoming: 'Yellowstone' },
 { Montana: 'Glacier' },
 { Maine: 'Acadia' },
 { Utah: 'Zion' },
 { Florida: 'Everglades' } ] */

/* Example 3 
/* Return an array of all the activities I can do
     in a National Park. Make sure to exclude duplicates. eg:
     [ 'hiking',
       'shoeshoing',
       'camping',
       'fishing',
       'boating',
       'watching wildlife',
       'cross-country skiing',
       'swimming',
       'bird watching',
       'canyoneering',
       'backpacking',
       'rock climbing' ] */ 