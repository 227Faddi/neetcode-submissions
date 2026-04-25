class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */

    // receive 2 string
    // return a merged string with alternate char
    //
    //Input: word1 = "abc", word2 = "xyz"
    //Output: "axbycz"
    //Input: word1 = "ab", 
    //       word2 = "abbxxc"
    //Output: "aabbbxxc"

    // find the smaller string
    // create 2 pointers that goes from the first to last chart of smaller string
    // add all char together and then add the rest of the longer string if any
    mergeAlternately(word1, word2) {
        let result = ""
        let i = 0
        let j = 0


        while(i < word1.length && j < word2.length){
            result += word1[i]
            result += word2[j]
            i++
            j++
        }

        result += word1.slice(i)
        result += word2.slice(j)

        return result
    }
}
