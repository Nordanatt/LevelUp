// task 6
function task6() {
    let sum = 0;
    let count = 0;
    for (let i = 1; i <= 99; i++) {
        if (i % 2 === 0) {
            sum = sum + i;
            count++;
        }
    }
    return {
        summa: sum,
        cnt: count
    };
}

const task6result = task6();
console.log(task6result);

//task 7
let n = 7;
let simple = true;
for (let i = 2; i < n; i++) {
    if (n % i === 0)
    {
        simple = false;
        break;
    }
}

if (simple)
{
    console.log('Простое');
}
else 
{
    console.log('Не простое');
}

//task 7.5
let found = false;
let i = 1;
let s = 8;
let result = 0;
while (!found) {
    let i2 = i*i;
    if (i2 < s) {
        i++;
    } else {
        found = true;
        if (i2 === s) {
            result = i;
        } else {
           let i12 = (i-1) * (i-1);
           if (i12 - s > s - i2)
           {
               result = i - 1;
           } 
           else 
           {
               result = i;
           }
        }
    }
}

console.log(result);

//task 8
let a = 5;
let factorial = 1;
for (let i = 1; i <= a; i++){
    factorial = factorial * i;
}
console.log(factorial);

//task 9
let d = 1812;
let sum1 = 0;
while (d >= 1) {
    let digit = d % 10;
    sum1 = sum1 + digit;
    d = (d - digit) / 10;
}
console.log(sum1);

//task 10
let f = 1812;
let sum2 = 0;
while (f >= 1) {
    let digit = f % 10;
    sum2 = sum2 * 10 + digit;
    f = (f - digit) / 10;
}
console.log(sum2);

//task 11
function task11(arr) {
    for (let index1 = 0; index1 < arr.length / 2; index1++) {
        const element1 = arr[index1];
        const index2 = arr.length - 1 - index1;
        const element2 = arr[index2];
        arr[index1] = element2;
        arr[index2] = element1;
    }
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
task11(array);
console.log(array);

//task 12
function task12(arr) {
    let count = 0;
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (element % 2 !== 0)
            count++;
    }
    return count;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const functionCount = task12(arr);
console.log(functionCount);

//task13
function task13(array) {
    let half = array.length / 2;
    let isOdd = false;
    if (array.length % 2 !== 0) {
        half = half - 0.5;
        isOdd = true;
    }
    for (let index = 0; index <= half; index++) {
        const element = array[index];
        const index2 = index + half;
        const element2 = array[index2];
        array[index] = element2;
        array[index2] = element;

        if (isOdd && half === index) {
            let indexToShift = array.length - 1;
            while (indexToShift > half + 1) {
                let elementToShift = array[indexToShift];
                array[indexToShift] = array[indexToShift-1];
                array[indexToShift-1] = elementToShift;
                indexToShift--;
            }
        } 
    }
}

const array13 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
task13(array13);
console.log(array13);

//task 14
function isArraySorted(array) {
    for (let index = 0; index < array.length - 1; index++) {
        const element = array[index];
        const element2 = array[index+1];
        if (element > element2)
            return false;
    }
    return true;
}

function task14(array) {
    while (!isArraySorted(array)) {
        for (let index = 0; index < array.length - 1; index++) {
            const element = array[index];
            const element2 = array[index+1];
            if (element > element2)
            {
                array[index+1] = element;
                array[index] = element2;
            }
        }
    }
}

let arrayToSort = [5, 1, 3, 4, 2];
task14(arrayToSort);
console.log(arrayToSort);

//task 15
function swapWithPrev(array, index) {
    let t = array[index-1];
    array[index-1] = array[index];
    array[index] = t;
}

function task15_insert(array) {
    for (let index = 1; index < array.length; index++) {
        let elementIndex = index;
        while (elementIndex > 0 && array[elementIndex-1] > array[elementIndex]) {
            swapWithPrev(array, elementIndex);
            elementIndex--;
        }
    }
}

arrayToSort = [5, 1, 3, 2, 4, -7, 10, 0];
task15_insert(arrayToSort);
console.log(arrayToSort);


//task 15 select
function findMinIndex(array, startIndex) {
    let min = Number.MAX_VALUE;
    let minIndex = 0;
    for (let index = startIndex; index < array.length; index++) {
        const element = array[index];
        if (element < min)
        {
            min = element;
            minIndex = index;
        }
    }
    return minIndex;
}

function task15_select(array) {
    for (let index = 0; index < array.length; index++) {
        let minIndex = findMinIndex(array, index);
        let element = array[index];
        array[index] = array[minIndex];
        array[minIndex] = element;
    }
}

const arrayToSortUsingSelect = [0, 16, -6, 1, 6, 2];
task15_select(arrayToSortUsingSelect);
console.log(arrayToSortUsingSelect);