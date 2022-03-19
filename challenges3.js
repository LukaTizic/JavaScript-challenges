'use strict';

const teamDolphins = (97 + 112 + 101) / 3;
const teamKoalas = (109 + 95 + 106) / 3;
console.log(teamDolphins, teamKoalas);

if (teamDolphins > teamKoalas && teamDolphins >= 100) {
  console.log('Dolphins win!');
} else if (teamKoalas > teamDolphins && teamKoalas >= 100) {
  console.log('Koalas win!');
} else if (
  teamDolphins === teamKoalas &&
  teamDolphins >= 100 &&
  teamKoalas >= 100
) {
  console.log("It's a draw");
} else {
  console.log('No one wins the tropy this year');
}
