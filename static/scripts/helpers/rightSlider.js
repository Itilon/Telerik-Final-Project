/* eslint-disable no-undef */
const rightSlider = function() {
    const rightArrow = $('.featured-right-arrow');
    const sliderImages = $('.slider-img');
    const sliderImageTitles = $('.slider-img-title');

    const featuredImage = $('#featured-image');
    const featuredImageTitle = $('#featured-image-title');
    let currentBackground = featuredImage.css('background-image');
    const previousImage = $(sliderImages[2]);
    const previousImageTitle = $(sliderImageTitles[2]).html();
    let previousBackground = previousImage.css('background-image');

    rightArrow.click(() => {
        featuredImage.css('background-image', previousBackground);
        featuredImageTitle.html(previousImageTitle);
        previousBackground = currentBackground;
        currentBackground = $(sliderImages[1]).css('background-image');
        $(sliderImages[1]).css('background-image', previousBackground);
        previousBackground = currentBackground;
        currentBackground = $(sliderImages[0]).css('background-image');
        $(sliderImages[0]).css('background-image', previousBackground);
        previousBackground = currentBackground;
        currentBackground = $(sliderImages[3]).css('background-image');
        $(sliderImages[3]).css('background-image', previousBackground);
        previousBackground = currentBackground;
        currentBackground = featuredImage.css('background-image');
        previousImage.css('background-image', previousBackground);
    });
};

export { rightSlider };
