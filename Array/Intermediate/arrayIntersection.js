const arr1=[1,2,3]
const arr2=[2,3,4]


function intersection(arr1,arr2){
    const set1 = new Set(arr1)

    return arr2.filter(item => set1.has(item))
}

console.log(intersection(arr1,arr2))

/// another logic
function logic2intersection(arr1,arr2){
    let result=[]
    for (let i = 0; i < arr2.length; i++) {
        let current = arr2[i]
        if (arr1.indexOf(current)!==-1 && result.indexOf(current)===-1) {
            result.push(current)
        }
        
    }
    return result
}
console.log(logic2intersection(arr1,arr2))