import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'

document.addEventListener('DOMContentLoaded', (e) => {
    ;['#carousel_1', '#carousel_2', '#carousel_3'].forEach((id) => {
        carousel(id)
    })
})

function carousel(id) {
    const visibleCard =
        id === '#carousel_3'
            ? 6
            : id === '#carousel_2'
              ? 4
              : id === '#carousel_1'
                ? 2
                : 2
    let carouselWidth = document.querySelector(
        id + ' .carousel-inner'
    ).scrollWidth
    let cardWidth = document.querySelector(id + ' .carousel-item').clientWidth
    let scrollPosition = 0

    const next = document.querySelector(id + ' .carousel-control-next')
    const prev = document.querySelector(id + ' .carousel-control-prev')

    next.addEventListener('click', (e) => {
        if (scrollPosition < carouselWidth - cardWidth * visibleCard) {
            scrollPosition += cardWidth

            const inner = document.querySelector(id + ' .carousel-inner')
            inner.scrollTo({
                left: scrollPosition,
                top: 0,
                behavior: 'smooth',
            })
        }
    })

    prev.addEventListener('click', (e) => {
        if (scrollPosition > 0) {
            scrollPosition -= cardWidth

            const inner = document.querySelector(id + ' .carousel-inner')
            inner.scrollTo({
                left: scrollPosition,
                top: 0,
                behavior: 'smooth',
            })
        }
    })
}
