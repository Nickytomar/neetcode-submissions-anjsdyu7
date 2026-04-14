class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        // return nums.sort((a,b)=>a-b)[0]
        if(nums.lenght <1) return;
        let min = nums[0]
        for(let i =1; i<nums.length;i++){
         if(min>nums[i]){
            min = nums[i]
         }
           
        }
        return min;
    }
}
