// Write a function to calculate the factorial of a number

function Factorial(fact){
    let res = 1
    for(let i=fact;i>0;i--){
        res = res * i
    }
    return res
}
console.log(Factorial(5));
console.log(Factorial(10));
console.log(Factorial(0));
console.log(Factorial(1));
console.log(Factorial(2));



