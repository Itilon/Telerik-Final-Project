import $ from 'jquery';
import Bootstrap from 'bootstrap';
import Handlebars from 'handlebars';
import Sammy from 'sammy';

import { getTemplate as getAboutTemplate } from 'aboutController';
import { rightSlider } from 'rightSlider';
import { leftSlider } from 'leftSlider';

const sammyApp = Sammy(function() {
    this.get('/', function() {
        this.redirect('#/home');
    });

    this.get('#/home', function() {
        console.log('Home Works');
    });

    this.get('#/portfolio', function() {
        console.log('Portfolio Works');
    });

    this.get('#/blog', function() {
        console.log('Blog Works');
    });

    this.get('#/about', getAboutTemplate);

    $(() => {
        sammyApp.run('/');
    });
});