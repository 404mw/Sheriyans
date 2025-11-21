// function addUnlimited(...nums) {
//     /*sum = 0
//     nums.forEach((val) => {sum += val})
//     return sum*/
//     return nums.reduce((acc, val) => {return acc  + val}, 0)
// }

// console.log(addUnlimited(1,2,3,4,5));


(() => {console.log("Hello");
})()


function outer(){
    let abc = 123
    function inner(){
        console.log(abc);
    }
    inner()
}
outer()


let numArray = [1,2,3,4,5,6,7]
for (let i = 0; i < numArray.length; i++){
    console.log(numArray[i]);
}

setTimeout(() => {console.log("Time is up")}, 2000)