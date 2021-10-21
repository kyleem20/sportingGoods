import { ProxyState } from "../AppState.js"
import { Product } from "../Models/Product.js"

class ProductsService {

  createProduct(productData) {
    const product = new Product(productData)
    ProxyState.products = [...ProxyState.products, product]
  }



}

export const productsService = new ProductsService()
