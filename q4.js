let arr = [32 , 65 , 74 , 53 , 95 , 99 , 54 , 67];

let Max = (Math.max(...arr));
let Min = (Math.min(...arr));
let sum = 0;
for(let i = 0; i < arr.length ; i++){
    sum+=arr[i];
}
let Average = (sum/arr.length);

let count  = 0;

for(let i = 0 ; i < arr.length ; i++){
    if(arr[i]>= 50){
        count++;
    }
}

console.log(`The Array arr is : ${arr}`);

console.log(`The MAX number of array is : ${Max}`);

console.log(`The Min NUmber of Array is : ${Min}`);

console.log(`The Average of Array is : ${Average}`);

console.log(`Number of Students who passed 50 are : ${count}`);