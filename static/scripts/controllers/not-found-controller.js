/* eslint-disable no-undef */
import { template } from 'template';
import { data } from 'data';

const $main = $('#main-section');
const $titularSection = $('#titular-section');
const $footer = $('#footer-section');

export function getTemplate() {
    Promise.all([template.getTemplate('404'),
        template.getTemplate('title'),
        template.getTemplate('footer'),
        data.getFirstParagraph(),
        data.getLatestArticleTitles()])
        .then((
            [
                template404,
                titleTemplate,
                footerTemplate,
                firstParagraph,
                latestTitles,
            ]) => {
            $main.html(template404);
            $titularSection.html(titleTemplate('404! Not Found!'));
            $footer.html(footerTemplate([firstParagraph, latestTitles]));
        });
}
