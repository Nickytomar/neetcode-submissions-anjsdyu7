class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        // return nums.sort((a,b)=>a-b)[0]
        if(nums.lenght <1) return;
        let min = nums[0]
        for(let i =0; i<nums.length-1;i++){
            if(nums[i]+1==nums[i+1]){

            }else{
                if(nums[i]+1>nums[i+1])
                {
                    min = nums[i+1]
                }else{
                    nums[i]
                }
            }
           
        }
        return min;
    }
}
