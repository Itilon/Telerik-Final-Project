System.config({
  transpiler: 'plugin-babel',
  map: {
    // System.js Files:
   'plugin-babel': '/libs/systemjs-plugin-babel/plugin-babel.js',
   'systemjs-babel-build': '/libs/systemjs-plugin-babel/systemjs-babel-browser.js',

   // App Files:
   'data': 'static/scripts/data.js',
   'firebase': 'static/scripts/firebase.config.js',
   'main': 'static/scripts/main.js',
   'template': 'static/scripts/template.js',

   // Controllers:
   'aboutController': 'static/scripts/controllers/about-controller.js',
   'articleController': 'static/scripts/controllers/article-controller.js',
   'categoryController': 'static/scripts/controllers/category-controller.js',
   'homeController': 'static/scripts/controllers/home-controller.js',
   'notFoundController': 'static/scripts/controllers/not-found-controller.js',
   'pictureController': 'static/scripts/controllers/picture-controller.js',
   'portfolioController': 'static/scripts/controllers/portfolio-controller.js',

   // Helpers:

   'rightSlider': 'static/scripts/helpers/rightSlider.js',
   'leftSlider': 'static/scripts/helpers/leftSlider.js',
   'popupGallery': 'static/scripts/helpers/popupGallery.js',

   // Library Files:
   'jquery': 'libs/jquery/dist/jquery.min.js',
   'bootstrap': 'libs/bootstrap/dist/js/bootstrap.min.js',
   'handlebars': 'libs/handlebars/dist/handlebars.min.js',
   'sammy': 'libs/sammy/lib/sammy.js'
  }
});

System.import('main');