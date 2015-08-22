Meteor.startup(function() {
  if (typeof BrowserPolicy === 'undefined') { return; }

  BrowserPolicy.content.allowScriptOrigin('www.googletagmanager.com');
  BrowserPolicy.content.allowFrameOrigin('www.googletagmanager.com');

  // gtm.js contains eval... ugh
  BrowserPolicy.content.allowEval();
});
