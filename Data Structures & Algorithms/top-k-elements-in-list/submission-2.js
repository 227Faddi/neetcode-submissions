class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */

    // an array of int nums
    // int num 

    // return a new array contian

    // Input: nums = [1,2,2,3,3,3], k = 2
    // Output: [2,3]

    // creating a storage 
    // where i can store the count of each value
    // loop into the arry and store the counts of the unique values

    // order the storage from the most used to the least

    // return only the k values from that orderd list

    topKFrequent(nums, k) {
        let map = {};
        let bucket = [];
        let result = [];

        for(let i = 0; i < nums.length; i++){
            if(!map[nums[i]]){
                map[nums[i]] = 1;
            } else {
                map[nums[i]]++;
            }
        }

        for(let [num, freq] of Object.entries(map)){
            if(!bucket[freq]){
                bucket[freq] = new Set().add(num);
            } else {
                bucket[freq] = bucket[freq].add(num);
            }
        }

        for(let i = bucket.length - 1; i >= 0; i--){
            if(bucket[i]) result.push(...bucket[i]);
            if(result.length === k) break;
        }

        return result;
    }
}
