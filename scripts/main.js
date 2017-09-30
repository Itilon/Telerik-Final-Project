import $ from 'jquery';
import Bootstrap from 'bootstrap';
import Sammy from 'sammy';

const sammyApp = Sammy(function() {
    this.get('/', function() {
        this.redirect('#/home');
    });

    this.get('#/home', function() {
        console.log('Home Works');
    });

    this.get('#/portfolio', function() {
        console.log('Portfolio Works');
    })

    this.get('#/blog', function() {
        console.log('Blog Works');
    })

    this.get('#/about', function() {
        console.log('About Works');
    })

    $(() => {
        sammyApp.run('/');
    });
});