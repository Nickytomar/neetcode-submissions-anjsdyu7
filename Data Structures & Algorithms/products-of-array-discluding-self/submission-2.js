class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let product=1;
        let zero = 0;
        let result;
        for(let num of nums){
            if(num !=0){
                product=product* num;
            }else{
                zero++;
            }
        }

        result = nums.map((num)=>{
            if(zero > 1){
                return 0
            }else if(zero == 1){
                return num == 0 ? product: 0
            }else{
                return product/num
            }
        })
       
        return result


    }
}
