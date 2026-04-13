class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let sort=  nums.sort((a,b)=>a-b);
      console.log(sort)
       let curr = 1;
       let longest=1;
       if(nums.length == 0) return 0;
       
       for(let i=0; i<sort.length; i++ ){
            if(sort[i] + 1 == sort[i+1]){
                curr++;
            }else if(sort[i] == sort[i+1]){

            }
            else{
                longest=Math.max(longest,curr);
                curr=1;
            }
       }
       return longest
    }

}
