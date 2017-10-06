import { template } from 'template';
import { data } from 'data';

const $main = $('#main-section');
const $titularSection = $('#titular-section');

export function getTemplate() {
    Promise.all([template.getTemplate('home'),
        template.getTemplate('slider'),
        data.getPortfolio(),
        data.getQuote(),
        data.getFirstParagraph()])
            .then(([mainTemplate, sliderTemplate, portfolio, quote, firstParagraph]) => {
                $main.html(mainTemplate([portfolio, quote, firstParagraph]));
                $titularSection.html(sliderTemplate());
            });
};