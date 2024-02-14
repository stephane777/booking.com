import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'

document.addEventListener('DOMContentLoaded', (e) => {
    ;['#carousel_1', '#carousel_2'].forEach((id) => {
        carousel(id)
    })
})

function carousel(id) {
    // const isCarousel2 = id === '#carousel_2' ? 8 : 0
    const padding = id === '#carousel_2' ? 8 : id === '#carousel_1' ? 0 : 0
    const visibleCard = id === '#carousel_2' ? 4 : id === '#carousel_1' ? 2 : 2
    let carouselWidth = document.querySelector(
        id + ' .carousel-inner'
    ).scrollWidth
    let cardWidth =
        document.querySelector(id + ' .carousel-item').clientWidth + padding
    let scrollPosition = 0

    const next = document.querySelector(id + ' .carousel-control-next')
    const prev = document.querySelector(id + ' .carousel-control-prev')

    next.addEventListener('click', (e) => {
        // console.group('Next')
        // console.log('carouselWidth: ', carouselWidth)
        // console.log('cardWidth: ', cardWidth)
        // console.log('scrollPosition: ', scrollPosition)
        // console.log(
        //     'scrollPosition < carouselWidth - cardWidth * 4: ',
        //     scrollPosition < carouselWidth - cardWidth * visibleCard
        // )

        // console.groupEnd()
        if (scrollPosition < carouselWidth - cardWidth * visibleCard) {
            scrollPosition += cardWidth
            // console.log('next scrollPosition: ', scrollPosition)
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
            // console.log('prev scrollPosition: ', scrollPosition)
            const inner = document.querySelector(id + ' .carousel-inner')
            inner.scrollTo({
                left: scrollPosition,
                top: 0,
                behavior: 'smooth',
            })
        }
    })
}
