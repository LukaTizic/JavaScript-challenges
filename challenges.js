'use strict';

const weightMark = 78;
const heightMark = 1.69;
const weightJohn = 92;
const heightJohn = 1.95;

const markBMI = weightMark / heightMark ** 2;
const johnBMI = weightJohn / heightJohn ** 2;
const markBMIHigher = markBMI > johnBMI;
console.log(markBMI, johnBMI, markBMIHigher);

if (markBMI > johnBMI) {
  console.log('Mark has higher BMI');
} else {
  console.log('John has higher BMI');
}
