class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    // receive an array of int
    // return the length of the longest sequence of numbre +1
    // Input: nums = [2,20,4,10,3,4,5]
    // Output: 4

    // sort array in ascending order

    longestConsecutive(nums) {
        if(nums.length === 0){
            return 0
        }

        const unique = new Set(nums)
        const sorted = [...unique].sort((a,b) => a - b)
        const lengths = []
        let counter = 1

        for(let i = 0; i < sorted.length; i++){

            if(sorted[i] + 1 === sorted[i + 1]){
                counter++
            } else{
                lengths.push(counter)
                counter = 1
            }

        }

        return Math.max(...lengths)
    }
}
