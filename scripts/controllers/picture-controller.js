import { template } from 'template';
import { data } from 'data';

const $main = $('#main-section');

export function getTemplate(id) {
    Promise.all([template.getTemplate('picture'),
        data.getPicture(id),
        data.getFirstParagraph()])
        .then(([template, data, firstParagraph]) => {
            $main.html(template([data, firstParagraph]));
        });
};