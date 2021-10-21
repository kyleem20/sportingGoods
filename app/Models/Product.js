import { generateId } from "../Utils/generateId.js"



export class Product {

  constructor(data) {
    this.id = generateId()
    this.name = data.name
    this.quantity = data.quantity
    this.price = data.price
  }


  get Template() {
    //getting there
    return `
  <div class="col-3 bg-light shadow rounded">
  <div class="row">
    <div class="col-12 bg-primary p-5">${this.name} </div>
    <button class="btn btn-success" onclick="app.productsController.removeProducts('${this.id}')" > fulfill order </button>
    <div class="col-12 p-4">
      <b>Details</b>
      <div class="row bg-light darken-20 ">
        <div class="col-12">${this.quantity}</div>
        <div class="col-12">${this.price}</div>
      </div>
    </div>
    <div class="col-12 p-4 ">
      <b>Add to Cart</b>
      <div class="row  bg-light darken-20  shadow-inset">
       ${this.getCarts()}
      </div>
    </div>
    <div class="col-12 text-end">Total: $${this.price}</div>
  </div>
  <form class="row align-items-end" onsubmit="app.cartsController.createCarts('${this.id}')">
        <div class="col-10">
          <input type="text" class="form-control" name="cartsName" id="" aria-describedby="helpId" placeholder="add cart">
        </div>
        <button class="btn btn-dark col-2"> add to cart</button>
   </form>
</div>
    `
  }


}