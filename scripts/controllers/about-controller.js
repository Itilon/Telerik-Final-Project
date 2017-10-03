import { template } from 'template';
import { data } from 'data';

const $main = $('#main-section');

export function getTemplate() {
    Promise.all([template.getTemplate('about'),
        data.getContent()])
        .then(([template, data]) => {
            console.log(data);
            $main.html(template(data));
        });
};