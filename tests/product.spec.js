import { Product } from './../products/product.class'

describe(`Product class`, () => {
    it(`Should make an instance of Product`, () => {
        const product = new Product()
        expect(product).toBeInstanceOf(Product)
    })

    it(`Should give back an id, a name and a stock`, () => {
        const product = new Product()
        product.id = '1fe24'
        product.name = 'Test'
        product.stock = 10

        expect(product.id).toEqual('1fe24')
        expect(product.name).toEqual('Test')
        expect(product.stock).toEqual(10)
    })

    
})