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
  
}

export class Level {
  constructor(distance, enemy, loot) {
    this.distance = distance;
    this.enemy = enemy;
    this.loot = loot;
  }
}
