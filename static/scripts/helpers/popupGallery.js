/* eslint-disable no-undef */
const popupGallery = function() {
    const button = $('.zoom');
    button.click(() => {
        console.log('Clicked');
        return false;
    });
};

export { popupGallery };
