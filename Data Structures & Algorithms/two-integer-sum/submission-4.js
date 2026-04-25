class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */

    // receive an array, with int. is the type valid? do i need to check fdor false values?
    // return the indecis of the numbers that sum up to the target number
    // it can't be the same index
    // can i get duplicates in the array?
    // always a solution available
    // the answer should alwys have the smaller index first
    // nums = [3,4,5,6], target = 7
    // output: [0,1]

    // only one valid answer

    // so for this 

    twoSum(nums, target) {
        const store = new Map()

        for(let i = 0; i < nums.length; i++){
            const currentNum = nums[i]
            const compliment = target - currentNum

            if(store.has(compliment)){
                return [store.get(compliment), i]
            } else{
                store.set(currentNum, i)
            }
        }
    }
}
