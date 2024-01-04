import { Product } from "./product.class"

export class ProductMap {
    /**
     * Product Collection
     * @var Map<key: string, value: Product>
     */
    #products = new Map()

    get products() {
        return this.#products
    }

    addProduct(key, product) {
        this.#checkStringParam(key)
        this.#checkProductParam(product)

        this.#products.set(key, product)
    }

    removeProduct(key) {
        this.#checkStringParam(key)

        this.#products.delete(key)
    }

    updateProduct(key, product) {
        this.addProduct(key, product)
    }

    getSize() {
        return this.#products.size
    }

    #checkStringParam(param) {
        if (!(typeof param == 'string')) {
            throw new Error('key param is not a string')
        }
    }

    #checkProductParam(param) {
        if (!(param instanceof Product)) {
            throw new Error('param is not of Product type')
        }
    }
}