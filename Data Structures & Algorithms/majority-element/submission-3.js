class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    // receive an array of nums
    // return the num that appears more than n / 2

    // Input: nums = [5,5,1,1,1,5,5]
    // Output: 5

    // count the occurences of each number
    // save them in an hashmap
    // return the value that appears the most
    
    majorityElement(nums) {
        let res
        let max = 0

        for(const num of nums){
            if(max === 0){
                res = num
            }

            if(res === num){
                max++
            } else{
                max--
            }
        }

        return res
    }
}
