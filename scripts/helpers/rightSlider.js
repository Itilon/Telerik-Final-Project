const rightArrow = $('.featured-right-arrow');
const sliderImages = $('.slider-img');

let featuredImage = $('#featured-image');
let currentBackground = featuredImage.css('background-image');
let previousImage = $(sliderImages[2]);
let previousBackground = previousImage.css('background-image');

rightArrow.click(function rightSlider() {
    featuredImage.css('background-image', previousBackground);
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

// export { rightSlider };