import { template } from 'template';
import { data } from 'data';

const $main = $('#main-section');

export function getTemplate() {
    Promise.all([template.getTemplate('portfolio'),
        data.getPortfolio()])
        .then(([template, data]) => {
            $main.html(template(data));
        });
};