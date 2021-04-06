//You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

var maxProfit = function (prices) {
  let highestProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      let difference = prices[j] - prices[i];
      if (prices[i] < prices[j] && difference > highestProfit) {
        highestProfit = difference;
        console.log(prices[i], prices[j], difference);
      }
    }
  }

  return highestProfit;
};
