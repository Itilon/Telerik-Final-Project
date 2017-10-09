/* eslint-disable no-invalid-this */
import $ from 'jquery';
import Bootstrap from 'bootstrap';
import Handlebars from 'handlebars';
import Sammy from 'sammy';

import { firebase } from 'firebase';

import { getTemplate as getAboutTemplate } from 'aboutController';
import { getTemplate as getArticleTemplate } from 'articleController';
import { getTemplate as getCategoryTemplate } from 'categoryController';
import { getTemplate as getHomeTemplate } from 'homeController';
import { getTemplate as getPictureTemplate } from 'pictureController';
import { getTemplate as getPortfolioTemplate } from 'portfolioController';
import { getTemplate as get404Template } from 'notFoundController';

const sammyApp = Sammy(function() {

    this.get('/', function() {
        this.redirect('#/home');
    });

    this.get('#/home', getHomeTemplate);

    this.get('#/about', getAboutTemplate);

    this.get('#/portfolio', getPortfolioTemplate);

    this.get('#/picture/:id', function() {
        getPictureTemplate(this.params['id']);
    });

    this.get('#/blog', function() {
        getCategoryTemplate('Blog');
    });

    this.get('#/article/:id', function() {
        getArticleTemplate(this.params['id']);
    });

    this.notFound = get404Template;

    $(() => {
        sammyApp.run('/');
    });
});
