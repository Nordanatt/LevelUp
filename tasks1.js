// TASK 1

let a1 = -1, a2 = 2, a3 = 7;
let sum = 0;
if (a1 > 0)
{
    sum = sum + a1;   
}

if (a2 > 0) 
{
    sum = sum + a2;
}

if (a3 > 0)
{
    sum = sum + a3;
}

console.log(sum);


// TASK 2
let a = 1, b = 2, c = 4;

let multiply = a * b * c;
let summ = a + b + c;
let result = 0;
if (multiply >= summ) 
{
    result = multiply + 3;
}
if (summ > multiply)
{
    result = summ + 3;
}

console.log(result);

//TASK 3

let x = 5, y = -7;

if (x < 0 && y < 0) 
{
    console.log('3 четверть');
}

if (x > 0 && y > 0) 
{
    console.log('1 четверть');
}

if (x > 0 && y < 0) 
{
    console.log('2 четверть');
}

if (x < 0 && y > 0) 
{
    console.log('4 четверть');
}

// TASK 4

let arr = [ 10, 30, 20 ];
let max = 0;
let maxIndex = 0;
let min = Number.MAX_VALUE;
let minIndex = 0;
for (let index = 0; index < arr.length; index++) {
    let element = arr[index];
    if (element > max) {
        max = element;
        maxIndex = index;
    }
    if (element < min) {
        min = element;
        minIndex = index;
    }
}
console.log(min);
console.log(minIndex);
console.log(max);
console.log(maxIndex);


//TASK 5
let arr2 = [ 3, 6, 9, 5, 1, 8 ];
let arr2sum = 0;
for (let index = 0; index < arr2.length; index++) {
    let ostatokOtDeleniya = index % 2;
    if (ostatokOtDeleniya !== 0)
    {
        let element = arr2[index];
        arr2sum = arr2sum + element; 
    }
}
console.log(arr2sum);