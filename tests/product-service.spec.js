import { ProductService } from "../products/product-service"

describe(`Product Service`, () => {
    let service

    beforeEach(() => {
        service = new ProductService()
    })

    it(`Should have 3 products`, () => {
        expect(service.findAll().getSize()).toEqual(3)
    })

    it(`Should'nt have a price attribute`, () => {
        const products = service.findAll()
        expect(products.getById('16ef53').hasOwnProperty('price')).toBeFalsy()
    })
})