import { template } from 'template';
import { data } from 'data';

const $main = $('#main-section');
const $titularSection = $('#titular-section');
const $footer = $('#footer-section')

export function getTemplate() {
    Promise.all([template.getTemplate('portfolio'),
        template.getTemplate('title'),
        template.getTemplate('footer'),
        data.getPortfolio(),
        data.getFirstParagraph(),
        data.getLatestArticleTitles()])
        .then(([mainTemplate, titleTemplate, footerTemplate, data, firstParagraph, latestTitles]) => {
            $main.html(mainTemplate(data));
            $titularSection.html(titleTemplate('Portfolio'));
            $footer.html(footerTemplate([firstParagraph, latestTitles]));
        });
};