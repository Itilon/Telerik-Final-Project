System.config({
  transpiler: 'plugin-babel',
  map: {
    // System.js Files:
   'plugin-babel': '../node_modules/systemjs-plugin-babel/plugin-babel.js',
   'systemjs-babel-build': '../node_modules/systemjs-plugin-babel/systemjs-babel-browser.js',

   // App Files:
   'main': './scripts/main.js',
   'template': './scripts/template.js',
   'aboutController': './scripts/controllers/about-controller.js',

   // Library Files:
   'jquery': '../node_modules/jquery/dist/jquery.min.js',
   'bootstrap': '../node_modules/bootstrap/dist/js/bootstrap.min.js',
   'handlebars': '../node_modules/handlebars/dist/handlebars.min.js',
   'sammy': '../node_modules/sammy/lib/sammy.js'
  }
});

System.import('main');