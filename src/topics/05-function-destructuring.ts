
export interface Product {
    description: string;
    price: number;
};
const phone: Product = {
    description: 'Kombucha',
    price: 200000,
};
const table: Product = {
    description: 'Tofu',
    price: 80000,
};
interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}
export function taxCalculation(options: TaxCalculationOptions): [number, number] {
    const { tax, products } = options;
    let total = 0;
    products.forEach(({ price }) => {
        total += price;
    });
    return [total, total * tax];
}
const shoppingCart = [phone, table];
const tax = 0.15;
const [total, taxTotal] = taxCalculation({
    products: shoppingCart,
    tax,
})


// console.log('totzzal: ', total);
// console.log('total: ', taxTotal);