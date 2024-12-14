// Write a program to remove the middle element from an array, 
// or if the middle element is not there, remove every element except the first and last ones.

let arr = [1,2,3,4,5,6,7,8,9,0,11,12,13,14,15]
n = arr.length
if(arr.length == 3){
    arr.splice(1,1)
}
else{
    arr.splice(1,n-2)
}
console.log(arr);
