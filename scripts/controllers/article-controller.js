import { template } from 'template';
import { data } from 'data';

const $main = $('#main-section');
const $titularSection = $('#titular-section');

export function getTemplate(id) {
    Promise.all([template.getTemplate('article'),
        template.getTemplate('title'),
        data.getArticle(id),
        data.getFirstParagraph()])
        .then(([articleTemplate, titleTemplate, data, firstParagraph]) => {
            $main.html(articleTemplate([data, firstParagraph]));
            $titularSection.html(titleTemplate(data.title));
        });
};