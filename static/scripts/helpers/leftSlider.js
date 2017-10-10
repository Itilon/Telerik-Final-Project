/* eslint-disable no-undef */
const leftSlider = function() {
    const leftArrow = $('.featured-left-arrow');
    const sliderImages = $('.slider-img');
    const sliderImageTitles = $('.slider-img-title');

    const featuredImage = $('#featured-image');
    const featuredImageTitle = $('#featured-image-title');
    let currentBackground = featuredImage.css('background-image');
    const previousImage = $(sliderImages[1]);
    const previousImageTitle = $(sliderImageTitles[1]).html();
    let previousBackground = previousImage.css('background-image');

    leftArrow.click(() => {
        featuredImage.css('background-image', previousBackground);
        featuredImageTitle.html(previousImageTitle);
        previousBackground = currentBackground;
        currentBackground = $(sliderImages[2]).css('background-image');
        $(sliderImages[2]).css('background-image', previousBackground);
        previousBackground = currentBackground;
        currentBackground = $(sliderImages[3]).css('background-image');
        $(sliderImages[3]).css('background-image', previousBackground);
        previousBackground = currentBackground;
        currentBackground = $(sliderImages[0]).css('background-image');
        $(sliderImages[0]).css('background-image', previousBackground);
        previousBackground = currentBackground;
        currentBackground = featuredImage.css('background-image');
        previousImage.css('background-image', previousBackground);
    });
};

export { leftSlider };
