const wakeUp = () => 'Acordando!!';

const coffeeBreak = () => 'Bora tomar café!!';

const sleepTime = () => 'Partiu dormir!!';

const doingThings = (callback) => {
  return callback();
}

console.log(doingThings(wakeUp));
console.log(doingThings(coffeeBreak));
console.log(doingThings(sleepTime));
