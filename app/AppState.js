import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { Product } from "./Models/Product.js"
import { Cart } from "./Models/Cart.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Product').Product[]} */
  products = [
    new Product({ name: 'Tennis Skirt', quantity: 15, price: 40 }), ({ name: 'Tennis Racket', quantity: 46, price: 120 }), ({ name: 'Tennis Shoes', quantity: 8, price: 75 })]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
