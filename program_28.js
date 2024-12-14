// Write a function to add zeros after every 3 values in an array.



function AddZero(){
    let new_arr = []
    for(let i=0;i<arr.length;i++){
        new_arr.push(arr[i])
        if((i+1)%3==0){
            new_arr.push(0)
        }
    }
    return new_arr
}

let arr = [1,2,3,4,5,6,7,8,9]
console.log(AddZero(arr));


// [
//     1, 2, 3, 0, 4,
//     5, 6, 0, 7, 8,
//     9, 0
//   ]