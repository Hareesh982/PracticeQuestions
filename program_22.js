// Count the occurrences of each unique character in the string

function StringFrequency(str){
    let freq = {}
    for(let i of str){
        if(freq[i] == undefined){
            freq[i] = 1
        }
        else{
            freq[i]++
        }
    }
    return freq
}

console.log(StringFrequency('hareesh'));
console.log(StringFrequency('itdefined'));
console.log(StringFrequency('Hello world'));


