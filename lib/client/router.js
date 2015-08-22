var _super = {
  route: Router.route
};

Router.route = function(name, options) {
  options = attachAnalyticsOptions.call(this, options);
  return _super.route.call(this, name, options);
};

var attachAnalyticsOptions = function(options) {
  options = options || {};

  if (shouldSendVirtualPageview.call(this, options)) {
    attachVirtualPageviewSender.call(this, options);
  }

  return options;
};

var shouldSendVirtualPageview = function(options) {
  if (options && typeof options.trackPageView !== 'undefined') {
    return !!options.trackPageView;
  }

  return !!this.options && !!this.options.trackPageView;
};

var attachVirtualPageviewSender = function(options) {
  var originalOnRun = options.onRun;

  options.onRun = function() {
    dataLayer.push({
      event: 'VirtualPageview',
      virtualPageURL: arguments[0].url
    });

    return callEventHandlerOrNext.call(this, originalOnRun, arguments);
  };
};

var callEventHandlerOrNext = function(handler, args) {
  if (handler) {
    return handler.apply(this, [].slice.apply(args));
  } else {
    this.next();
  }
};
