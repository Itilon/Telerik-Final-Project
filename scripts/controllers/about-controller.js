import { template } from 'template';
import { data } from 'data';

const $main = $('#main-section');
const $titularSection = $('#titular-section');
const $footer = $('#footer-section')

export function getTemplate() {
    Promise.all([template.getTemplate('about'),
        template.getTemplate('title'),
        template.getTemplate('footer'),
        data.getAboutContent(),
        data.getFirstParagraph()])
        .then(([aboutTemplate, titleTemplate, footerTemplate, data, firstParagraph]) => {
            $main.html(aboutTemplate(data));
            $titularSection.html(titleTemplate('About Us'));
            $footer.html(footerTemplate(firstParagraph));
        });
};