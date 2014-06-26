require.config({
  paths: {
    "jquery": "vendor/jquery/dist/jquery",
    "underscore": "vendor/underscore-amd/underscore",
    "backbone": "vendor/backbone-amd/backbone",
    "bootstrap": "vendor/bootstrap/dist/js/bootstrap",
  }
})

require(['views/app'], function (AppView) {
  new AppView;
})