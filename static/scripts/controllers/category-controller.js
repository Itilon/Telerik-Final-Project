/* eslint-disable no-undef */
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
        data.getAllArticles(),
        data.getLatestArticleTitles()])
        .then((
            [
                mainTemplate,
                titleTemplate,
                footerTemplate,
                firstParagraph,
                allArticles,
                latestTitles]) => {
            /* eslint-disable max-len */
            $main.html(mainTemplate([params, firstParagraph, allArticles, latestTitles]));
            $titularSection.html(titleTemplate(params));
            $footer.html(footerTemplate([firstParagraph, latestTitles]));
        });
}
