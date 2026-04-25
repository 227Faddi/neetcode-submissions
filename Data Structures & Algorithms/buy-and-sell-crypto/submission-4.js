class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */

    // receive an array of int
    // return an int representing the profit from the max
    // transaction i can do to be profitable
    // if i can't be profitable return 0

    // [10,1,5,6,7,1]
    //
    // 6

    // find the smallest entry point 
    // and the max exit point

    // entry point always smaller then exit point
    // have to pointers, left for entry, rigth for exit
    // loop into the array, and check if the entry point is lower than the exit point

    // if exit point is smaller then swift the pointers forwards
    // if the next exit point is bigger than the entry, then check the next exit point to see if it's bigger
    // than the current or smaller and change the pointers in base of that


    maxProfit(prices) {
        let max = 0
        let l = 0
        let r = 1

        while(r < prices.length){
            if(prices[l] < prices[r]){
                const profit = prices[r] - prices[l]
                max = Math.max(max, profit)
            } else {
                l = r
            }

            r++
        } 

        return max
    }
}
