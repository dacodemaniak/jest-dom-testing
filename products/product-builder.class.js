import { Builder } from "../_helpers/builder.class"
import { Product } from "./product.class"

export class ProductBuilder extends Builder {
    /**
     * ID attribute for the new Product
     * @var string
     */
    id = ''

    /**
     * Name of the new Product
     * @var string
     */
    name = ''

    /**
     * Stock of the new Product
     * @var number
     */
    stock = 0

    /**
     * Build a concrete Product
     * Throws exceptions
     * @returns Product
     * @see Builder
     * @override
     */
    build() {
        if (this.id === '') {
            throw new TypeError(`Cannot build Product without an ID`)
        }

        if (this.name === '') {
            throw new TypeError(`Cannot build Product without a Name`)
        }

        if (isNaN(this.stock) || this.stock < 0) {
            throw new TypeError(`Stock cannot be negative and must be numeric`)
        }

        const product = Product.getInstance()
        product.id = this.id
        product.name = this.name
        product.stock = this.stock

        return product
    }
}