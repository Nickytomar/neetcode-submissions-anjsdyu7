class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map={};
        
        for(let num of nums){
        map[num]= (map[num]||0)+1;
        }
        let sort = Object.entries(map).sort((a,b)=>b[1]-a[1])




        return sort.slice(0,k).map((item)=>item[0]);
    }
}
