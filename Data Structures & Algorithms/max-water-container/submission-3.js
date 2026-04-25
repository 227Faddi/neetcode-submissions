class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */

    // an array of int
    // to return an integer representing the max amount of water a container can store

    // [1,7,2,5,4,7,3,6]

    // 36

    // 7 = 7 * 1
    

    maxArea(heights) {
        let max = 0

        for(let l = 0; l < heights.length - 1; l++){

            for(let r = l + 1; r < heights.length; r++){
                const length = r - l
                const minHeigth = Math.min(heights[l], heights[r]) 

                const area = length * minHeigth

                if(area > max){
                    max = area
                }
            }
        }

        return max
    }
}
