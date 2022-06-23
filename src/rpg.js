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
  grabItem() { 
    this.itemSlot();
    const item = 'sword';
    return this.inventory.push(item); //instead of the return here 
    // return this.inventory ??
  }   
}



// if(this.inventory[items] === 'sword') {
//   this.inventory.push(items);
//   return this.damage += 25;
// }
// return this.inventory;