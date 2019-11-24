// task 6
let sum = 0;
for (let i = 1; i <= 99; i++) {
    if (i % 2 === 0) {
        sum = sum + i;
    }
}
console.log(sum);

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