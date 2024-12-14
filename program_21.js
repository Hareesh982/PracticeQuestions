// Reverse the array without using built-in functions

function ReverseArray(arr){
    let new_arr = []
    for(let i of arr){
        new_arr.unshift(i)
    }
    return new_arr
}

console.log(ReverseArray([1,2,3,4,5,6,7,8,9]));
