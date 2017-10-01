const rightArrow = $('.featured-right-arrow');
const sliderImages = $('.slider-img');

let featuredImage = $('#featured-image');
let currentBackground = featuredImage.css('background');
let previousImage = $(sliderImages[2]);
let previousBackground = previousImage.css('background');

rightArrow.click(function rightSlider() {
    featuredImage.css('background', previousBackground);
    previousBackground = currentBackground;
    currentBackground = $(sliderImages[1]).css('background');
    $(sliderImages[1]).css('background', previousBackground);
    previousBackground = currentBackground;
    currentBackground = $(sliderImages[0]).css('background');
    $(sliderImages[0]).css('background', previousBackground);
    previousBackground = currentBackground;
    currentBackground = $(sliderImages[3]).css('background');
    $(sliderImages[3]).css('background', previousBackground);
    previousBackground = currentBackground;
    currentBackground = featuredImage.css('background');
    previousImage.css('background', previousBackground);
 });

// export { rightSlider };