class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set(nums);
        let longest = 0
        for(let num of set){
            if(!set.has(num-1)){
                let curr = num;
                let count=1;
                while(set.has(curr+1)){
                    count++;
                    curr++
                }
                longest =Math.max(count,longest)
            }
        }
       
       return longest
    }

}
