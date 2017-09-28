System.config({
  transpiler: 'plugin-babel',
  map: {
    // System.js Files:
   'plugin-babel': '../node_modules/systemjs-plugin-babel/plugin-babel.js',
   'systemjs-babel-build': '../node_modules/systemjs-plugin-babel/systemjs-babel-browser.js',

   // App Files:
   'main': './scripts/main.js'
  }
});

System.import('main');