import createElement from '../../assets/lib/create-element.js';
import { getPrice } from './utils/index.js'

export default class ProductCard {
  constructor(product) {
    this.product = product

    this.elem = this.render()
    this.addCustomEvent()
  }


  render() {
    const { image, price, name } = this.product

    return createElement(`<div class="card">
      <div class="card__top">
        <img
          src="/assets/images/products/${image}"
          class="card__image"
          alt="product"
        />
        <span class="card__price">€${getPrice(price)}</span>
      </div>
      <div class="card__body">
        <div class="card__title">${name}</div>
        <button type="button" class="card__button">
          <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
      </div>
    </div>`)
  }

  addCustomEvent() {
    this.elem.addEventListener('click', (e) => {
      const isButton = e.target.closest('.card__button')

      if (!isButton) return

      this.elem.dispatchEvent(new CustomEvent("product-add", {
        detail: this.product.id,
        bubbles: true
      }));

    })
  }
}
