class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
                const letters = new Map()

        for(let i = 0; i < s.length; i++){
            const current = s[i]

            if(!letters.has(current)){
                letters.set(current, 1)
            } else {
                const count = letters.get(current)
                letters.set(current, count + 1)
            }
        }

        for(let i = 0; i < t.length; i++){
            const current = t[i]

            if(!letters.has(current)){
                return false
            }

            const count = letters.get(current)

            if(count === 1){
                letters.delete(current)
            } else {
                letters.set(current, count - 1)
            }
        }

        return letters.size === 0

    }
}
