const skills: string[] = ['Nikolas', 'Goura', 'Gopal'];

interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
}

const striper: Character = {
    name: 'strider',
    hp: 100,
    skills: ['Bash', 'Counter']
}

striper.hometown = 'COLOMBIA'

console.table(striper)
export { };