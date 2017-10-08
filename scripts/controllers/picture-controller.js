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
        data.getFirstParagraph()])
        .then(([pictureTemplate, titleTemplate, footerTemplate, data, firstParagraph]) => {
            $main.html(pictureTemplate([data, firstParagraph]));
            $titularSection.html(titleTemplate(data.title));
            $footer.html(footerTemplate(firstParagraph));
        });
};