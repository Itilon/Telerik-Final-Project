const popupGallery = function() {
    const button = $('.zoom');
    const pictureWrapper = $('#picture-wrapper');
    button.click(() => {
        const imgGallery = $('<div></div>');
        imgGallery.addClass('img-gallery');
        pictureWrapper.append(imgGallery);
        return false;
    });
};

export { popupGallery };