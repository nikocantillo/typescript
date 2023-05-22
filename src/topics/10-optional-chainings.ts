export interface Passenger{
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Juan',
    children: ['hera', 'hara', 'Taty'],
}

const passenger2: Passenger = {
    name: 'Lili',
}

const printChildres = (passenger: Passenger): number => {
    if (!passenger.children) return 0
    // const howManyChildren2 = passenger.children?.length || 0;
    const howManyChildren = passenger.children!.length;
    console.log(passenger.name, howManyChildren)
    return howManyChildren;
}

printChildres(passenger2)