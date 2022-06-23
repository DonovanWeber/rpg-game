import { Character } from './../src/rpg.js';
import { Level } from './../src/rpg.js';

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
  test('should add a sword to inventory character and increase damage by 25', () => {
    expect(warrior.grabSword()).toEqual(100);
  });
  test('should add a location property to the character', () => {
    expect(warrior.addLevel()).toEqual(0);
  });
  test('should change the characters location to level 1', () => {
    expect(warrior.runToLevel()).toEqual(1);
  });
  test('should change the characters stats stamina on what level they move to',() => {
    expect(warrior.firstLevel()).toEqual(40);
  });
  
});

describe('Level', () => {
  
  test('Should create a level object with properties of distance, enemy, and loot', () => {
    let firstLevel = new Level(10,"skeleton", "boots");
    expect(firstLevel.distance).toEqual(10);
    expect(firstLevel.enemy).toEqual("skeleton");
    expect(firstLevel.loot).toEqual("boots");
  });
  
});

// let warrior = new Character(150,50,100);
// let firstLevel = new Level(10,"skeleton", "boots");
// test('should have character go to first level', () => {
//   expect(warrior.stamina).toEqual(firstLevel.distance);