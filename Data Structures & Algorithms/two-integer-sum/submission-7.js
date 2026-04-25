class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */

    // receive an array of int nums, and an int
    // should return a new array with the indices of the 2 nums that sum up to the target num
    // the array should be sorted 

    // nums = [3,4,5,6], target = 7
    // Output: [0,1]

    // an hash map that will store the index and the value, of each number
    // while we check for each value, we try to find the missing number that we 
    // need to reach the target
    // if the number that we are missing is present in the map
    // return both indices
    // if not we can just continue and save the current number

    twoSum(nums, target) {
        const map = new Map()

        for(let i = 0; i < nums.length; i++){
            const current = nums[i]
            const compliment = target - current

            if(map.has(compliment)){
                return [map.get(compliment), i]
            } else {
                map.set(current, i)
            }
        }
    }
}
