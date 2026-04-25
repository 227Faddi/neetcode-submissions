class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    // receive an array of numbers int
    // return a boolean indicating if a value is repeating or not
    // example [1,2,3,5] => true
    // [1,2,2,5,4,3] => false - 2 is present two times
    // loop into the array
    // while looping save values that appears for the first time
    // while looping check if the values already seen re appear. in that case return false
    // if we looped into the array and we didn't find any douplicate
    // return true, that means all values are unique
    // we could use an hash map to store our values, and then every time we loop we check if the values is present in the store
    // if is present then return false
    // if is not present add it and move to the next number

    hasDuplicate(nums) {
        const unique = new Map()

        for(let i = 0; i < nums.length; i++){
            const current = nums[i]

            if(unique.has(current)){
                console.log(current, "is already present")
                return true
            } else {
                unique.set(current, i)
            }

        }

        return false
    }
}
