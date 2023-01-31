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

// Crie uma função que retorne o dano do dragão.
// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).

const dragonDamage = (min, max) => {
    return dragon.damage = parseInt(Math.random() * (max - min) + min);
}

// Crie uma função que retorne o dano causado pelo warrior.
// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).

const warriorAttack = (min, max) => {
    return warrior.damage = parseInt(Math.random() * (max - min) + min);
}

// Crie uma função que retorne um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disso, a função deve ter uma condicional: caso o mago tenha menos de 15 de mana, o valor de dano recebe uma mensagem (Ex: “Não possui mana suficiente”), e a mana gasta é 0.

const mageAttack = (mage) => {
    const mageMana = mage.mana;
    const minDmg = mage.intelligence;
    const maxDmg = minDmg * 2;
    const turnStats = {
      manaSpent: 0,
      damageDealt: 'Not enough mana...',
    };
  
    if (mageMana > 15) {
      const mageDmg = minDmg < maxDmg ? maxDmg : minDmg;
      turnStats.manaSpent = 15;
      turnStats.damageDealt = mageDmg;
      return turnStats;
    }
    return turnStats;
  };

// Crie a primeira HOF que compõe o objeto gameActions.
// Ela será a função que simula o turno do personagem warrior. Essa HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon. Além disso, ela também deve atualizar o valor da chave damage do warrior.

const gameActions = {
    // Crie as HOFs neste objeto.
    warriorTurn: (warriorAttack) => {
        const warriorDamage = warriorAttack(warrior.strength, warrior.strength * warrior.weaponDmg);
        dragon.healthPoints -= warriorDamage;
        warrior.damage = warriorDamage;
    },
    mageTurn: (mageAttack) => {
        const mageTurnStats = mageAttack(mage);
        const mageDamage = mageTurnStats.damageDealt;
        mage.mana -= mageTurnStats.manaSpent;
        dragon.healthPoints -= mageDamage;
        mage.damage = mageDamage;
    },
    dragonTurn: (dragonDamage) => {
        const dragonAttack = dragonDamage(15, dragon.strength);
        mage.healthPoints -= dragonAttack;
        warrior.healthPoints -= dragonAttack;
        dragon.damage = dragonAttack;
    },
    turnResults: () => battleMembers,
  };

gameActions.warriorTurn(warriorAttack);
gameActions.mageTurn(mageAttack);
gameActions.dragonTurn(dragonDamage);
console.log(gameActions.turnResults());