export class Character {
  constructor(health, stamina, damage) {
    this.health = health;
    this.stamina = stamina;
    this.damage = damage;
  }
  drinkPotion() { 
    return this.health += 50;
  }
  itemSlot() { 
    return this.inventory = [];
  }
  grabSword() { 
    this.itemSlot();
    const item = 'sword';
    this.inventory.push(item);
    return this.damage += 25;
  }   
  
  addLevel() { 
    this.level = 0;
    return this.level;
  }
  runToLevel() {
    this.addLevel();
    this.level += 1;
    return this.level;
  }
}


export class Level {
  constructor(distance, enemy, loot) {
    this.distance = distance;
    this.enemy = enemy;
    this.loot = loot;
  }

}





// need to move the char from 0 to 1
//method to move the char
// to subtract distance from stamina