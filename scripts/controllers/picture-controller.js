import { template } from 'template';
import { data } from 'data';

const $main = $('#main-section');
const $titularSection = $('#titular-section');
const $footer = $('#footer-section');

export function getTemplate(id) {
    Promise.all([template.getTemplate('picture'),
        template.getTemplate('title'),
        template.getTemplate('footer'),
        data.getImage(id),
        data.getLatestArticleTitles(),
        data.getFirstParagraph()])
        .then(([pictureTemplate, titleTemplate, footerTemplate, data, latestTitles, firstParagraph]) => {
            $main.html(pictureTemplate([data, latestTitles, firstParagraph]));
            $titularSection.html(titleTemplate(data.title));
            $footer.html(footerTemplate(firstParagraph));
        });
};