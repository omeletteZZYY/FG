$(document).ready(() =>  {
    let currentSlide = 0;
    let isBusy = false;
    const slides = [
        'blog/b13.jpg',
        'blog/b9.jpg',
        'blog/b8.jpg',
        'blog/b10.jpg',
        'blog/b11.jpg',
        'blog/b12.jpg',
    ];

      // Обработчик кликов по стрелкам
      $('.slider-arrow').on('click', (e) => {
        const that = $(e.currentTarget);
        const slidesCount = slides.length - 1;

        if (!isBusy) {
            if (that.hasClass('right')) {
                currentSlide += 1;
                if (currentSlide > slidesCount) currentSlide = 0; // Если дошли до последнего слайда, возвращаемся к первому
            } else {
                currentSlide -= 1;
                if (currentSlide < 0) currentSlide = slidesCount; // Если дошли до первого слайда, возвращаемся к последнему
            }
            isBusy = true;
            // Плавная анимация смены слайдов
            $('.slider-image').animate({'opacity': 0}, 350, () => {
                $('.slider-image').css('background-image', 'url(' + slides[currentSlide] + ')');
                $('.slider-image').animate({'opacity': 1}, 350, () => isBusy = false);
            });
        }
    });
});
