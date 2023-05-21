interface Character {
    name: string;
    hp: number;
    ShowHp: () => void;
}
const healCharacter = (character: Character, amount: number) => {
    character.hp += amount
}
const strider: Character = {
    name: 'strider',
    hp: 50,
    ShowHp() {
        console.log(`Puntos de vida ${this.hp}`);
    }

}
healCharacter(strider, 29);
healCharacter(strider, 100);
healCharacter(strider, 300);
strider.ShowHp()

// function addNumbers(a: number, b: number): number {
//     return a * b
// };
// const addNumberArrow = (a: number, b: number): string => {
//     return `${a + b}`;
// }
// function multiply(firstNumber: number, secondNumber?: number, base: number = 2) {
//     return firstNumber * base;
// };


// const result: number = addNumbers(109, 2);

// const result2: string = addNumberArrow(108, 3);

// const resultMultiply = multiply(345)

// console.log({
//     result,
//     result2,
//     resultMultiply    
// })
export { };