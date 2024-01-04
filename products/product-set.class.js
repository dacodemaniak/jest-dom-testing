import { Product } from "./product.class"

export class ProductSet {
    #products = new Set()

    get products() {
        return this.#products
    }

    /**
     * Add product object to Set
     * @param {Product} product 
     * @returns 
     */
    addProduct(product) {
        if (!(product instanceof Product)) {
            throw new TypeError('product parameter is not of Product type')
        }

        this.#products.add(product)
        return this
    }

    /**
     * Remove product if exists
     * @param {Product} product 
     * @returns void
     */
    removeProduct(product) {
        // Is Set have this product ?
        if (this.#products.has(product)) {
            this.#products.delete(product)
        }
    }

    /**
     * Update an item according to its ID value
     *  If ID is mutated it's considered as new product, so, noop
     * @param {Product} product
     * @returns void
     */
    updateProduct(product) {
        this.#products.forEach((item) => {
            if (item.id === product.id) {
                this.removeProduct(item)
            }
        })
        this.addProduct(product)
    }

    getSize() {
        return this.#products.size
    }
}