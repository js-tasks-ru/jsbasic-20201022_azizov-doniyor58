function initCarousel() {
  let translateX = 0

  const arrowRight = document.querySelector('.carousel__arrow_right')
  const arrowLeft = document.querySelector('.carousel__arrow_left')

  const carouselInner = document.querySelector('.carousel__inner')
  const carouselSlideWidth = carouselInner.offsetWidth

  // количество шагов = все слайды - первый слайд
  const stepCount = document.querySelectorAll('.carousel__slide').length - 1
  const CAROUSEL_MAX_WIDTH = carouselSlideWidth * stepCount

  const hideArrow = () => {
    const isFirstSlide = Math.abs(translateX) === 0
    const isLastSlide = Math.abs(translateX) === CAROUSEL_MAX_WIDTH
    const isAnotherSlide = !(isFirstSlide || isLastSlide)

    if (isFirstSlide) {
      arrowLeft.style.display = 'none'
      return
    }

    if (isLastSlide) {
      arrowRight.style.display = 'none'
      return
    }

    if (isAnotherSlide) {
      arrowLeft.style.display = ''
      arrowRight.style.display = ''
      return
    }
  }


  hideArrow()

  document.addEventListener('click', (e) => {
    const isRigthArrow = e.target.closest('.carousel__arrow_right') === arrowRight
    const isLeftArrow = e.target.closest('.carousel__arrow_left') === arrowLeft
    const isArrows = isRigthArrow || isLeftArrow

    if (!isArrows) return

    if (isRigthArrow) {
      translateX -= carouselSlideWidth
    }

    if (isLeftArrow) {
      translateX += carouselSlideWidth
    }

    carouselInner.style.transform = `translateX(${translateX}px)`

    hideArrow()
  })
}
