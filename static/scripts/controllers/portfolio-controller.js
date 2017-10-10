/* eslint-disable no-undef */
import { template } from 'template';
import { data } from 'data';
import { popupGallery } from 'popupGallery';

const $main = $('#main-section');
const $titularSection = $('#titular-section');
const $footer = $('#footer-section');

export function getTemplate() {
    Promise.all([template.getTemplate('portfolio'),
        template.getTemplate('title'),
        template.getTemplate('footer'),
        data.getPortfolio(),
        data.getFirstParagraph(),
        data.getLatestArticleTitles()])
        .then((
            [
                mainTemplate,
                titleTemplate,
                footerTemplate,
                portfolio,
                firstParagraph,
                latestTitles,
            ]) => {
            $main.html(mainTemplate(portfolio));
            $titularSection.html(titleTemplate('Portfolio'));
            $footer.html(footerTemplate([firstParagraph, latestTitles]));
        })
        .then(popupGallery);
}
