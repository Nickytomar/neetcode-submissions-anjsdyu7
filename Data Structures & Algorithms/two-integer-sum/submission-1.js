class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = {};
        let result=[];

        for(let i=0; i < nums.length; i++){
            let compliment =target - nums[i];
            console.log(map[compliment])
            if(map[compliment] !== undefined){
                console.log(map[compliment])
                return [map[compliment],i]
            }else{
                map[nums[i]] = i;
            }
        }
    
    }
   
}
