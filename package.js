Package.describe({
  name: 'gorillastack:iron-router-gtm',
  version: '0.0.1',
  summary: 'Install google tag manager and track pageviews in iron-router',
  git: 'git@github.com:GorillaStack/meteor-iron-router-gtm.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.addFiles('iron-router-gtm.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('gorillastack:iron-router-gtm');
  api.addFiles('iron-router-gtm-tests.js');
});
