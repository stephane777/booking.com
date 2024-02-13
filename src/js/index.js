import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'

document.addEventListener('DOMContentLoaded', (e) => {
    let carouselWidth = document.querySelector('.carousel-inner').scrollWidth
    let cardWidth = document.querySelector('.carousel-item').clientWidth
    let scrollPosition = 0

    const next = document.querySelector('.carousel-control-next')
    next.addEventListener('click', (e) => {
        if (scrollPosition < carouselWidth - cardWidth * 4) {
            scrollPosition += cardWidth

            const inner = document.querySelector('.carousel-inner')
            inner.scrollTo({
                left: scrollPosition,
                top: 0,
                behavior: 'smooth',
            })
        }
    })

    const prev = document.querySelector('.carousel-control-prev')
    prev.addEventListener('click', (e) => {
        if (scrollPosition > 0) {
            scrollPosition -= cardWidth

            const inner = document.querySelector('.carousel-inner')
            inner.scrollTo({
                left: scrollPosition,
                top: 0,
                behavior: 'smooth',
            })
        }
    })
})
