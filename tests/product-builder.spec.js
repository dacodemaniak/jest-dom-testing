const { Builder } = require("../_helpers/builder.class")
const { ProductBuilder } = require("../products/product-builder.class")
const { Product } = require("../products/product.class")

describe(`ProductBuilder`, () => {
    it(`Should be instanciated`, () => {
        const productBuilder = new ProductBuilder()
        expect(productBuilder).toBeInstanceOf(ProductBuilder)
        expect(productBuilder).toBeInstanceOf(Builder)
    })

    it(`Should raised an exception if no ID`, () => {
        const productBuilder = new ProductBuilder()
        productBuilder.name = 'Test'
        productBuilder.stock = 10
        
        expect(() => productBuilder.build()).toThrow(TypeError)
        expect(() => productBuilder.build()).toThrow('Cannot build Product without an ID')
    })

    it(`Should raised an exception if no Name`, () => {
        const productBuilder = new ProductBuilder()
        productBuilder.id = 'Test'
        productBuilder.stock = 10
        
        expect(() => productBuilder.build()).toThrow(TypeError)
        expect(() => productBuilder.build()).toThrow('Cannot build Product without a Name')
    })

    it(`Should raised an exception if no Name`, () => {
        const productBuilder = new ProductBuilder()
        productBuilder.id = 'Test'
        productBuilder.name = 'Test'
        productBuilder.stock = 'Test'
        
        expect(() => productBuilder.build()).toThrow(TypeError)
        expect(() => productBuilder.build()).toThrow('Stock cannot be negative and must be numeric')
    })

    it(`Should give back a Product instance with correct values`, () => {
        const productBuilder = new ProductBuilder()
        productBuilder.id = 'Test'
        productBuilder.name = 'Test'
        productBuilder.stock = 10
        
        const product = productBuilder.build()

        expect(product).toBeInstanceOf(Product)
        expect(product.id).toEqual('Test')
        expect(product.name).toEqual('Test')
        expect(product.stock).toEqual(10)
    })
})