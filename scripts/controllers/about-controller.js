import { template } from 'template';

const $logo = $('#logo');

export function getTemplate() {
    Promise.resolve(template.getTemplate('about'))
        .then((template) => {
            $logo.html(template);
        });
};