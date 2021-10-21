import { ProxyState } from "../AppState.js"
import { Cart } from "../Models/Cart.js"

class CartsController {

  showCarts() {
    -_drawCarts()
    document.getElementById('addToCart').innerHTML = addToCart()
  }
}

export const cartsController = new CartsController()