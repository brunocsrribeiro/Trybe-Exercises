const objFunction = {};

const person = {
  age: 35,
  monthBirth: 'July',
  wife: 'Daniela',
  lastName: 'RIBEIRO'
}

const addObj = (obj, key, value) => obj[key] = value

addObj(objFunction, 'name', 'Bruno');
addObj(objFunction, 'lastName', 'Ribeiro');

const getKeys = (obj) => Object.keys(obj);
const getValues = (obj) => Object.values(obj);
const getEntries = (obj) => Object.entries(obj);
const getAssign = (obj, obj2) => Object.assign(obj, obj2);


console.log(objFunction);
console.log(getKeys(objFunction));
console.log(getValues(objFunction));
console.log(getEntries(objFunction));
console.log(getAssign(objFunction, person));

const newObj = Object.assign({}, objFunction, person);
newObj.name = 'BRUNO';
console.log(newObj);