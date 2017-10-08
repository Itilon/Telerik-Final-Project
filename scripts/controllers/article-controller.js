import { template } from 'template';
import { data } from 'data';

const $main = $('#main-section');
const $titularSection = $('#titular-section');
const $footer = $('#footer-section');

export function getTemplate(id) {
    Promise.all([template.getTemplate('article'),
        template.getTemplate('title'),
        template.getTemplate('footer'),
        data.getArticle(id),
        data.getFirstParagraph()])
        .then(([articleTemplate, titleTemplate, footerTemplate, data, firstParagraph]) => {
            $main.html(articleTemplate([data, firstParagraph]));
            $titularSection.html(titleTemplate(data.title));
            $footer.html(footerTemplate(firstParagraph));
        });
};