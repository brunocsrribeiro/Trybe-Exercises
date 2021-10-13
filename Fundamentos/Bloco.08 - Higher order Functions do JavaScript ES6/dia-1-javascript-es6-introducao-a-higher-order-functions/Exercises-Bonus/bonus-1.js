const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// Crie uma função que retorna o dano do dragão.
const dragonDamage = (min, max) => {
  return dragon.damage = Math.ceil(Math.random() * (max - min));
}
dragonDamage(15, dragon.strength);

// Crie uma função que retorna o dano causado pelo warrior .
const warriorDamage = (min, max) => {
  return warrior.damage = Math.ceil(Math.random() * (max - min));
}
const warriorDmg = warrior.strength;
const warriorAttack = (warrior.strength * warrior.weaponDmg);
warriorDamage(warriorDmg, warriorAttack);

// Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
const objMage = (min, max) => {
  let damageCaused = Math.floor(Math.random() * min) + max;
  const currentMana = mage.mana;
  let spentMana = 15;

  if(currentMana < spentMana) {
   return mage.damage = 'Não possui mana suficiente';
  }
  return mage.damage = damageCaused;
}
const min = mage.intelligence;
const max = mage.intelligence * 2;
objMage(min, max);

const gameActions = {
  // Crie as HOFs neste objeto.
};

const gameActionsSimulator = () => {
}