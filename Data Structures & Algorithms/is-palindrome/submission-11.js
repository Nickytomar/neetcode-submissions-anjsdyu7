class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let normalString = s.toLowerCase().replace(/[^a-z0-9]/g,'');
       let left =0;
       let right = normalString.length - 1;
       while(left<right){
        if(normalString[left]!=normalString[right]){
            return false
        }
        left++;
        right--;

       }
       return true
        
    }
}
