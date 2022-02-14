
/**
 * Method takes in an array of stock prices in order,
 * then returns the maximum possible profit based on
 * the restriction that a stock must be bought before 
 * it can be sold.
 * @param {array of numbers} prices 
 * @returns 
 */
export const maximumProfit = (prices) => {
    if (prices.length < 2) return 0;

    let profit = prices[1] - prices[0];
    
    for (let i = 0; i < prices.length-1; i++) {
        for (let j = i+1; j < prices.length; j++) {
            let temp = prices[j] - prices[i];
            if (temp > profit) {
                profit = temp;
            }
        }
    }
    if (profit < 0) return 0;
    return profit
}