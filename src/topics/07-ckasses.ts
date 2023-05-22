
export class Person {
    // public name: string;
    // public addres: string;

    constructor(
        public name: string,
        public lastname: string,
        private address: string = 'No address',
    ) {}
}
 
// extender una class
// export class Hero extends Person {
//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string,
//     ) {
//         super(realName, 'new york')
//     }
// }
export class Hero {
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person,
    ) {  
        // this.person = new Person(realName);
    }
}

const tony = new Person('nick', 'Cantillo', 'gigante');

const ironman = new Hero('Ironman', 45, 'tony', tony);

console.log(ironman)