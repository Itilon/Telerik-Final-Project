import { template } from 'template';

const $main = $('#main-section');
const $titularSection = $('#titular-section')

export function getTemplate() {
    Promise.all([template.getTemplate('404'),
        template.getTemplate('title')])
        .then(([template, titleTemplate]) => {
            $main.html(template);
            $titularSection.html(titleTemplate('404! Not Found!'));
        })
};