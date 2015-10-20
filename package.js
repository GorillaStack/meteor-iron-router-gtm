Package.describe({
  name: 'gorillastack:iron-router-gtm',
  version: '0.2.0',
  summary: 'Install google tag manager and track pageviews in iron-router',
  git: 'git@github.com:GorillaStack/meteor-iron-router-gtm.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0.1');
  api.use([
    'templating',
    'iron:router@1.0.0'
  ], 'client');

  api.addFiles([
    'lib/client/body.html',
    'lib/client/bulldozer.js',
    'lib/client/attach_google_tag_manager.js',
    'lib/client/router.js'
  ], 'client');

  api.addFiles([
    'lib/server/set_browser_policy.js'
  ], 'server');

  api.export('gtmBulldozer', 'client');
});

// Package.onTest(function(api) {
//   api.use('tinytest');
//   api.use('gorillastack:iron-router-gtm');
//   api.addFiles('iron-router-gtm-tests.js');
// });
