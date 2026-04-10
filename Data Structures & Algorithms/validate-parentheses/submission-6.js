class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        // let s ="[(])"
        let pairs = {
            '(':')',
            '[':']',
            '{':'}'
        }
        let arr = s.split('');
        let stack=[]
        let resultMain=true;
        let result = arr.map((el)=>{
            if(pairs[el]){
                // console.log('pushed',el)

             stack.push(el);
            }else{
                let pop = stack.pop();
                // console.log('poped',pop)
                if(pairs[pop]!=el){
                    resultMain= false;
                }
            }


        })
        if(stack.length > 0){
            return false
        }
        return resultMain

    }
}
