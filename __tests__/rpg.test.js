import Character from './../src/rpg.js';

describe('Character', () => {
  let warrior;
  beforeEach(() => {
    warrior = new Character(100,50,75);
  });
  test('should create a charater object with three properties of health, stamina, and damage', () => {
    expect(warrior.health).toEqual(100);
    expect(warrior.stamina).toEqual(50);
    expect(warrior.damage).toEqual(75);
  });
  test('should increase characters health by 50', () => {
    expect(warrior.drinkPotion()).toEqual(150);
  });
  test('should add an inventory slot inside of the character object', () =>
  {
    expect(warrior.itemSlot()).toEqual([]);
  });
  test('should add an item to inventory character', () => {
    expect(warrior.grabItem()).toEqual(1);
   
  });
});
