const weather = [
  {
      location: 'Denver, Colorado',
      type: 'clear',
      humidity: 59,
      temperature: {
          high: 47,
          low: 33
      }
  },
  {
      location: 'New York, New York',
      type: 'cloudy',
      humidity: 80,
      temperature: {
          high: 43,
          low: 37
      }
  },
  {
      location: 'Atlanta, Georgia',
      type: 'sunny',
      humidity: 51,
      temperature: {
          high: 50,
          low: 39
      }
  },
  {
      location: 'Portland, Oregon',
      type: 'cloudy',
      humidity: 84,
      temperature: {
          high: 49,
          low: 38
      }
  },
  {
      location: 'New Orleans, Louisiana',
      type: 'sunny',
      humidity: 71,
      temperature: {
          high: 66,
          low: 48
      }
  },
  {
      location: 'Boston, Massachusetts',
      type: 'cloudy',
      humidity: 71,
      temperature: {
          high: 40,
          low: 30,
      },
  },
  {
      location: 'Miami, Florida',
      type: 'party cloudy',
      humidity: 57,
      temperature: {
          high: 75,
          low: 56,
      },
  },
  {
      location: 'Phoenix, Arizona',
      type: 'cloudy',
      humidity: 76,
      temperature: {
          high: 70,
          low: 54,
      },
  },
  {
      location: 'Anchorage, Alaska',
      type: 'cloudy',
      humidity: 70,
      temperature: {
          high: 20,
          low: 8,
      },
  },
  {
      location: 'Raleigh, North Carolina',
      type: 'mostly sunny',
      humidity: 44,
      temperature: {
          high: 56,
          low: 37,
      },
  }
];

/* EXAMPLE 1 
return an array of all the average temperatures. Eg:
[ 40, 40, 44.5, 43.5, 57, 35, 65.5, 62, 14, 46.5 ] */

const getAverageTemps = () => {
  return weather.map(item => {
    const avgTemps = ( item.temperature.high + item.temperature.low ) / 2 
    return avgTemps
  })

}
console.log(getAverageTemps())

/* EXAMPLE 2 */
/* Return an array of sentences of the locations that are sunny
and mostly sunny. Include the location and weather type. 
Eg: 
[ 'Atlanta, Georgia is sunny.',
'New Orleans, Louisiana is sunny.',
'Raleigh, North Carolina is mostly sunny.' ] 
/*

/*Pseudocode
Goal: return ARRAY of sentences of LOCATIONS that are: 
  1. sunny
  2. mostly sunny
  3. have location, weather type 
Input: array of objects
Output: array of a string
1. map through location and type with string interpolation
  a. ${weather.location} is ${type.location}
2. condition
  a. if type contains "sunny" & "mostly sunny" -> return into array
3. return function
*/

const getSunnyLocations = (weatherArray) => {
  const sunnyLocations = weatherArray.filter(weather => weather.type === 'sunny' || weather.type === 'mostly sunny') 
  const weatherSentence = sunnyLocations.map((weather) => {
    return `${weather.location} is ${weather.type}`
  })
    return weatherSentence
}

console.log(getSunnyLocations(weather))