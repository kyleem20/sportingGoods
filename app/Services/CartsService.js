import { ProxyState } from "../AppState.js"
import { Cart } from "./Models/Cart.js"

class CartsService {

  deleteCart(id) {
    ProxyState.carts = ProxyState.carts.filter(c => c.id != id)

  }


}

export const cartsService = new CartsService()