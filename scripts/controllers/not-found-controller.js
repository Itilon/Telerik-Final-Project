import { template } from 'template';
import { data } from 'data';

const $main = $('#main-section');
const $titularSection = $('#titular-section');
const $footer = $('#footer-section');

export function getTemplate() {
    Promise.all([template.getTemplate('404'),
        template.getTemplate('title'),
        template.getTemplate('footer'),
        data.getFirstParagraph()])
        .then(([template, titleTemplate, footerTemplate, firstParagraph]) => {
            $main.html(template);
            $titularSection.html(titleTemplate('404! Not Found!'));
            $footer.html(footerTemplate(firstParagraph));
        })
};