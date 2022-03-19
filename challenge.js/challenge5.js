'use strict';

const calcAvg = (a, b, c) => (a + b + c) / 3;
console.log(calcAvg(3, 3, 3));

const scoreDolphins = calcAvg(44, 23, 71);
const scoreKoalas = calcAvg(65, 54, 49);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win! (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win! (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log('No winners');
  }
};
checkWinner(scoreDolphins, scoreKoalas);
checkWinner(576, 111);
