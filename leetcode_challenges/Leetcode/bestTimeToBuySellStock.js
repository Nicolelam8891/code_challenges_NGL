/* 
121. Best Time to Buy and Sell Stock

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
*/

var maxProfit = function(prices) {
  let max= 0; //store max profit
  let min = Number.MAX_VALUE; //store minimum price we have seen so far
      //using this to find the lowest price at which to buy the stock 
      //max numberic value 
      //start with the highest possible value and find the minimum price to buy the stock. 
      //ensure that the next number will be lower 
  //Loop 
  for (let i = 0; i < prices.length; i++) {
      //if the current price is less than the min, we want the minimum price. 
      //Trying to find a lower price.
    if (prices[i] < min) {
          min = prices[i]
      //if the difference between the current price and minimum price is greater than max profit, we update max profit.
    } else if (prices[i] - min > max) {
        max = prices[i] - min;
    }
  }
  //return max profit
  return max;
};