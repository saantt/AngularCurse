import { Invoice } from "../models/invoice";

export const invoiceData: Invoice =
{
    id: 1,
    name: 'componentes de PC',
    client: {
        name: 'Santiago',
        lastName: 'Gomez',
        address: {
            country: 'COLOMBIA',
            city: 'AXM',
            street: 'Calle 67 # 18',
            number: 23
        }
    },
    company: {
        name: 'Inforcol',
        fiscalId: 19,

    },
    items: [
        {
            id: 1,
            product: 'CPU intel 19',
            price: 5500,
            quantity: 1

        },
        {
            id: 2,
            product: 'Teclado mecanico',
            price: 53300,
            quantity: 2

        },
        {
            id: 3,
            product: 'Monitor Portatil',
            price: 150,
            quantity: 3

        },
    ]
}