class Fighter {
  constructor({ name, damage, hp, agility }) {
    this.name = name;
    this.damage = damage;
    this.hp = hp;
    this.agility = agility;
  }
  getName() {
    return this.name;
  }
  getDamage() {
    return this.damage;
  }
  makeDamage(damage) {
    return this.hp - damage;
  }
  getHealth() {
    return this.hp;
  }
  isAlive() {
    return this.hp > 0;
  }
  getAgility() {
    return this.agility;
  }

  attack(defender) {
    let limit = 100;
    let probabilityOfSuccess = limit - defender.getAgility;
    let isAttackSuccess = Math.random() * limit;
    if (isAttackSuccess <= probabilityOfSuccess) {
      defender.makeDamage(this.getDamage());
      console.log(
        `${this.name} make ${this.damage} damage to ${defender.name}`
      );
    } else {
      console.log(`${defender.name} attack missed`);
    }
  }
  logCombatHistory() {
    return console.log(
      `Name: ${this.name}, Wins: ${this.wins}, Losses: ${this.losses}`
    );
  }
  heal(healPoints) {
    let totalHealth = 100;
    let addedHp = healPoints + this.hp;
    if (addedHp > totalHealth) {
      this.addedHp = totalHealth;
    }
    if (addedHp < 0) {
      this.addedHp = 0;
    } else {
      this.addedHp = this.addedHp;
    }
  }
  dealDamage(damage) {
    if (this.hp - damage < 0) {
      this.hp = 0;
    } else {
      this.hp = this.hp - damage;
    }
  }
  addWin() {
    this.wins += 1;
  }
  addLoss() {
    this.losses += 1;
  }
  battle(first, second) {
    while (first.isAlive() && second.isAlive()) {
      if (first.isAlive()) {
        first.attack(second);
      } else {
        console.log(`${first.name} is dead and can not fight`);
        second.addWin();
        first.addLoss();
      }
      if (second.isAlive()) {
        second.attack(first);
      } else {
        console.log(`${second.name} is dead and can not fight`);
        first.addWin();
        second.addLoss();
      }
    }
  }
}
