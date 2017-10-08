System.config({
  transpiler: 'plugin-babel',
  map: {
    // System.js Files:
   'plugin-babel': '../node_modules/systemjs-plugin-babel/plugin-babel.js',
   'systemjs-babel-build': '../node_modules/systemjs-plugin-babel/systemjs-babel-browser.js',

   // App Files:
   'data': './scripts/data.js',
   'firebase': './scripts/firebase.config.js',
   'main': './scripts/main.js',
   'template': './scripts/template.js',

   // Controllers:
   'aboutController': './scripts/controllers/about-controller.js',
   'articleController': './scripts/controllers/article-controller.js',
   'categoryController': './scripts/controllers/category-controller.js',
   'homeController': './scripts/controllers/home-controller.js',
   'notFoundController': './scripts/controllers/not-found-controller.js',
   'pictureController': './scripts/controllers/picture-controller.js',
   'portfolioController': './scripts/controllers/portfolio-controller.js',

   // Helpers:

   'rightSlider': './scripts/helpers/rightSlider.js',
   'leftSlider': './scripts/helpers/leftSlider.js',
   'popupGallery': './scripts/helpers/popupGallery.js',

   // Library Files:
   'jquery': '../node_modules/jquery/dist/jquery.min.js',
   'bootstrap': '../node_modules/bootstrap/dist/js/bootstrap.min.js',
   'handlebars': '../node_modules/handlebars/dist/handlebars.min.js',
   'sammy': '../node_modules/sammy/lib/sammy.js'
  }
});

System.import('main');