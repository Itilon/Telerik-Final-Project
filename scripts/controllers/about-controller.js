import { template } from 'template';

const $main = $('#main-section');

export function getTemplate() {
    Promise.resolve(template.getTemplate('about'))
        .then((template) => {
            $main.html(template);
        });
};