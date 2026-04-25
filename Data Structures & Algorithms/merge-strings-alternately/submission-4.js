class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */

    // receive 2 string of lowercase letters
    // Input: word1 = "abc", word2 = "xyz"
    // Output: "axbycz"

    // Input: word1 = "ab", word2 = "abbxxc"
    // Output: "aabbbxxc"

    // 2
    mergeAlternately(word1, word2) {
        let result = []
        let i = 0
        let j = 0

        while(i < word1.length && j < word1.length){
            result.push(word1[i])
            result.push(word2[j])
            i++
            j++
        }

        result.push(word1.slice(i))
        result.push(word2.slice(j))


        return result.join("")
    }
}
