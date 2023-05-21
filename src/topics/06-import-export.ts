import { Product, taxCalculation } from "./05-function-destructuring";


const shoppingCart: Product[] = [
    {
        description: "Veggie Burguer",
        price: 25000,
    },
    {
        description: "Naturella",
        price: 30000,
    }
];


const [total, tax] = taxCalculation({
    products: shoppingCart,
    tax: 0.15
})


console.log('totzzal: ', total);
console.log('total: ', tax);


export { }