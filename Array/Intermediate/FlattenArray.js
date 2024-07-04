/// flatten the array
const arr=[1,5,8,9,[2,8,5,4,[1,2,3]],5,8]
function flatten(arr){
    return arr.flat(Infinity)
}

console.log(flatten(arr))
console.log(arr)


//// another logic

function logic2flatten(arr){
    let final=[]
    function helper(subarray){
        for (let i = 0; i < subarray.length; i++) {
            if(Array.isArray(subarray[i])){
                helper(subarray[i])
            }else{
                final.push(subarray[i])
            }
            
        }
    }
    helper(arr)
    return final
}

console.log(logic2flatten(arr))
