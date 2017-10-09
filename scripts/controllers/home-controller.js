import { template } from 'template';
import { data } from 'data';
import { leftSlider } from 'leftSlider';
import { rightSlider } from 'rightSlider';
import { popupGallery } from 'popupGallery';

const $main = $('#main-section');
const $titularSection = $('#titular-section');
const $footer = $('#footer-section');

export function getTemplate() {
    Promise.all([template.getTemplate('home'),
        template.getTemplate('slider'),
        template.getTemplate('footer'),
        data.getPortfolio(),
        data.getLatestImages(),
        data.getLatestArticleTitles(),
        data.getQuote(),
        data.getFirstParagraph()])
            .then(([mainTemplate, sliderTemplate, footerTemplate, portfolio, latestImages, latestTitles, quote, firstParagraph]) => {
                $main.html(mainTemplate([portfolio, quote, firstParagraph]));
                $titularSection.html(sliderTemplate(latestImages));
                $footer.html(footerTemplate([firstParagraph, latestTitles]));
            })
            .then(leftSlider)
            .then(rightSlider)
            .then(popupGallery);
};