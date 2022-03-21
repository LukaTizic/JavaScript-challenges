'use strict';

const gameEvents = new Map([
  [17, 'GOAL'],
  [36, 'Substitution'],
  [47, 'GOAL'],
  [61, 'Substition'],
  [64, 'Yellow card'],
  [69, 'Red card'],
  [70, 'Substitution'],
  [72, 'Substitution'],
  [76, 'GOAL'],
  [80, 'GOAL'],
  [92, 'Yellow Card'],
]);

//1.
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2.
gameEvents.delete(64);

// 3.
console.log(`An event happened, on average every ${90 / gameEvents.size} mins`);
const time = [...gameEvents.keys()].pop();
console.log(time);

);

// 4.
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? '1st' : '2nd';
  console.log(`[${half} half!] ${min}: ${event}`);
}
