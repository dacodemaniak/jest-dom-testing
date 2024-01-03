export class Product {
    /**
     * ID of the product
     * @var string
     */
    #id = ''

    /**
     * Name of the product
     * @var string
     */
    #name = ''

    /**
     * Stock of the product
     * @var number
     */
    #stock = 0

    constructor(doIt = null) {
        if (!doIt)
            throw new Error(`Cannot instanciate directly a new Product`)
    }

    get id() {
        return this.#id
    }

    set id(id) {
        this.#id = id
    }

    get name() {
        return this.#name
    }

    set name(name) {
        this.#name = name
    }

    get stock() {
        return this.#stock
    }

    set stock(stock) {
        if (isNaN(stock)) {
            throw new TypeError(`stock is not a numeric`)
        }

        if (stock < 0) {
            throw new Error(`${stock} cannot be negative`)
        }

        this.#stock = stock
    }

    static getInstance() {
        return new Product(true)
    }
}