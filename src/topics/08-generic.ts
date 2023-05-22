

export function whatMyType<T>(argument: T): T { 
    return argument;
};

let amString = whatMyType<string>('Hola Mundo');
let amArray = whatMyType<number[]>([1,2,3,4,5]);
let amNumber = whatMyType<number>(12);

console.log(amString.split(' '))
console.log(amArray.join(','))
console.log(amNumber.toFixed())