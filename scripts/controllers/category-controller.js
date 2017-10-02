import { template } from 'template';

const $main = $('#main-section');

export function getTemplate(params) {
    Promise.resolve(template.getTemplate('category'))
        .then((template) => {
            console.log(params);
            $main.html(template(params));
        });
};