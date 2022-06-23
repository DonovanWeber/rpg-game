export default class Character {
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






// if(this.inventory[items] === 'sword') {
//   this.inventory.push(items);
//   return this.damage += 25;
// }
// return this.inventory;