import { ProxyState } from "../AppState.js"
import { productsService } from "../Services/ProductsService.js"




function _drawProducts() {
  const products = ProxyState.products
  let template = ''
  products.forEach(p => template += p.Template)
  document.getElementById('products').innerHTML = template
}

export class ProductsController {


  constructor() {
    ProxyState.on('products', _drawProducts)
  }


  createProduct() {
    window.event.preventDefault()
    const formElem = window.event.target
    const productData = {
      name: formElem.name.value,
      quantity: formElem.quantity.value,
      price: formElem.price.value
    }
    productsService.createProduct(productData)


  }
  showProducts() {
    -_drawProducts()
    document.getElementById('products').innerHTML = _drawProducts
  }

}


