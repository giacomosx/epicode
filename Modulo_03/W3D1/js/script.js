window.onload = function () {
    customCarousel()
}

function customCarousel() {
    const btnPrev = document.querySelectorAll('.prevBtn');
    const btnNext = document.querySelectorAll('.nextBtn');

    btnPrev.forEach(btn => {
        btn.addEventListener('click', function () {
            let idSlider = this.getAttribute('data-g-slider');
            const slidesWrapper = document.getElementById(idSlider);
            slidesWrapper.style.translate = 0;
        })
    })


    btnNext.forEach(btn => {
        btn.addEventListener('click', function () {
            let idSlider = this.getAttribute('data-g-slider');
            const slidesWrapper = document.getElementById(idSlider);
            slidesWrapper.style.translate = '-' + slidesWrapper.offsetWidth + 'px';
        })
    })
}