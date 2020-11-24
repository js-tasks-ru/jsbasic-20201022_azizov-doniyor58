import createElement from '../../assets/lib/create-element.js'


export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.currentSlide = 0

    this.render()
    this.addEventListeners()
  }

  render() {
    const slides = this.slides
      .map((slide) => `
        <div class="carousel__slide" data-id="${slide.id}">
          <img
            src="/assets/images/carousel/${slide.image}"
            class="carousel__img"
            alt="slide"
          />
          <div class="carousel__caption">
            <span class="carousel__price">€${slide.price.toFixed(2)}</span>
            <div class="carousel__title">${slide.name}</div>
            <button type="button" class="carousel__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
          </div>
        </div>`)
        .join('')

    this.elem = createElement(`
      <div class="carousel">
        <div class="carousel__arrow carousel__arrow_right">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </div>
        <div class="carousel__arrow carousel__arrow_left">
          <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
        </div>

        <div class="carousel__inner">
          ${slides}
        </div>
      </div>`)

    this.update()
  }

  addEventListeners() {

    this.elem.addEventListener('click', (e) => {
      const isButton = e.target.closest('.carousel__button')

      if (isButton) {
        const id = e.target.closest('[data-id]').dataset.id

        this.elem.dispatchEvent(new CustomEvent("product-add", {
          detail: id,
          bubbles: true
        }))
      }

      const isLeftArrow = e.target.closest('.carousel__arrow_left')
      const isRigthArrow = e.target.closest('.carousel__arrow_right')

      if (isLeftArrow) {
        this.prev()
      }

      if (isRigthArrow) {
        this.next()
      }
    })

  }

  sub(ref) {
    return this.elem.querySelector(`.carousel__${ref}`)
  }

  prev() {
    this.currentSlide--
    this.update()
  }

  next() {
    this.currentSlide++
    this.update()
  }

  update() {
    const offsetWidth = -(this.elem.offsetWidth * this.currentSlide)
    this.sub('inner').style.transform = `translateX(${offsetWidth}px)`

    const isFirstSlide = this.currentSlide === 0
    const isLastSlide = this.currentSlide === this.elem.querySelectorAll('.carousel__slide').length - 1

    if (isFirstSlide) {
      this.sub('arrow_left').style.display = 'none'
    } else {
      this.sub('arrow_left').style.display = ''
    }

    if (isLastSlide) {
      this.sub('arrow_right').style.display = 'none'
    } else {
      this.sub('arrow_right').style.display = ''
    }
  }
}
