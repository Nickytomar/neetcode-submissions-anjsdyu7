class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
    
        for(let i=0; i<numbers.length;i++){
            let left=0;
            let right = numbers.length-1;
            while(left<right){
                if(numbers[right]+numbers[left] == target){
                    return [left+1,right+1]
                }else if(numbers[right]+numbers[left] < target){
                    left++
                }else{
                    right --
                }
            }

        }
        return []
    }
}
