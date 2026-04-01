class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let s_obj = new Object();
        let t_obj = new Object();
        
        for(let s_item of s ){
            if(s_obj[s_item]){
                s_obj[s_item]= s_obj[s_item] + 1  
            }else{
                s_obj[s_item] = 1;
            }

        }
        for(let t_item of t){
            if(t_obj[t_item]){
                t_obj[t_item]= t_obj[t_item] + 1  
            }else{
                t_obj[t_item] = 1;
            }
        }
        if(Object.keys(s_obj).length != Object.keys(t_obj).length){
            return false;
        }

        for(let item of Object.keys(s_obj)){
            if(s_obj[item]!=t_obj[item]){
                return false
            }
        }
       return true;

    
        
        




    }
}
