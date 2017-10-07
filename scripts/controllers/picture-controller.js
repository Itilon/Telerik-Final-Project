import { template } from 'template';
import { data } from 'data';

const $main = $('#main-section');
const $titularSection = $('#titular-section');

export function getTemplate(id) {
    Promise.all([template.getTemplate('picture'),
        template.getTemplate('title'),
        data.getImage(id),
        data.getFirstParagraph()])
        .then(([pictureTemplate, titleTemplate, data, firstParagraph]) => {
            $main.html(pictureTemplate([data, firstParagraph]));
            $titularSection.html(titleTemplate(data.title));
        });
};