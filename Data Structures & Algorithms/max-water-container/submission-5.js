class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */

    // receive an array of int, not ordered
    // an array representing the max area

    // [1,7,2,5,4,7,3,6]
    //  36

    maxArea(heights) {
        let max = 0

        for(let i = 0; i < heights.length - 1; i++){

            for(let j = i + 1; j < heights.length; j++){

                const height = Math.min(heights[i], heights[j])
                const width = j - i
                const area = width * height

                if(area > max){
                    max = area
                }
            }
        }

        return max
    }
}
