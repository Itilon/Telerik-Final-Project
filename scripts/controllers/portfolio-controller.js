import { template } from 'template';

const $main = $('#main-section');

export function getTemplate() {
    Promise.resolve(template.getTemplate('portfolio'))
        .then((template) => {
            console.log(template.$main);
            $main.html(template);
        });
};