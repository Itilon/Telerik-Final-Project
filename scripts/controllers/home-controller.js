import { template } from 'template';
import { data } from 'data';

const $main = $('#main-section');
const $titularSection = $('#titular-section');
const $footer = $('#main-footer');

export function getTemplate() {
    Promise.all([template.getTemplate('home'),
        template.getTemplate('slider'),
        template.getTemplate('footer'),
        data.getPortfolio(),
        data.getQuote(),
        data.getFirstParagraph()])
            .then(([mainTemplate, sliderTemplate, footerTemplate, portfolio, quote, firstParagraph]) => {
                $main.html(mainTemplate([portfolio, quote, firstParagraph]));
                $titularSection.html(sliderTemplate());
                $footer.html(footerTemplate(firstParagraph));
            });
};