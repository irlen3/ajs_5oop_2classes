export default class Character {
  constructor(name, type) {
    this.name = name; // имя
    this.type = type; // тип
    this.health = 100; // уровень жизни
    this.level = 1; // уровень персонажа
    this.attack; // атака
    this.defence; // защита
    this.checkErrorName(name);
    this.checkErrorType(type);
  }

  checkErrorName(name) {
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('недопустимые значения имени');
    } else {
      this.name = name;
    }
  }

  checkErrorType(type) {
    const masTypes = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (!masTypes.includes(type)) {
      throw new Error('недопустимые значения типа');
    } else {
      this.type = type;
    }
  }

  levelUp() {
    if (this.health !== 0) {
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    } else throw new Error('нельзя повысить левел умершего');
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}
