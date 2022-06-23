import Character from './../src/rpg.js';

describe('Character', () => {
  test('should create a charater object with three properties of health, stamina, and damage', () => {
    const warrior = new Character(100,50,75);
    expect(warrior.health).toEqual(100);
    expect(warrior.stamina).toEqual(50);
    expect(warrior.damage).toEqual(75);
  });
});
