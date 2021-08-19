console.log('hello')

const massMark = 10;
const heightMark = 2;
const massJohn =12;
const heightJohn =2;


const BMIMark = massMark / heightMark **2;
const BMIJohn = massJohn / (heightJohn * heightJohn);

const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark,BMIJohn);


if(BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
    document.write(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
} else{
    console.log(`Jone's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`)
    document.write(`Jone's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`)
}
