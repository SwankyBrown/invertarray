


// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []








let Arr = [1,2,3,4,5]
let invertArray = []

function invert (Arr){
for(i = 0; i < Arr.length;i++){
    let newNum = Arr[i] * -1
    invertArray.push(newNum)
}
    return invertArray
}


console.log(invert(Arr));