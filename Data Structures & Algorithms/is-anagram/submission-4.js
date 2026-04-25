class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false

        const hash = new Map()

        for(let i = 0; i < s.length; i++){
            const current = s[i]

            if(hash.has(current)){
                hash.set(current, hash.get(current) + 1)
            } else{
                hash.set(current, 1)
            }
        }

        for(let i = 0; i < t.length; i++){
            const current = t[i]

            if(!hash.has(current) || hash.get(current) < 1){
                return false
            } else {
                hash.set(current, hash.get(current) - 1)
            }
        }

        return true
    }
}
