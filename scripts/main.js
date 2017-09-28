import $ from 'jquery';
import Bootstrap from 'bootstrap';
import Sammy from 'sammy';

const sammyApp = Sammy(function() {
    this.get('', () => {
        console.log('It Works!');
    });

    $(() => {
        sammyApp.run('');
    });
});