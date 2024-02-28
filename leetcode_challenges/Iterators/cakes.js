const cakes = [
  {
    cakeFlavor: 'dark chocolate',
    filling: null,
    frosting: 'dark chocolate ganache',
    toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
    inStock: 15
  },
  {
    cakeFlavor: 'yellow',
    filling: 'citrus glaze',
    frosting: 'chantilly cream',
    toppings: ['berries', 'edible flowers'],
    inStock: 14
  },
  {
    cakeFlavor: 'white chiffon',
    filling: 'mint and sage drizzle',
    frosting: 'whipped sweet cream',
    toppings: ['mint', 'cranberry', 'edible flowers'],
    inStock: 0
  },
  {
    cakeFlavor: 'butter rum',
    filling: 'ginger cardamom swirl',
    frosting: 'spiced rum glaze',
    toppings: ['crystallized ginger', 'toasted sugar'],
    inStock: 9
  },
  {
    cakeFlavor: 'vanilla',
    filling: 'St Germaine',
    frosting: 'whipped cream',
    toppings: ['smoked sea salt', 'crystallized ginger', 'berries'],
    inStock: 21
  },
  {
    cakeFlavor: 'honey',
    filling: 'chocolate and cayenne',
    frosting: 'chocolate buttercream',
    toppings: ['smoked sea salt', 'toasted sugar'],
    inStock: 0
  }
];

/* Example 1: Return an array of objects that include just the flavor of the cake and how
much of that cake is in stock e.g.
     [
        { flavor: 'dark chocolate', inStock: 15 },
        { flavor: 'yellow', inStock: 14 },
        ..etc
     ] */

const getCakeAndStock = (cakeArray) => {
  const cakeAndStock = cakeArray.map((cake) => {
    return cakeObject = {
      flavor: cake.cakeFlavor, 
      inStock: cake.inStock,
    }
      })
      return cakeAndStock
    }
    console.log(getCakeAndStock(cakes))

/* Example 2: Return an array of only the cakes that are in stock
     e.g.
     [
       {
       cakeFlavor: 'dark chocolate',
       filling: null,
       frosting: 'dark chocolate ganache',
       toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
       inStock: 15
     },
     {
       cakeFlavor: 'yellow',
       filling: 'citrus glaze',
       frosting: 'chantilly cream',
       toppings: ['berries', 'edible flowers'],
       inStock: 14
     },
     ..etc
     ] */
     
//filter method's callback function is using an implicit return because it's a single expression and there are no curly braces surrounding the function body. 
     const getCakesInStock = (cakesArray) => {
      const cakesInStock = cakesArray.filter(cake => cake.inStock > 0) 
          return cakesInStock
    }
    console.log(getCakesInStock(cakes))
  
/* Example 3: Return the total amount of cakes in stock e.g. 59 */

/* Example 4: Return an array of all unique toppings (no duplicates) needed to bake every cake in the dataset e.g.
  --> ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc] */

/* Example 5: I need to make a grocery list. Please give me an object where the keys are each topping, and the values are the amount of that topping I need to buy e.g.
     {
        'dutch process cocoa': 1,
        'toasted sugar': 3,
        'smoked sea salt': 3,
        'berries': 2,
        ...etc
     }
     */ 