const leftArrow = $('.featured-left-arrow');
const sliderImages = $('.slider-img');

let featuredImage = $('#featured-image');
let currentBackground = featuredImage.css('background-image');
let previousImage = $(sliderImages[1]);
let previousBackground = previousImage.css('background-image');

leftArrow.click(function leftSlider() {
    featuredImage.css('background-image', previousBackground);
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

// export { leftSlider };
