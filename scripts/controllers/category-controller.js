import { template } from 'template';
import { data } from 'data';

const $main = $('#main-section');
const $titularSection = $('#titular-section');
const $footer = $('#footer-section');

export function getTemplate(params) {
    Promise.all([template.getTemplate('category'),
        template.getTemplate('title'),
        template.getTemplate('footer'),
        data.getFirstParagraph(),
        data.getLatestArticleTitles()])
        .then(([mainTemplate, titleTemplate, footerTemplate, firstParagraph, latestTitles]) => {
            console.log(params);
            $main.html(mainTemplate(params));
            $titularSection.html(titleTemplate(params));
            $footer.html(footerTemplate([firstParagraph, latestTitles]));
        });
};