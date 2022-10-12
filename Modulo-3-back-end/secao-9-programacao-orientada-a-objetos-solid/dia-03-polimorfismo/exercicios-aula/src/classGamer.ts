// abstract class Character {
//   constructor(public name: string) { }
//   // método abstrato jump. não pode ser inicializado
//   abstract talk(): void
//   abstract specialMove(): void
// }

// class MeleeCharacter extends Character {
//   talk() { console.log(`${this.name} está falando.`); }
//   specialMove() { console.log(`${this.name} está com poder especial.`); }
// }

// class LongRangeCharacter extends Character {
//   talk() { console.log(`${this.name} está falando.`); }
//   specialMove() { console.log(`${this.name} está com poder especial.`); }
// }

// const personagem = (character: Character) => {
//   character.talk();
//   character.specialMove();
// }

// const personagem1 = new MeleeCharacter('goku');
// const personagem2 = new LongRangeCharacter('vedita');

// personagem(personagem1);
// personagem(personagem2);