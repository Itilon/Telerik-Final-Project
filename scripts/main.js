import $ from 'jquery';
import Bootstrap from 'bootstrap';
import Handlebars from 'handlebars';
import Sammy from 'sammy';

import { getTemplate as getAboutTemplate } from 'aboutController';
import { getTemplate as getCategoryTemplate } from 'categoryController'; 
import { getTemplate as getPortolioTemplate } from 'portfolioController';
import { rightSlider } from 'rightSlider';
import { leftSlider } from 'leftSlider';

const sammyApp = Sammy(function() {
    this.get('/', function() {
        this.redirect('#/home');
    });

    this.get('#/home', function() {
        console.log('Home Works');
    });

    this.get('#/about', getAboutTemplate);

    this.get('#/portfolio', getPortolioTemplate);

    this.get('#/blog', function() {
        getCategoryTemplate('Handlebars Works');
    });

    $(() => {
        sammyApp.run('/');
    });
});