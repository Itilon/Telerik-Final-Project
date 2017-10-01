const leftArrow = $('.featured-left-arrow');
const sliderImages = $('.slider-img');

let featuredImage = $('#featured-image');
let currentBackground = featuredImage.css('background');
let previousImage = $(sliderImages[1]);
let previousBackground = previousImage.css('background');

leftArrow.click(function leftSlider() {
    featuredImage.css('background', previousBackground);
    previousBackground = currentBackground;
    currentBackground = $(sliderImages[2]).css('background');
    $(sliderImages[2]).css('background', previousBackground);
    previousBackground = currentBackground;
    currentBackground = $(sliderImages[3]).css('background');
    $(sliderImages[3]).css('background', previousBackground);
    previousBackground = currentBackground;
    currentBackground = $(sliderImages[0]).css('background');
    $(sliderImages[0]).css('background', previousBackground);
    previousBackground = currentBackground;
    currentBackground = featuredImage.css('background');
    previousImage.css('background', previousBackground);
 });

// export { leftSlider };
