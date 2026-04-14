class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {

        let set = new Set();
        let left = 0
        let maxL = 0;

        for(let i=0; i<s.length; i++ ){
            while(set.has(s[i])){
                set.delete(s[left]);
                left++;
                
            }

            set.add(s[i]);
            maxL= Math.max(maxL,i-left+1)
            // console.log(set)


        }
        return maxL
    
    }
}
