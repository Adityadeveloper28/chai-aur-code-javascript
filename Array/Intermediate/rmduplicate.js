// remove duplicate value from the array

const arr =[1,5,8,9,9]

function rmDuplicate(arr){
    return [...new Set(arr)]
}
console.log(rmDuplicate(arr))
console.log(arr);
///another way
console.log(...new Set(arr))

// another logic 
console.log(arr)
function logic2rmduplicate(arr){
    let newarr =[]
    for (let i = 0; i < arr.length; i++) {
        if(!newarr.includes(arr[i])){
            newarr.push(arr[i])
        }
    }
    return newarr
}
console.log(logic2rmduplicate(arr))