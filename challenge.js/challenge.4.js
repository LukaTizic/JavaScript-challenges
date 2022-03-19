'use strict';

const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `This bill was ${bill}, tip was ${tip} and the total value is ${bill + tip}!`
);
