import { template } from 'template';
import { data } from 'data';

const $main = $('#main-section');
const $titularSection = $('#titular-section');

export function getTemplate() {
    Promise.all([template.getTemplate('about'),
        template.getTemplate('title'),
        data.getAboutContent()])
        .then(([aboutTemplate, titleTemplate, data]) => {
            $main.html(aboutTemplate(data));
            $titularSection.html(titleTemplate('About Us'))
        });
};