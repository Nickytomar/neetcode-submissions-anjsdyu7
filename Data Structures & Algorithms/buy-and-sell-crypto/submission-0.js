class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {//[10,1,5,6,7,1]
        let maxProfit = 0;
        let min = Infinity;

        for(let i=0; i<prices.length; i++){
            if(min > prices[i]){
                min = prices[i];
            }else{
              let  profit = prices[i] - min;
                if(profit > maxProfit){
                    maxProfit = profit
                }
            }

        }

        return maxProfit;
    }
}
